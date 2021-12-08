const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res ,next){

    const token = req.header('x-auth-token');

    if(!token){
        res.status(401).json({ msg: 'شما مجاز به دیدن این صفحه نیستید' });
    }

    try {
        const decoded = jwt.verify(token,config.get('jwtsecret'));

        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'توکن صحیح نیست'});
    }
}