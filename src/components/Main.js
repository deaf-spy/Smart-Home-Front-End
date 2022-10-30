import React, { Component } from 'react';
import '../styles/App.css';
import Tiles from '../components/Tiles';

//import {useState} from 'react';
//import DatePicker from 'react-datepicker';

//import "react-datepicker/dist/react-datepicker.css";

//const getDate = () => {
    //const date = new Date();
    //return new Date(2022-10-30.getFullYear(), date.getMonth(), date.getDate());
    
//} 


class Main extends Component {
    render () {
        return (
            <>
                <div id="Main">
                    <div className="line">
                        <div className="sideBarElementBottomContainer">
                            <div className="sideBarElementTopLogo main"></div>
                            <div className="sideBarElementTopText black">
                                {this.props.curRoom.room}
                            </div>
                        </div>

                        <div className="sideBarElementBottomContainer">
                            <div className="largeText">{this.props.curRoom.temp}°c | img 
                        
                            </div>


                        </div>

                    </div>
                   
                    <div className="horizontalDivider"></div>

                    <div className="line">
                        <div className="sidebarElementBottomContainer">
                            <div className="smallText">PRESET MODE</div>
                            <div className="smallText black" >Custom Preset 01</div>

                        </div>
                        <div className="Box">
                            <div className="sideBarElementBottomContainer">
                                <div className="smallText">TEMPERATURE</div>
                                <div className="largeText black">{this.props.curRoom.temp}°c</div>

                            </div>

                            <div className="verticalDivider"></div>

                            <div className="sideBarElementBottomContainer">
                                <div className="smallText">HUMIDITY</div>
                                <div className="largeText black">{this.props.curRoom.hum}%</div>
                            </div>
                        </div>
                    </div>

                    <div className="horizontalDivider"></div>

                    <Tiles />
                </div>
            </>
        )
    }
}


export default Main;
