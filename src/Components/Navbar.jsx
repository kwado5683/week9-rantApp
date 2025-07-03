import Link from "next/link";

export default function Navbar() {
    return(
        <>


            <div>
                <Link href={"/"}>Rants</Link>

                <div className="">
                    <Link href={"/"}>HomePage</Link>
                    <Link href={"/Feeds"}>Feeds</Link>
                </div>

                <div>
                    <ul className="display-flex">
                        {/* <Link href={"/Feeds"}> login</Link> */}
                        {/* <Link href={"/CreateProfile"}> Create Account</Link> */}
                    </ul>
                </div>



            </div>
        </>
    )
}