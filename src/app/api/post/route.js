
import {auth,currentUser} from "@clerk/nextjs/server";
import {db} from "@/utils/dbConnection";
import { NextResponse } from "next/server";


export  async function POST(req) {

    const user = await currentUser();
    const {userId} = auth();
    const body = await req.json();

    const post = body.post;

    await db.query(`INSERT INTO post (name, post, clerk_userId) VALUES ( $1, $2, $3)`,
        [user.firstName, post, userId]
    );
    return NextResponse.json({success:true});
}