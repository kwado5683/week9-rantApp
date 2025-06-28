// app/CreateProfile/page.tsx or page.js

import { auth, currentUser } from "@clerk/nextjs/server";
import { db } from "@/utils/dbConnection";
import { redirect } from "next/navigation";

// ✅ Server action
export async function handleSubmit(formData) {
  "use server";

  const { userId } = await auth();
  const user = await currentUser();

  const name = formData.get("name");

  // 🛡 Guard: make sure user is logged in
  if (!userId || !user) {
    console.log("User not found or not authenticated");
    return;
  }

  // 🔍 Check if the user already exists
  const existing = await db.query(
    "SELECT * FROM userprofile WHERE clerk_userid = $1",
    [userId]
  );

  if (existing.rows.length === 0) {
    await db.query(
      `INSERT INTO userprofile (name, email, clerk_userid) VALUES ($1, $2, $3)`,
      [name, user.emailAddresses[0].emailAddress, userId]
    );
    console.log("User inserted");
  } else {
    console.log("User already exists, skipping insert");
  }

  redirect("/"); // ✅ Redirect only after success
}

// ✅ Server component
export default function CreateProfile() {
  return (
    <main className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Set Up Your Profile</h2>
      <form action={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium">Name</label>
          <input
            type="text"
            name="name"
            placeholder="What should we call you?"
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Continue to Home Page
        </button>
      </form>
    </main>
  );
}
