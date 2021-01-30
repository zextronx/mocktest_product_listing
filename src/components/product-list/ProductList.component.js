import {useEffect, useState} from 'react';
import axios from 'axios';

import ProductList from './components/ProductList';
import {baseUrl} from '../../config';

function ProductListComponent() {
    const [categories, setCategories] = useState([]);
    const [categoryId, setCategoryId] = useState('');
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchCategories();
    }, []);

    useEffect(() => {
        if (categoryId) {
            fetchProducts(categoryId);
        }
    }, [categoryId]);

    async function fetchCategories() {
        const {data} = await axios.get(`${baseUrl}/categories`);
        const [firstCat] = data;
        setCategories(data);
        if (firstCat) {
            setCategoryId(firstCat.id);
        }
    };

    function handleCategoryChange(event) {
        if (event.target.value) {
            setCategoryId(event.target.value);
        }
    }

    async function fetchProducts(catId) {
        const {data} = await axios.get(`${baseUrl}/products?categoryId=${catId}`);
        setProducts(data);
    }

    return (
        <div className="pt-5">
            <div className="d-flex justify-content-center"><h3 className="mb-3">Product Listing Page</h3></div>
            <div className="d-flex justify-content-center">
                <div className="mt-1 mr-3">Category</div>
                <select className="col-4 form-control" value={categoryId} onChange={handleCategoryChange}>
                    {categories.map((cat = {}) => <option value={cat.id} key={cat.id}>{cat.name}</option>)}
                </select>
            </div>
            <hr />
            {products.length
                ? <ProductList products={products} />
                : (
                    <div className="text-center alert alert-light">
                        <p><strong>Oops!</strong> No Records.</p>
                    </div>
                )}
            
        </div>
    );
}

export default ProductListComponent;
