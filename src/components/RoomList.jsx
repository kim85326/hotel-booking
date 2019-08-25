import React from 'react';
import styles from './RoomList.module.css';
import Room from './Room';

const RoomList = (props) => {
    return (
        <div className={styles.room_list}>
            {props.rooms.map((room) => <Room room={room} key={room.id}/>)}
        </div>
    );
}

export default RoomList;
