import Nav from "@/components/Nav";
import { useSession, signIn, signOut } from "next-auth/react"
import Head from "next/head";

export default function Layout({ children }) {
    const { data: session } = useSession();

    const login = async (e) => {
        e.preventDefault();
        await signIn("google")
    }
    if (!session) {
        return (
            <div className="bg-blue-900 w-screen h-screen flex items-center align-middle">
                <Head><title>Ecommerce - Admin Panel Login</title></Head>
                <div className="w-full flex items-center justify-center">

                    <h1 className="text-white px-24 font-bold text-6xl leading-20   " >Welcome to

                        <span className="block uppercase text-8xl py-4">

                            NextZone
                        </span>
                        Admin Dashboard</h1>
                    <div className="text-center w-full flex flex-col items-center justify-center gap-10    ">

                        <button
                            onClick={login}
                            className="bg-white p-2 px-4 rounded-lg"
                        >
                            Login with Google
                        </button>

                        <div className="flex flex-col gap-4 mt-10 flex-wrap">
                            <span className="text-gray-200">If you are not an Admin access, request for admin by sending your Gmail</span>
                            <button className="bg-gray-400 p-2 px-4 rounded-lg hover:bg-white">
                                <a href="mailto:shobhitkushwaha1406@gmail.com">
                                    Request for Admin Access
                                </a>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-bgPrimary min-w-screen min-h-screen flex items-center align-middle">
            <div className="w-full min-h-screen flex">
                <Nav />
                <div className="bg-bgSecondary flex-grow h-full min-h-screen  pb-10   ">
                    {children}
                </div>
            </div>
        </div>
    );
}
