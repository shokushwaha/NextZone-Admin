import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react"
import Spinner from "./Spinner";
export default function ProductForm({
    _id,
    title: existingTitle,
    description: existingDescription,
    price: existingPrice,
    images: existingImages }) {

    const router = useRouter();
    const [title, setTitle] = useState(existingTitle || "");
    const [description, setDescription] = useState(existingDescription || "");
    const [price, setPrice] = useState(existingPrice || "");
    const [goToProducts, setGoToProducts] = useState(false);
    const [images, setImages] = useState(existingImages || []);
    const [isUploading, setIsUploading] = useState(false);
    const saveProduct = async (e) => {
        e.preventDefault();
        const data = { title, description, price, images };
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



    const uploadImages = async (e) => {
        setIsUploading(true);
        const files = e.target?.files;
        if (files?.length > 0) {
            const data = new FormData();
            for (const file of files) {
                data.append('file', file);
            }

            const res = await axios.post('/api/upload', data);
            setImages(oldImages => {
                return [...oldImages, ...res.data.links]
            })
        }
        setIsUploading(false);
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


                <label>
                    Photos
                </label>
                <div className="mb-2 flex flex-wrap gap-2">
                    {!!images?.length && images.map(link => (
                        <div key={link} className="h-24">
                            <img src={link} alt="image" className="rounded-md" />
                        </div>
                    ))}
                    {isUploading && (
                        <div className="h-24  p-1 flex  items-center">
                            <Spinner />
                        </div>
                    )}

                    <label className="w-24 h-24 flex flex-col items-center justify-center text-gray-400 rounded-lg bg-gray-200 hover:bg-gray-300 hover:cursor-pointer "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                    </svg>
                        Upload
                        <input type="file" className="hidden" onChange={uploadImages} />
                    </label>

                </div>


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