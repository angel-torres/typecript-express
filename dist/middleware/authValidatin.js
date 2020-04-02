"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function authValidation(req, res, next) {
    console.log(req.body);
    next();
}
exports.authValidation = authValidation;
;
//# sourceMappingURL=authValidatin.js.map