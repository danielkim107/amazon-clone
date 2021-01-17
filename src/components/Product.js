import React from 'react';
import '../css/Product.css';
import Rating from '@material-ui/lab/Rating';

function Product({ id, title, image, price, rating }) {
	return (
		<div className="product">
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<small>₩</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					<Rating precision={0.5} defaultValue={rating} readOnly/>
				</div>
			</div>
			<img src={image} alt=""/>
			<button>Add to Basket</button>
		</div>
	)
}

export default Product;
