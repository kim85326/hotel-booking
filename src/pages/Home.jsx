import React from 'react';
import Nav from '../components/Nav';
import styles from './Home.module.css';
import RoomList from '../components/RoomList';

const Home = () => {
    return(
        <div className={styles.home}>
            <div className={styles.home_header}>
                <Nav/>
            </div>
            <div className={styles.hr}/>
            <div className={styles.home_content}>
                <RoomList/>
            </div>
        </div>
    );
}

export default Home;