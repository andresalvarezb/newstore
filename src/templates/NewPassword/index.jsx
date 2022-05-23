import React from 'react';

import Image from 'next/image';
import logoSale from '@logos/logo_yard_sale.svg';
import styles from './newPassword.module.css';

function NewPassword() {
	return (
		<div className={styles.NewPassword}>
			<div className='NewPassword-container'>
				<Image src={logoSale} alt='logo' className={styles.logo} />
				<h1 className={styles.title}>Create a new password</h1>
				<p className={styles.subtitle}>Enter a new password for yue account</p>
				<form action='/' className={styles.form}>
					<label htmlFor='password' className={styles.label}>
						Password
					</label>
					<input
						type='password'
						id='password'
						placeholder='*********'
						className={`[{${styles.input}, ${styles['input-password']}]`}
					/>
					<label htmlFor='new-password' className={styles.label}>
						Password
					</label>
					<input
						type='password'
						id='new-password'
						placeholder='*********'
						className={`[{${styles.input}, ${styles['input-password']}]`}
					/>
					<input
						type='submit'
						value='Confirm'
						className={`[${styles['primary-button']}, ${styles['login-button']}]`}
					/>
				</form>
			</div>
		</div>
	);
}

export default NewPassword;
