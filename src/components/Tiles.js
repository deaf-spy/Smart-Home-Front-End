import React, {Component} from 'react';
import '../styles/App.css';

class Tiles extends Component {
    
    constructor(props) {
        super(props);
        this.row1 = [{appliance: "Air Conditioner", status: "Off", text: "TEMP"}, {appliance: "Television", status: "Off", text: "DISCOVERY HD"}, {appliance: "Audio System", status: "Off", text: "LIBERTY FM"}];
        this.row2 = [{appliance: "Door Lock", status: "Off"}, {appliance: "Curtain", status: "Off"}, {appliance: "Windows", status: "Off"}];
        React.createRef();
    }
    render() { 
    
        var row1Render = this.row1.map((item, index) => (
            <div className="Tile">
                <div className="TileTop">
                    <div className="TileTopValue">
                        <div className="smallText">{item.text}</div>
                        <div className="TileTopButton">{item.status}</div>
                    </div>
                    <div className="TileTopCenter">{item.appliance}</div>
                </div>
                <div className="TileBottom">
                    <div class="slidecontainer">
                        <input type="range" min="1" max="100" value="50" class="slider" ></input>
                    </div>
                </div>
            </div>
        ));

        var row2Render = this.row2.map((item, index) => (
            <div className="Tile">
                <div className="TileTop">
                    <div className="TileTopValue">
                    </div>
                    <div className="TileTopCenter">{item.appliance}</div>
                </div>
                <div className="TileBottom">
       
                        <div className="smallText"></div>
                        <div className="TileTopButton">{item.status}</div> 
                </div>
            </div>
        ));


        return (
            <div id="Tiles">

                <div className="TilesRow">
                    {row1Render}
                </div>
                
                <div className="TilesRow">
                    {row2Render}
                </div>
            </div>
        )
    }
}

export default Tiles;
