import React from 'react';
import Image from 'next/image';
import ProductInfo from '@components/ProductInfo';
import iconClose from '@assets/icons/icon_close.png';
import styles from './productDetail.module.css';

function ProductDetail() {
	return (
		<aside className={styles.ProductDetail}>
			<div className={styles['ProductDetail-close']}>
				<Image src={iconClose} alt='close' />
			</div>
			<ProductInfo />
		</aside>
	);
}

export default ProductDetail;
