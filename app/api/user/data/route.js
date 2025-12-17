import connectDB from "@/config/db";
import User from "@/models/User";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const { userId } = getAuth(request);
        if (!userId) {
            return NextResponse.json({ success: false }, { status: 401 });
        }

        await connectDB();

        const user = await User.findOneAndUpdate(
            { clerkId: userId },
            {
                $setOnInsert: {
                    clerkId: userId,
                    cartItems: {},
                    role: "user",
                },
            },
            { new: true, upsert: true }
        );

        return NextResponse.json({ success: true, user });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { success: false, message: "Server error" },
            { status: 500 }
        );
    }
}
