import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function EditProductPage() {
    const router = useRouter();
    const {id} = router.query;
    useEffect(() => {
        axios.get('api/products?id='+id).then(response => {})
    }, [id])
    return (
        <Layout>
            Edit product form here!
        </Layout>
    )
}