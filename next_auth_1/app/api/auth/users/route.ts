import startDb from "@/public/lib/db";
import userModel from "@/public/model/userModel";
import { error } from "console";
import { NextResponse } from "next/server";

interface NewUserRequest {
    email: string;
    password: string;
}
interface NewUserResponse {
    id: number;
    email: string;
}
type NewResponse = NextResponse<{ user?: NewUserResponse; error?: string }>


export const POST = async (req: Request): Promise<NewResponse> => {
    const body = (await req.json()) as NewUserRequest;

    await startDb()

    const oldUser = await userModel.findOne({ email: body.email })
    if (oldUser)
        return NextResponse.json(
            { error: "email is already in use" },
            { status: 400 }

        )
    const user = await userModel.create({ ...body })
    return NextResponse.json({ user: { id: user.id.toString(), email: user.email, role: user.role } })

}