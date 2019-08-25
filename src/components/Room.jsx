import React from 'react';
import styles from './Room.module.css';

const Room = (props) => {
    const { room } = props;
    return (
        // eslint-disable-next-line
        <a className={styles.room} href="#">
            <img className={styles.picture} src={room.imageUrl} alt=""/>
            <div className={styles.name}>
                {room.name}
            </div>
            <div className={styles.info}>
                <div className={styles.info_name}>
                    {room.name}
                </div>
                <div className={styles.info_price_box_group}>
                    <div className={styles.info_price_box}>
                        <div className={styles.info_price_box_title}>
                            平日(一~四)
                        </div>
                        <div className={styles.info_price_box_content}>
                            $NT {room.normalDayPrice} / 晚
                        </div>
                    </div>
                    <div className={styles.info_price_box}>
                        <div className={styles.info_price_box_title}>
                            假日(五~日)
                        </div>
                        <div className={styles.info_price_box_content}>
                            $NT {room.holidayPrice} / 晚
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
}

export default Room;
