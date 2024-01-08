import Layout from "@/components/Layout";
import { useState } from "react";

function NewProduct() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    async function createProduct(){
        ev.preventDefault();
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
                    onChange={ev => setName(ev.target.value)} />
                <label>Description</label>
                <textarea 
                    placeholder="Description"
                    value={description}
                    onChange={ev => setDescription(ev.target.value)}/>
                <label>Price (in USD)</label>
                <input 
                    type="number" 
                    placeholder="Price"
                    value={price}
                    onChange={ev => setPrice(ev.target.value)} />
                <button type="submit" className="btn-primary">Save</button>
            </form>        
        </Layout>
    )
}

export default NewProduct;