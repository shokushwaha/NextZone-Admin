import Layout from "@/components/Layout"
import axios from "axios";
import { useSession } from "next-auth/react"
import Head from 'next/head';
import { useState, useEffect } from "react";

export default function Home() {
  const { data: session } = useSession();
  const [countProducts, setCountProducts] = useState();
  const [countCategories, setCountCategories] = useState();
  useEffect(() => {
    axios.get('/api/countproducts').then(response => {
      setCountProducts(response.data);
    })

    axios.get('/api/countcategories').then(response => {
      setCountCategories(response.data);
    })

  }, [])
  return (
    <>
      <Head>
        <title>Home Ecommerce-Admin</title>
      </Head>
      <Layout>
        <div className="text-blue-900 flex justify-between ">
          <h2>

            Hello, {session?.user?.name}
          </h2>
          <div className="flex bg-gray-200 gap-1 text-black items-center rounded-lg overflow-hidden" >

            <img src={session?.user?.image} alt="" className="h-10 w-10 " />
            <span className="py-1 px-2">

              {session?.user?.name}
            </span>


          </div>

        </div>


        <div className="flex flex-col gap-4 bg-white mt-4">
          <div className="border-b-2 border-textPrimary  flex h-10 ">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
            </svg>
          </div>
          <div className="flex gap-4 justify-center">

            <div className="stat-box">
              <span className="text-xl">
                Total Products
              </span>

              <span className="font-bold text-2xl mt-2">
                {countProducts}
              </span>
            </div>
            <div className="stat-box">
              <span className="text-xl">
                Total Categories
              </span>
              <span className="font-bold text-2xl mt-2">

                {countCategories}
              </span>
            </div>
          </div>
        </div>

        <span className="bg-textTertiary p-4 rounded-xl flex items-center justify-center mt-10 uppercase">

          Analytics coming soon....
        </span>

      </Layout>
    </>
  )
}
