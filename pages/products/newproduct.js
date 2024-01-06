import Layout from "@/components/Layout";

function NewProduct() {
    return (
        <Layout>
            <h1>New Product</h1>
            <label>Product Name</label>
            <input type="text" placeholder="Product Name" />
            <label>Description</label>
            <textarea placeholder="Description"></textarea>
            <label>Price (in USD)</label>
            <input type="text" placeholder="Price" />
        </Layout>
    )
}

export default NewProduct;