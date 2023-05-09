import Layout from "@/components/Layout";
import { Category } from "@/models/Category";
import axios from "axios";
import { useState, useEffect } from "react";
export default function categories() {

    const [name, setName] = useState();
    const [categories, setCategories] = useState([]);
    const saveCategory = async (e) => {
        e.preventDefault();
        await axios.post('/api/categories', { name });
        setName('');
    }

    useEffect(() => {
        axios.get('/api/categories').then(response => {
            setCategories(response.data);
        })
    }, []);

    return (
        <Layout>

            <h1>Categories</h1>
            <label >New Category Name</label>
            <form onSubmit={saveCategory} className="flex gap-1">

                <input type="text" placeholder="Category Name" className="mb-0" value={name} onChange={e => setName(e.target.value)} />

                <button type='submit' className="btn-primary">Save</button>
            </form>

            <table className="basic mt-10">
                <thead>
                    <tr>
                        <td>Category Name</td>
                    </tr>
                </thead>
                <tbody>
                    {categories.length > 0 && categories.map(category => (
                        <tr>
                            <td>
                                {category.name}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Layout>
    )
}
