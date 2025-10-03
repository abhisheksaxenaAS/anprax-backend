// backend/src/models/Contact.js
import mongoose, { Schema } from "mongoose";
import { SERVICES } from "../constants.js";

const contactSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            lowercase: true,
            trim: true,
            match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
        },
        phone: {
            type: String,
            trim: true
        },
        company: {
            type: String,
            trim: true
        },
        service: {
            type: String,
            enum: {
                values: SERVICES,
                message: 'Invalid service selected'
            },
            trim: true
        },
        message: {
            type: String,
            required: [true, 'Message is required'],
            trim: true,
            minlength: [10, 'Message must be at least 10 characters long']
        }
    },
    {
        timestamps: true
    }
);

export const Contact = mongoose.model("Contact", contactSchema);















// import mongoose, { Schema } from "mongoose";

// const SERVICES = [
//     "Web Development",
//     "Mobile App Development",
//     "Digital Marketing",
//     "SEO & SEM",
//     "UI/UX Design",
//     "Cloud Solutions",
//     "E-commerce Development",
//     "Other"
// ];

// const contactSchema = new Schema(
//     {
//         name: {
//             type: String,
//             required: true,
//             trim: true,
//             index: true
//         },
//         email: {
//             type: String,
//             required: true,
//             lowercase: true,
//             trim: true,
//         },
//         phone: {
//             type: String,
//             // Remove required: true if phone is optional (based on your frontend form)
//         },
//         company: {
//             type: String,
//             trim: true
//         },
//         service: {
//             type: String,
//             enum: {
//                 values: SERVICES,
//                 message: 'Invalid service selected'
//             },
//             trim: true
//         },
//         message: {
//             type: String,
//             required: true,
//             trim: true
//         }
//     },
//     {
//         timestamps: true
//     }
// );

// export const Contact = mongoose.model("Contact", contactSchema)


// // userSchema.pre("save", async function (next) {
// //     if (!this.isModified("password")) return next();

// //     this.password = await bcrypt.hash(this.password, 10)
// //     next()
// // })

// // userSchema.methods.isPasswordCorrect = async function (password) {
// //     return await bcrypt.compare(password, this.password)
// // }

// // userSchema.methods.generateAccessToken = function () {
// //     return jwt.sign(
// //         {
// //             _id: this._id,
// //             email: this.email,
// //             username: this.username,
// //             fullName: this.fullName
// //         },
// //         process.env.ACCESS_TOKEN_SECRET,
// //         {
// //             expiresIn: process.env.ACCESS_TOKEN_EXPIRY
// //         }
// //     )
// // }
// // userSchema.methods.generateRefreshToken = function () {
// //     return jwt.sign(
// //         {
// //             _id: this._id,

// //         },
// //         process.env.REFRESH_TOKEN_SECRET,
// //         {
// //             expiresIn: process.env.REFRESH_TOKEN_EXPIRY
// //         }
// //     )
// // }