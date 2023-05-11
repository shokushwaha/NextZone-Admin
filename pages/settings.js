import Layout from "@/components/Layout";
import { useSession, signIn, signOut } from "next-auth/react"

export default function Settings() {
    return (
        <Layout>
            Settings page
        </Layout>
    );
}
