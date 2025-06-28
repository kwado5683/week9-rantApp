import { SignUp } from "@clerk/nextjs";
// import { db } from "@/utils/dbConnection";

export default async function SignUpPage() {


//   if (userId) {
//     const user = await currentUser();

//     const existing = await db.query(
//       "SELECT * FROM userprofile WHERE userId = $1",
//       [userId]
//     );

//     if (existing.rows.length === 0) {
//       await db.query(
//         `INSERT INTO userprofile (userId, name, email) VALUES ($1, $2, $3)`,
//         [user.id, user.firstName, user.emailAddresses[0].emailAddress]
//       );
//     }

//     return <div>Welcome, {user.firstName}!</div>;
//   }

  return (
    <>
      <h1>This is the sign-up page</h1>
      <SignUp />
    </>
  );
}
