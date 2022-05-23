import React from 'react';

import Link from 'next/link';
import Image from 'next/image';
import logoSale from '@logos/logo_yard_sale.svg';
import styles from './sendEmail.module.css';

function SendEmail() {
	return (
		<div className={styles.SendEmail}>
			<div className={styles['form-container']}>
				<Image src={logoSale} alt='logo' className={styles.logo} />
				<h1 className={styles.title}>Email has been sent!</h1>
				<p className={styles.subtitle}>
					Please check your inbox for instructions on how to reset the password
				</p>
				<div className={styles['email-image']}>
					<Image src='../../assets/icons/email.svg' alt='email' />
				</div>
				<button
					className={`[${styles['primary-button']}, ${styles['login-button']}]`}
				>
					Login
				</button>
				<p className={styles.resend}>
					<span>Did not receive the email?</span>
					<Link href='/'>
						<a>Resend</a>
					</Link>
				</p>
			</div>
		</div>
	);
}

export default SendEmail;
