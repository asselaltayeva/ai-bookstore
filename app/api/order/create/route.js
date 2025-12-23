import { inngest } from "@/config/inngest";
import Product from "@/models/Product";
import User from "@/models/User";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { userId } = getAuth(request);
        const { address, items } = await request.json();

        if (!address || items.length === 0) {
            return NextResponse.json({
                success: false,
                message: "Address and items are required to place an order",
            })
        }

        // calculate amount using items, use reduce method
        const amount = await items.reduce(async (acc, item) => {
            const product = await Product.findById(item.product);
            return await acc + product.offerPrice * item.quantity;
        },0); // initial value 0

        // send event to inngest to process order asynchronously
        await inngest.send({
            name:'order/created',
            data: {
                userId,
                address,
                items,
                amount: amount + Math.floor(amount * 0.05), // add 5% tax
                date: Date.now(),
            }
        })

        // clear user's cart after placing order
        const user = await User.findById(userId);
        user.cartItems = {};
        await user.save();

        return NextResponse.json({
            success: true,
            message: "Order placed successfully",
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({success: false, message: error.message});
    }
}