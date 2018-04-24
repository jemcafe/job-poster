module.exports = (req, res, next) => {
    if (!req.session.user) {
        req.session.user = {
            id: null,
            username: null,
            email: null,
            first_name: null,
            last_name: null,
            // avatar: null
        }
    }
    next();
}