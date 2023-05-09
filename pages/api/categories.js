import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";

export default async function handler(req, res) {
    const { method } = req;
    await mongooseConnect();

    if (method === "POST") {
        const { name } = req.body;
        const categoryDoc = await Category.create({ name });
        res.json(categoryDoc);
    }

    if (method === "GET") {
        res.json(await Category.find());
    }
}