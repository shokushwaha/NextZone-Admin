import Layout from "@/components/Layout";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();
  // console.log(session?.user);
  return (
    <Layout>
      <div className="flex text-blue-900 justify-between p-4 items-center">
        <h2>Hello, <b>{session?.user?.name}</b></h2>
        <div className="flex gap-2pr-2 rounded-lg text-black bg-gray-300 overflow-hidden items-center justify-center">

          <img src={session?.user?.image} alt="" className="h-10 w-10" />
          <span className="px-2">{session?.user?.name}</span>
        </div>
      </div>
    </Layout>
  );
}
