import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import addToCartIcon from '@icons/bt_add_to_cart.svg';
import styles from './productItem.module.css';

// ? Stateful
function ProductItem({ product }) {
	const { images, price, title } = product;

	const { addToCart } = useContext(AppContext);

	const handleClick = (item) => {
		addToCart(item);
	};

	return (
		<div className={styles.ProductItem}>
			<Image
				src={images[0]}
				alt={title}
				width='100%'
				height='100%'
				layout='responsive'
			/>
			<div className={styles['product-info']}>
				<div>
					<p>${price}</p>
					<p>{title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					<Image src={addToCartIcon} layout='fill' alt='' />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
