import ProductItem from './ProductItem';

function ProductList({products}) {
    return (
        <div className="row">
            {products.map((product) => <ProductItem key={product.id} product={product} />)}
        </div>
    );
}

export default ProductList;
