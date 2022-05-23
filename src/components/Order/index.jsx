import React from 'react';

import Image from 'next/image';
import arrow from '@icons/arrow.svg';
import styles from './order.module.css';

function Order() {
	return (
		<div className={styles.Order}>
			<p>
				<span>03.25.21</span>
				<span>6 articles</span>
			</p>
			<p>$560.00</p>
			<Image src={arrow} alt='arrow' />
		</div>
	);
}

export default Order;
