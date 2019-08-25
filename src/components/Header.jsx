import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <a className={styles.logo} href="/">
                TRAVEL
            </a>
        </div>
    );
}

export default Header;