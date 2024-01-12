import Layout from "@/components/Layout";
import Link from "next/link";
import { useEffect } from "react";
import axios from "axios";

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
        </Layout>
    );
}

export default Products;