import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

userSchema = new Schema(
    {
        avatar: {
            type: {
                url: String,
                localPath: String
            },
            default: {
                url: `https://placehold.co/200x200`,
                localPath: ""
            }
        },
        username: {
            required: true,
            type: String,
            unique: true,
            lowercase: true,
            index: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            index: true,
            trim: true,
            lowercase: true
        },
        fullName: {
            type: String,
            trim: true,
        },
        password: {
            type: String,
            required: true
        },
        isEmailVerified: {
            type: Boolean,
            default: false
        },
        refreshToken: {
            type: String
        },
        forgotPasswordToken: {
            type: String
        },
        forgotPasswordExpiry: {
            type: Date
        },
        emailVerificationToken: {
            type: String
        },
        emailVerificationExpiry: {
            type: Date
        }
    }, {
        timestamps: true
    }
)

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")){
        return next();
    }

    this.password = bcrypt.hash(this.password, 10);
    next();
});

export const User = mongoose.model("User", userSchema);