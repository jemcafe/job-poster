const bcrypt = require('bcrypt');
const saltRounds = 12;

module.exports = {
    login: (req, res) => {
        const db = req.app.get('db');
        const { session } = req; 
        const { username, password } = req.body;

        // Check for the username
        db.find_user([username]).then( users => {
            // If the user is not found...
            if ( !users.length ) {
                res.status(404).json('User not found');
            } else {
                // Check if the passwords match
                bcrypt.compare(password, users[0].password).then( passwordMatch => {
                    // If the passwords match the session object is sent
                    if ( passwordMatch ) {
                        session.user = {
                            id: users[0].id,
                            username: users[0].username,
                            email: users[0].email,
                            first_name: users[0].first_name,
                            last_name: users[0].last_name
                        }
                        res.status(200).json( session.user );
                    } else {
                        res.status(403).json('Wrong password');
                    }
                });
            }
        }).catch(err => console.log(err));
    },

    register: (req, res) => {
        const db = req.app.get('db');
        const { session } = req;
        const { username, password, email, first_name, last_name } = req.body;
        const avatar = null;

        // basic valid email test ( checks the structure of the string )
        const emailReg = /^([A-Za-z0-9_\-\.]){1,}\@([A-Za-z0-9_\-\.]){1,}\.([A-Za-z]){2,4}$/;
        const emailIsValid = emailReg.test( email );

        // username 
        if ( !username.length ) {
            res.status(412).send('No username');

        // password
        } else if ( !password.length ) {
            res.status(412).send('No password');

        // valid email
        } else if ( !emailIsValid ) {
            res.status(406).send('Invalid email');

        // first name
        } else if ( !first_name.length ) {
            res.status(412).send('No first name');

        // last name
        } else if ( !last_name.length ) {
            res.status(412).send('No last name');

        // If the neccessary info is submitted...
        } else {
            // Check if the username is taken
            db.find_user([username]).then( users => {
                // If the user is found ( username is taken )...
                if ( users.length ) {
                    res.status(401).send('Username unavailable');

                // Create the user
                } else {
                    bcrypt.hash( password, saltRounds ).then( hashedPassword => {
                        db.create_user([
                            username, 
                            hashedPassword, 
                            email, 
                            first_name, 
                            last_name, 
                            avatar
                        ]).then( newUser => {
                            session.user = {
                                id: newUser[0].id,
                                username: newUser[0].username,
                                email: newUser[0].email,
                                first_name: newUser[0].first_name,
                                last_name: newUser[0].last_name
                            }
                            res.status(200).json( session.user );
                        }).catch(err => console.log(err));
                    });
                }
            }).catch(err => console.log(err));
        }
    },

    logout: (req, res) => {
        req.session.destroy();
        res.send('Logged out');
    },

    getUser: (req, res) => {
        res.status(200).json(req.session.user);
    }
}