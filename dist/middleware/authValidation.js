"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function authValidation(request, response, next) {
    const { username, password } = request.body;
    if (username && password) {
        next();
    }
    else {
        response
            .status(400)
            .json({ message: "Must provide username and password." });
    }
}
exports.authValidation = authValidation;
;
//# sourceMappingURL=authValidation.js.map