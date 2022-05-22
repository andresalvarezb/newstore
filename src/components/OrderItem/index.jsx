import React, { useContext } from 'react';
import styles from './orderItem.module.css';

import AppContext from '@context/AppContext';
import iconClose from '@icons/icon_close.png';

// ? stateless
function OrderItem({ product }) {
	const { removeFromCart } = useContext(AppContext);
	const { images, title, price } = product;

	const handleRemove = (item) => {
		removeFromCart(item);
	};

	return (
		<div className={styles.OrderItem}>
			<figure>
				<img src={images[0]} alt={title} />
			</figure>
			<p>{title}</p>
			<p>${price}</p>
			<img src={iconClose} alt='close' onClick={() => handleRemove(product)} />
		</div>
	);
}

export default OrderItem;
