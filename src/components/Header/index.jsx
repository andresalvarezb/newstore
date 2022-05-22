import React, { useContext, useState } from 'react';
import styles from './header.module.css';

import Menu from '@components/Menu';
import Link from 'next/link';
import MyOrder from '@containers/MyOrder';
import iconMenu from '@icons/icon_menu.svg';
import AppContext from '@context/AppContext';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';

// ? Stateful
function Header() {
	const [toggle, setToggle] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false);
	const { state } = useContext(AppContext);

	const handleToggle = () => {
		setToggle(!toggle);
	};

	return (
		<nav className={styles.Nav}>
			<img src={iconMenu} alt='menu' className='menu' />
			<div className='navbar-left'>
				<img src={logo} alt='logo' className='nav-logo' />
				<ul>
					<li>
						{' '}
						<Link href='/'>
							<a>All</a>{' '}
						</Link>
					</li>
					<li>
						{' '}
						<a href='/'>Clothes</a>{' '}
					</li>
					<li>
						{' '}
						<a href='/'>Electronics</a>{' '}
					</li>
					<li>
						{' '}
						<a href='/'>Furniture</a>{' '}
					</li>
					<li>
						{' '}
						<a href='/'>Toys</a>{' '}
					</li>
					<li>
						{' '}
						<a href='/'>Others</a>{' '}
					</li>
				</ul>
			</div>
			<div className='navbar-right'>
				<ul>
					<li className='navbar-email' onClick={handleToggle}>
						platzi@example.com
					</li>
					<li
						className='navbar-shopping-cart'
						onClick={() => setToggleOrders(!toggleOrders)}
					>
						<img src={shoppingCart} alt='shopping cart' />
						{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
					</li>
				</ul>
			</div>
			{toggle && <Menu />}
			{toggleOrders && <MyOrder />}
		</nav>
	);
}

export default Header;
