import Layout from "@/components/Layout";
import { useState } from "react";

function NewProduct() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    async function createProduct(){
        const data = {title, description, price};
        await axios.post('/api/products', data);
    }
    return (
        <Layout>
            <form onSubmit={createProduct}>
                <h1>New Product</h1>
                <label>Product Name</label>
                <input 
                    type="text" 
                    placeholder="Product Name"
                    value={name}
                    onChange={event => setName(event.target.value)} />
                <label>Description</label>
                <textarea 
                    placeholder="Description"
                    value={description}
                    onChange={event => setDescription(event.target.value)}/>
                <label>Price (in USD)</label>
                <input 
                    type="number" 
                    placeholder="Price"
                    value={price}
                    onChange={event => setPrice(event.target.value)} />
                <button type="submit" className="btn-primary">Save</button>
            </form>        
        </Layout>
    )
}

export default NewProduct;