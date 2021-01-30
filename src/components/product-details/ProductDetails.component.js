import {useEffect, useState} from 'react';
import axios from 'axios';
import {withRouter} from "react-router";

import {baseUrl} from '../../config';

function ProductDetailsComponent(props) {
    const {match: {params = {}}} = props;
    const {id} = params;
    const [product, setProduct] = useState({});

    useEffect(() => {
        async function fetchProductDetails () {
            const {data} = await axios.get(`${baseUrl}/products/${id}`);
            setProduct(data);
        }
        fetchProductDetails();
    }, [id]);

    return (
        <div className="p-5">
            <div className="d-flex justify-content-center"><h3 className="mb-3">Product Details Page</h3></div>
            <hr />
            <div className="row">
                <div className="col-md-6"><img style={{width: 'inherit'}} src={product.imageUrl} alt="" /></div>
                <div className="col-md-6">
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>
                </div>
            </div>
        </div>
    );
}

export default withRouter(ProductDetailsComponent);
