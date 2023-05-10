import Nav from "@/components/Nav"
import { useSession, signIn, signOut } from "next-auth/react"
import { useState } from "react"
import Logo from "./Logo";
export default function Layout({ children }) {
    const { data: session } = useSession()
    const [showNav, setShowNav] = useState(false);
    if (!session) {
        return (<div className="bg-bgSecondary w-screen h-screen flex items-center" >
            <div className=" text-center w-full">
                <button className="bg-textTertiary rounded-lg py-2 px-4 hover:scale-110 " onClick={() => signIn('google')}> Login with Google</button>
            </div>

        </div >)
    }
    return (
        <>
            <div className="bg-bgPrimary min-h-screen " >
                <div className="p-4 md:hidden flex items-center">
                    <button
                        onClick={() => setShowNav(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M3 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.25zm0 4.5A.75.75 0 013.75 9h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <div className="flex grow justify-center">

                        <Logo />
                    </div>
                </div>
                <div className="flex">
                    <Nav show={showNav} />
                    <div className=" flex-grow  p-4 ">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}
