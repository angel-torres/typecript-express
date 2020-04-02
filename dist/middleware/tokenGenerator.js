"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
function generateToken(username, userId) {
    const secret = process.env.SECRET;
    const payload = {
        username,
        userId
    };
    const token = jwt.sign(payload, secret);
    return token;
}
exports.generateToken = generateToken;
function validateToken(request, response, next) {
    const secret = process.env.SECRET;
    const token = jwt.sign({}, secret);
}
exports.validateToken = validateToken;
//# sourceMappingURL=tokenGenerator.js.map