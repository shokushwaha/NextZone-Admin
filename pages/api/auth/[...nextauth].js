import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import clientPromise from "@/lib/mongodb";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import md5 from "md5";

const adminEmails = ["6f1370b01cbabc921b8e87272e2fec40"];

export const authOptions = {
    debug: true,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    adapter: MongoDBAdapter(clientPromise),
    callbacks: {
        session: async ({ session, user }) => {
            console.log(user);
            if (!adminEmails.includes(md5(user?.email))) {
                return false;
            }
            session.user.isAdmin = true;
            return session;
        },
    },
};

export default NextAuth(authOptions);
