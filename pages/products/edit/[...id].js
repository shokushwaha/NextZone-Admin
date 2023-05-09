import Layout from "@/components/Layout";
import ProductForm from "@/components/ProductForm";
import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function EditProductPage() {
    const router = useRouter();
    const { id } = router.query;

    const [productInfo, setProductInfo] = useState(null);

    useEffect(() => {
        axios.get('/api/products?id=' + id).then(response => {
            setProductInfo(response.data);
        })

    }, []);

    return (
        <>
            <Layout>
                <h1>Edit Product</h1>
                {productInfo && <ProductForm {...productInfo} />}
            </Layout>
        </>
    )
}