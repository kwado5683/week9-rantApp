// import {auth} from "@clerk/nextjs/server" 
import { db } from "@/app/utils/dbConnection";



export default async function Posts() {

    async function handleSubmit(formData) {
        const post = formData.post
        await db.query(`INSERT INTO post(post) VALUES ($1)`),
        [post]


    }

    revalidatePath(`/Posts`);
    redirect(`/feeds`);


// redirct to feeds
    return (
        <>

            <h1> What's on your mind</h1>
            <form action={handleSubmit}>
                <fieldset>
                    <label htmlFor="post"></label>
                    <input type="text" placeholder="Create a Post" />

                    <button type="submit">Post</button>

                   
                </fieldset>
            </form>
        </>
    )
}