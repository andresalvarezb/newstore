import React from 'react';
import Header from '@components/Header';
import styles from './layout.module.css';

function Layout({ children }) {
	return (
		<div className={styles.Layout}>
			<Header />
			{children}
		</div>
	);
}

export default Layout;
