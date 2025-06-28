import { db } from "@/app/utils/dbConnection";

export default async function Feeds() {

    const allFeeds = await db.query(`SELECT * FROM posts`)


    return (
        <>
        </>
    )
}