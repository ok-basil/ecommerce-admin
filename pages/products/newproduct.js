import Layout from "@/components/Layout";
import { useState } from "react";

function NewProduct() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    
    return (
        <Layout>
            <h1>New Product</h1>
            <label>Product Name</label>
            <input type="text" placeholder="Product Name" />
            <label>Description</label>
            <textarea placeholder="Description"></textarea>
            <label>Price (in USD)</label>
            <input type="number" placeholder="Price" />
            <button className="btn-primary">Save</button>
        </Layout>
    )
}

export default NewProduct;