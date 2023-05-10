import { mongooseConnect } from "@/lib/mongoose";
import { isAdminRequest } from "./auth/[...nextauth]";
import { Category } from "@/models/Category";


export default async function handler(req, res) {
    const { method } = req;
    await mongooseConnect();
    await isAdminRequest(req, res);

    if (method === "DELETE") {
        await Category.deleteMany({});
        res.json('ok');
    }
}