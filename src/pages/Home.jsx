import React from 'react';
import Nav from '../components/Nav';
import styles from './Home.module.css';
import RoomList from '../components/RoomList';

class Home extends React.Component {
    state = {
        rooms: [],
    }

    componentDidMount() {
        const apiToken = 'ChgAeXZ7fnrioj68CQMKPu7j7CWoK38L7PV96rpOKHE8qfe26EfVM5DbFHTL';

        fetch('https://challenge.thef2e.com/api/thef2e2019/stage6/rooms', {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer ' + apiToken,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success === true) {
                    this.setState({ rooms: data.items });
                } else {
                    throw new Error('資料格式錯誤')
                }
            })
            .catch(error => {
                console.log(error);
                alert('無法取得資料');
            });
    }

    render() {
        return (
            <div className={styles.home}>
                <div className={styles.home_header}>
                    <Nav />
                </div>
                <div className={styles.hr} />
                <div className={styles.home_content}>
                    <RoomList rooms={this.state.rooms} />
                </div>
            </div>
        );
    }
}

export default Home;