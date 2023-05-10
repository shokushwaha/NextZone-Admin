import Layout from "@/components/Layout"
import axios from "axios"
import Head from "next/head"
import Swal from "sweetalert2"
export default function Settings() {
    const clearProducts = async () => {

        Swal.fire({
            title: "Are you sure?",
            text: `Do you want to clear all the entries of Product Databse?`,

            showCancelButton: true,
            confirmButtonColor: '#d55',
            confirmButtonText: 'Yes, Clear!',
            cancelButtonText: "No, cancel it!",
            reverseButtons: true,

        }).then(async result => {
            if (result.isConfirmed) {
                await axios.delete('/api/delproducts');
            }
        });

    }

    const clearCategories = async () => {
        Swal.fire({
            title: "Are you sure?",
            text: `Do you want to clear all the entries of Categories Database?`,

            showCancelButton: true,
            confirmButtonColor: '#d55',
            confirmButtonText: 'Yes, Clear!',
            cancelButtonText: "No, cancel it!",
            reverseButtons: true,

        }).then(async result => {
            if (result.isConfirmed) {
                await axios.delete('/api/delcategories');
            }
        });


    }

    return (
        <>
            <Head>
                <title>Settings</title>
            </Head>
            <Layout>


                <h1>Settings</h1>

                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                        </svg>
                        Clear all the entries from Products Database?
                        <button
                            className=" bg-red-400 p-2 text-white rounded-md hover:bg-red-500 shadow-md flex gap-1 items-center w-20"
                            onClick={clearProducts}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25" />
                            </svg>
                            Clear
                        </button>
                    </div>
                    <div className="flex gap-2 items-center">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                        </svg>
                        Clear all the entries from Categories Database?
                        <button
                            className="bg-red-400 p-2 text-white rounded-md hover:bg-red-500 shadow-md flex gap-1 items-center w-20"
                            onClick={clearCategories}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25" />
                            </svg>
                            Clear
                        </button>
                    </div>
                </div>

            </Layout>
        </>
    )
}
