import React from 'react';
import styles from './RoomList.module.css';
import Room from './Room';

const RoomList = () => {
    return (
        <div className={styles.room_list}>
            <Room/>
            <Room/>
            <Room/>
            <Room/>
        </div>
    );
}

export default RoomList;
