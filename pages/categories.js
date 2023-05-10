import Layout from "@/components/Layout";
import axios from "axios";
import { useState, useEffect } from "react";
// import Swal from 'sweetalert2'
import Swal from "sweetalert2";
export default function categories() {

    const [name, setName] = useState();
    const [categories, setCategories] = useState([]);
    const [parentCategory, setParentCategory] = useState();
    const [editedCategory, setEditedCategory] = useState(null);
    // const swal = new Swal();
    const saveCategory = async (e) => {
        e.preventDefault();
        const data = { name, parentCategory };
        if (editedCategory) {
            data._id = editedCategory._id;
            await axios.put('/api/categories', data);
            setEditedCategory(null);
        }
        else {
            await axios.post('/api/categories', data);
        }
        setName('');
        setParentCategory('');
        fetchCategories();
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        axios.get('/api/categories').then(response => {
            setCategories(response.data);
        })
    }

    const editCategory = (category) => {
        setEditedCategory(category);
        setName(category.name);
        setParentCategory(category.parent?._id);

    }

    const deleteCategory = async (category) => {
        Swal.fire({
            title: "Are you sure?",
            text: `Do you want to delete ${category.name}`,

            showCancelButton: true,
            confirmButtonColor: '#d55',
            confirmButtonText: 'Yes, Delete!',
            cancelButtonText: "No, cancel it!",
            reverseButtons: true,

        }).then(async result => {
            if (result.isConfirmed) {
                const _id = category._id;
                await axios.delete('/api/categories?_id=' + _id);
                fetchCategories();
            }

        }
        );

    }

    return (
        <Layout>

            <h1>Categories</h1>
            <label >

                {editedCategory ? `Edit Category ${editedCategory.name}` :
                    `New Category Name`}</label>
            <form onSubmit={saveCategory} className="flex gap-1">

                <input type="text" placeholder="Category Name" className="mb-0" value={name} onChange={e => setName(e.target.value)} />

                <select className="mb-0"
                    value={parentCategory}
                    onChange={e => setParentCategory(e.target.value)}>
                    <option value="">No parent category</option>
                    {categories.length > 0 && categories.map(category => (
                        <option
                            value={category._id}>{category.name}</option>
                    ))}
                </select>

                <button type='submit' className="btn-primary">Save</button>
            </form>

            <table className="basic mt-10">
                <thead>
                    <tr>
                        <td>Category Name</td>
                        <td>Parent Category</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {categories.length > 0 && categories.map(category => (
                        <tr>
                            <td>
                                {category.name}
                            </td>
                            <td>
                                {category?.parent?.name}
                            </td>
                            <td><button className="btn-primary mr-1" onClick={() => editCategory(category)}>Edit</button></td>
                            <td><button className="btn-primary" onClick={() => deleteCategory(category)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Layout>
    )
}
