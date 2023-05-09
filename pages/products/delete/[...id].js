import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";

export default function DeleteProductPage() {
    const router = useRouter();
    const { id } = router.query;
    const [productInfo, setProductInfo] = useState(null);
    useEffect(() => {
        if (!id) {
            return;
        }

        axios.get('/api/products?id=' + id).then(response => {
            setProductInfo(response.data);
        })
    }, [id]);

    const deleteProduct = async () => {
        await axios.delete('/api/products?id=' + id);
        goBack();
    }

    const goBack = () => {
        router.push('/products')
    }

    return (<>
        <Layout>
            <h1 className="text-center pt-4 mb-10">
                Do you really want to delete  <span className="text-blue-600 text-xl font-black">
                    {productInfo?.title}?
                </span>
            </h1>
            <div className="flex gap-2 justify-center">

                <button className="btn-red" onClick={deleteProduct}>Yes</button>
                <button className="btn-default" onClick={goBack}>No</button>
            </div>
        </Layout>
    </>)
}