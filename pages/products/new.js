import Layout from "@/components/Layout";
import ProductForm from "@/components/ProductForm";

export default function NewProduct() {
    return (
        <Layout>
            <div className="m-4">
                <h1>Add Product</h1>
                <ProductForm />
            </div>
        </Layout>
    );
}
