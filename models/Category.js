import mongoose, { model, models, Schema } from "mongoose";

const PropertySchema = new Schema({
    name: String,
    values: String,
});

const CategorySchema = new Schema({
    name: { type: String, required: true },
    parent: { type: Schema.Types.ObjectId, ref: 'Category' },
    properties: [PropertySchema],
});

export const Category = models?.Category || mongoose.model('Category', CategorySchema);
