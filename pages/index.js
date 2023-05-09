import { useSession, signIn, signOut } from "next-auth/react"
export default function Home() {
  const { data: session } = useSession()
  if (!session) {
    return (<div className="bg-blue-900 w-screen h-screen flex items-center" >
      <div className="text-center w-full">
        <button className="bg-white rounded-lg py-2 px-4" onClick={() => signIn('google')}> Login with Google</button>
      </div>

    </div >)
  }
  return (
    <>
      Signed in as {session.user.email}
      <button onClick={() => signOut()}>Sign out</button>
    </>
  )
}
