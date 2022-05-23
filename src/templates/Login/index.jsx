import React, { useRef } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import logoSale from '@logos/logo_yard_sale.svg';
import styles from './login.module.css';

function Login() {
	const form = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			username: formData.get('email'),
			password: formData.get('password'),
		};
		console.log(data);
	};

	return (
		<div className={styles.Login}>
			<div className={styles['Login-container']}>
				<Image src={logoSale} alt='logo' className={styles.logo} />
				<form action='/' className='form' ref={form}>
					{' '}
					{/* here is the reference */}
					<label htmlFor='email' className={styles.label}>
						Email address
					</label>
					<input
						type='text'
						name='email'
						placeholder='platzi@example.cm'
						className={`[${styles.input}, ${styles['input-email']}]`}
					/>
					<label htmlFor='password' className='label'>
						Password
					</label>
					<input
						type='password'
						name='password'
						placeholder='*********'
						className={`[${styles.input}, ${styles['input-password']}]`}
					/>
					<button
						type='submit'
						onClick={handleSubmit}
						className={`[${styles['primary-button']}, ${styles['login-button']}]`}
					>
						Log in
					</button>
					<Link href='/'>
						<a>Forgot my password</a>
					</Link>
				</form>
				<button
					className={`[${styles['secondary-button']}, ${styles['signup-button']}]`}
				>
					Sign up
				</button>
			</div>
		</div>
	);
}

export default Login;
