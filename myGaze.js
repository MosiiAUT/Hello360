import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    VrButton,
    NativeModules,
} from 'react-360';

import GazeButton from "react-360-gaze-button";
import {connect, setCurrent} from './ClickManager';

const {MyModule} = NativeModules;


export class MyGaze extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            gazed: false

        };
        this.station = 0;
        this.message = "ere";
        //this.handleClick = this.handleClick.bind(this);
    }


    setGazed = () => {

        console.log("end of time");
        MyModule.deleteTitlescreen;
        this.setState({gazed: true});
        //MyModule.setWorld(15, 0, -10);
        setCurrent(this.state.station);
        this.setState({
                gazed: false,
                station: this.state.station * -1
            }
        );


    };

    render() {
        const {gazed} = this.state;

        console.log("prop gaze text : " + this.props.gazeText);

        let message = this.props.gazeText;
        let waitingtime = this.props.timey;

        return (
            <GazeButton
                duration={waitingtime}
                onClick={() => {
                    this.setGazed();
                    //this.props.onClick();
                }}
                render={(remainingTime, isGazed) => (
                    <View style={styles.greetingBox}>
                        <Text style={{width: 300}}>
                            {gazed ? "You have gazed me" : isGazed ? "Alrighty!" : message}
                        </Text>
                    </View>
                )}
            />
        )
    };
}


const styles = StyleSheet.create({
    panel: {
        // Fill the entire surface
        width: 1000,
        height: 800,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    left: {
        transform: [{rotateY: 180}]
    },
    greetingBox: {


        padding: 20,
        backgroundColor: '#000000',
        borderColor: '#639dda',
        borderWidth: 2,
    },
    greeting: {
        fontSize: 30,
    },
});


