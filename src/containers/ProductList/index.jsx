import React from 'react';
import useFetchData from '@hooks/useFetchData';
import ProductItem from '@components/ProductItem';
import styles from './productList.module.css';

// TODO: it's important understand how work the API to use it
const API = 'https://api.escuelajs.co/api/v1/products';

// `${API}?limit=${12}&offset=${0}`

// ? Stateful
function ProductList() {
	const products = useFetchData(API);

	return (
		<section className={styles['main-container']}>
			<div className={styles.ProductList}>
				{products.map((product) => (
					<ProductItem key={product.id} product={product} />
				))}
			</div>
		</section>
	);
}

export default ProductList;
