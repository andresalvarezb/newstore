import React, { useContext } from 'react';
import styles from './productItem.module.css';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import addToCartIcon from '@assets/icons/bt_add_to_cart.svg';

// ? Stateful
function ProductItem({ product }) {
	const { images, price, title } = product;

	const { addToCart } = useContext(AppContext);

	const handleClick = (item) => {
		addToCart(item);
	};

	return (
		<div className={styles.ProductItem}>
			<Image src={images[0]} alt={title} />
			<div className={styles['product-info']}>
				<div>
					<p>${price}</p>
					<p>{title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					<Image src={addToCartIcon} alt='' />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
