import Layout from "@/components/Layout";
import Link from "next/link";

function Products() {
    return (
        <Layout>
            <Link href={'/products/newproduct'} className="bg-blue-900 text-white px-2 py-1 rounded-md">Add new product</Link>
        </Layout>
    );
}

export default Products;