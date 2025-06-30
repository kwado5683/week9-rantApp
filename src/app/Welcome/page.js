import {db} from "@/utils/dbConnection"
import { auth, currentUser } from "@clerk/nextjs/server";






export default async function Welcome() {

    const result= await db. query(`SELECT name FROM userprofile ORDER BY id DESC LIMIT 1`);

    const name = result.rows[0]?.name || "Guest";







    


    return(
        <>

            <h1>Welcome to Rants {name}</h1>
        </>
    )
}