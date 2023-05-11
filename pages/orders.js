import Layout from "@/components/Layout";
import { useSession, signIn, signOut } from "next-auth/react"

export default function Orders() {
    return (
        <Layout>
            orders page
        </Layout>
    );
}
