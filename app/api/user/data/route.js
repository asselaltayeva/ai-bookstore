import connectDB from "@/config/db";
import User from "@/models/User";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const { userId } = getAuth(request);

        if (!userId) {
            return NextResponse.json(
                { success: false, message: "Unauthorized" },
                { status: 401 }
            );
        }

        await connectDB();
        let user = await User.findOne({ clerkId: userId });
        if (!user) {
            user = await User.create({
                clerkId: userId,
                cartItems: {},
                role: "user",
            });
        }

        return NextResponse.json({
            success: true,
            user,
        });

    } catch (error) {
        console.error("USER FETCH ERROR:", error);
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 500 }
        );
    }
}
