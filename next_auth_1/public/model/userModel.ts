import { Model, models, model, } from "mongoose";
import { Document, Schema } from 'mongoose'
import bcrypt from 'bcrypt'


interface UserDocument extends Document {
    // name: string;
    email: string;
    password: string;
    role: "admin" | "user"
}

interface Methods {
    comparePassword: (password: string) => Promise<boolean>
}

const UserSchema = new Schema<UserDocument, Model<UserDocument>, Methods>({
    email: { type: String, required: true, unique: true, },
    // name: { type: String, required: true, },
    password: { type: String, required: true, },
    role: { type: String, enum: ["admin", "user"], default: "user" },
})
// Hash the password before saving 

UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next()
    try {
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)

        next()
    } catch (error) {
        throw error
    }
})

// Compare password method

UserSchema.methods.comparePassword = async function (password) {
    try {
        return await bcrypt.compare(password, this.password)
    } catch (error) {
        throw error
    }


}
const userModel = models.User || model<UserDocument>("User", UserSchema)

export default userModel as Model<UserDocument, {}, Methods>;

