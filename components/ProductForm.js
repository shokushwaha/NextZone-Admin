import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react"
export default function ProductForm({
    _id,
    title: existingTitle,
    description: existingDescription,
    price: existingPrice }) {

    const router = useRouter();
    const [title, setTitle] = useState(existingTitle || "");
    const [description, setDescription] = useState(existingDescription || "");
    const [price, setPrice] = useState(existingPrice || "");
    const [goToProducts, setGoToProducts] = useState(false);

    const saveProduct = async (e) => {
        e.preventDefault();
        const data = { title, description, price };
        if (_id) {

            await axios.put('/api/products', { ...data, _id });
            setGoToProducts(true);
        }
        else {

            await axios.post('/api/products', data);
            setGoToProducts(true);
        }
    }

    if (goToProducts) {
        router.push('/products');
    }
    return (
        <>

            <form onSubmit={saveProduct}>



                <label >Product Name</label>
                <input
                    type="text"
                    placeholder="Product Name"
                    value={title}
                    onChange={e => setTitle(e.target.value)} />

                <label >Description</label>
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}></textarea>

                <label >Price (in USD)</label>
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={e => setPrice(e.target.value)} />

                <button
                    type="submit"
                    className="btn-primary">
                    Save
                </button>
            </form >

        </>
    )
}