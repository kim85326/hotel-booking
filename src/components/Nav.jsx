import React from 'react';
import styles from './Nav.module.css';

const Nav = () => {
    return (
        <div className={styles.nav}>
            <button className={`${styles.nav_item} ${styles.active}`}>
                精選房源
            </button>
            <button className={styles.nav_item}>
                好評房源
            </button>
            <button className={styles.nav_item}>
                特殊房源
            </button>
            <button className={styles.nav_item}>
                平價房源
            </button>
        </div>
    );
}

export default Nav;