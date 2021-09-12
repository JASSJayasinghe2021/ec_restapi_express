require('dotenv').config();
const jwt = require('jsonwebtoken');

const getCokies = (headerCookies) => {
    const rawCookies = headerCookies.split('; ');
    const parsedCookies = {};
    rawCookies.forEach(rawCookie => {
        const parsedCookie = rawCookie.split('=');
        parsedCookies[parsedCookie[0]] = parsedCookie[1];
    });
    return parsedCookies
}


const veryfyToken = (req, res, next) => {
    const token = req.cookies.pat;
    console.log('Token ----- ' + token);
    if (!token) {
        return res.sendStatus(403);
    }
    try {
        const data = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
        req.userData = data;
        next();
    } catch {
        return res.sendStatus(403);
    }
}

module.exports = {
    veryfyToken
}
