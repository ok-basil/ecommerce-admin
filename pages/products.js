import Layout from "@/components/Layout";
import Link from "next/link";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('/api/products').then(response => {
            setProducts(response.data);
        });
    }, []);
    return (
        <Layout>
            <Link href={'/products/newproduct'} className="bg-blue-900 text-white px-2 py-1 rounded-md">Add new product</Link>
            <table>
                <thead>
                    <tr>
                        <td>Product Name</td>
                        <td></td>
                    </tr>
                    <tbody>
                        {products.map(product => (
                            <tr>
                                <td>{product.title}</td>
                                <td></td>
                            </tr>
                        ))}
                    </tbody>
                </thead>
            </table>
        </Layout>
    );
}

export default Products;