import React from 'react';
import styles from './menu.module.css';

//  ? Stateless
function Menu() {
	return (
		<div className={styles.Menu}>
			<ul>
				<li>
					<a href='/' className='title'>
						My orders
					</a>
				</li>
				<li>
					<a href='/'>My account</a>
				</li>
				<li>
					<a href='/'>Sign out</a>
				</li>
			</ul>
		</div>
	);
}

export default Menu;
