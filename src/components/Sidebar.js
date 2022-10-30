import React, {Component} from 'react';
import '../styles/App.css';



class Sidebar extends Component {
    
    render () {
        var roomList = this.props.rooms.map((r, index) => (
            <div className="sideBarElement">
                <div className="sideBarElementTop">
                    <div className="sideBarElementTopLogo"></div>
                    <div className="sideBarElementTopText" key={index}>{r.room}</div>

                </div>
        
                <SideBarElementBottom temp={r.temp} hum={r.hum} key={index} /> 
            </div>

            ));


        return (
            <div id="sideBar"> 

            <input type="text" id="searchBar" id="search" placeholder="Search room">
            
            </input>
    
            {roomList} 

            </div>
        )
    }
        
}

const SideBarElementBottom = props => {
    return (
        <div className="sideBarElementBottom">
            <div className="sideBarElementBottomContainer">   
                <div className="smallText">
                    TEMPERATURE
                </div>

                <div className="largeText">
                    {props.temp} °c
                </div>
            </div>
            
            <div className="verticalDivider"></div>
            <div className="sideBarElementBottomContainer">
                <div className="smallText">
                    HUMIDITY
                </div>

                <div className="largeText">
                    {props.hum} %
                </div>
            </div>
        </div>
    );
}


export default Sidebar;
