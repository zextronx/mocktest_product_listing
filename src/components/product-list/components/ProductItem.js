import {Link} from 'react-router-dom';

function ProductItem({product = {}}) {
    const {imageUrl, name, id} = product;
    const navigationRoute = `/product/${id}`;

    return (
        <div className="col-sm-3 col-md-6 col-lg-4">
            <div className="card mb-5">
                <Link to={navigationRoute}>
                    <img className="card-img-top" src={imageUrl} alt="" />
                </Link>
                <div className="card-body">
                    <h5 className="card-title text-center"><Link to={navigationRoute}>{name}</Link></h5>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
