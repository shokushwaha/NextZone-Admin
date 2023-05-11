import mongoose, { model, Schema, models } from "mongoose";

const ProductPropertiesSchema = new Schema({
    name: { type: String, required: true },
    values: { type: String, required: true },
    property: { type: Schema.Types.ObjectId, ref: 'Property', required: true }
});

const ProductSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    images: [{ type: String }],
    properties: [{ type: ProductPropertiesSchema, required: false }],
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
});

export const Product = models.Product || mongoose.model('Product', ProductSchema);