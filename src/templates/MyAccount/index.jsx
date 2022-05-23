import React from 'react';
import styles from './myAccount.module.css';

function MyAccount() {
	return (
		<div className={styles.MyAccount}>
			<div className={styles['MyAccount-container']}>
				<h1 className='title'>My account</h1>
				<form action='/' className={styles.form}>
					<div>
						<label htmlFor='name' className={styles.label}>
							Name
						</label>
						<p className='value'>Cam Yoko</p>
						<label htmlFor='email' className={styles.label}>
							Email
						</label>
						<p className='value'>camilayokoo@gmail.com</p>
						<label htmlFor='password' className={styles.label}>
							Password
						</label>
						<p className={styles.value}>*********</p>
					</div>
					<input
						type='submit'
						value='Edit'
						className={`[${styles['secondary-button']}, ${styles['login-button']}]`}
					/>
				</form>
			</div>
		</div>
	);
}

export default MyAccount;
