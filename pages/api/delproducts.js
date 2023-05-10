import { mongooseConnect } from "@/lib/mongoose";
import { isAdminRequest } from "./auth/[...nextauth]";
import { Product } from "@/models/Product";


export default async function handler(req, res) {
    const { method } = req;
    await mongooseConnect();
    await isAdminRequest(req, res);

    if (method === "DELETE") {
        await Product.deleteMany({});
        res.json('ok');
    }
}