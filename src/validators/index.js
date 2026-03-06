import { body } from "express-validator";

const userRegisterValidator = () => {
    return [
        body("email")
            .trim()
            .notEmpty()
            .withMessage("email is required!")
            .isEmail()
            .withMessage("email is invalid!"),

        body("username")
            .trim()
            .notEmpty()
            .withMessage("username is required!")
            .isLowercase()
            .withMessage("username must be in lowercase")
            .isLength({
                min: 3
            })
            .withMessage("username must be atleast 3 char long"),

        body("password")
            .trim()
            .notEmpty()
            .withMessage("password is required!")
    ]
}

export {
    userRegisterValidator
}