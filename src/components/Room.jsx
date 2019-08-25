import React from 'react';
import styles from './Room.module.css';

const Room = () => {
    return (
        <a className={styles.room} href="/">
            <img className={styles.picture} src="https://images.unsplash.com/photo-1551776235-dde6d482980b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80" alt=""/>
            <div className={styles.name}>
                Deluxe Single Room
            </div>
            <div className={styles.info}>
                <div className={styles.info_name}>
                    Deluxe Single Room
                </div>
                <div className={styles.info_price_box_group}>
                    <div className={styles.info_price_box}>
                        <div className={styles.info_price_box_title}>
                            平日(一~四)
                        </div>
                        <div className={styles.info_price_box_content}>
                            $NT 1,380 / 晚
                        </div>
                    </div>
                    <div className={styles.info_price_box}>
                        <div className={styles.info_price_box_title}>
                            假日(五~日)
                        </div>
                        <div className={styles.info_price_box_content}>
                            $NT 1,500 / 晚
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
}

export default Room;
