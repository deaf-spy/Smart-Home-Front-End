import React, {Component} from 'react';
import Sidebar from '../components/Sidebar';
import {SideBarElementBottom} from '../components/Sidebar';
import Main from '../components/Main';
import Tiles from '../components/Tiles';
import '../styles/App.css';

class Home extends Component {

    constructor(props) {
        super(props);
        this.rooms = [{room: "Main Bedroom", temp: 25, hum: 8}, {room: "Bathroom", temp: 22, hum: 13}, {room: "kitchen", temp: 23, hum: 17}];
        React.createRef();

    }

    addRoom() {
        // to do
    }
    
    render () {
        var currentRoom = 0;
        var displayRoom = this.rooms[currentRoom];

        
        return (

            <>
                <div id="Top">Smart Home</div>
                
                <div id="Wrapper">
                    <Sidebar rooms={this.rooms}/>
                    <Main curRoom={displayRoom}/>
                </div>
            </>
        );
    
    }

}


export default Home;

