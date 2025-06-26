import Link from "next/link";

export default function Navbar() {
    return(
        <>


            <div>
                <h1> Rants</h1>

                <div>
                    <h1>HomePage</h1>
                </div>

                <div>
                    <ul className="display-flex">
                        <Link href={"/Posts"}> login</Link>
                        <Link href={"/Posts"}> Create Account</Link>
                    </ul>
                </div>



            </div>
        </>
    )
}