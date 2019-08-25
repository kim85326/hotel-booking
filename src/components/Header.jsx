import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            {/* eslint-disable-next-line */}
            <a className={styles.logo} href="#">
                TRAVEL
            </a>
        </div>
    );
}

export default Header;