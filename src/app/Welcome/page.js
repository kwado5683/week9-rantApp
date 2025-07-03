import { db } from "@/utils/dbConnection";
import { redirect } from "next/navigation";

// import { auth, currentUser } from "@clerk/nextjs/server";


export default async function Welcome() {
  const result = await db.query(`SELECT name FROM userprofile ORDER BY id DESC LIMIT 1`);
  const name = result.rows[0]?.name || "Guest";




  redirect("/Feeds")



  return (
    <>
      <h1>
        Welcome to Rants -{" "}
        <span className="text-lg font-bold">{name}</span>
      </h1>
    </>
  );
}
