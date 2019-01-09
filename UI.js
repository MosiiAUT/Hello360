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


class UIPanel extends React.Component {
    state = {
        toggle: true,
    };

    _toggleBool = () => {
        this.setState({toggle: !this.state.toggle});
    };


    render() {

        return (
            <View style={styles.panel}>
                <MyGaze/>
            </View>
        )
    }
}

class MyButton extends React.Component {
    state = {
        count: 0,
    };

    /*
    // This method increments our count, triggering a re-render
    _incrementCount = () => {
        this.setState({count: this.state.count + 1});
    };
    */

    render() {
        return (
            <VrButton
                style={styles.greetingBox}
                onClick={() => {
                    MyModule.setWorld(0, 0, -10);
                    //this.props.onClick();
                }}
            >
                <Text style={styles.greeting}>
                    {`Count: ${this.state.count}`}
                </Text>
            </VrButton>
        );
    }
}

class MyGaze extends React.Component {
    state = {
        gazed: false,
        station: 1,
    };

    setGazed = () => {
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
        return (
            <GazeButton
                duration={3000}
                onClick={() => {
                    this.setGazed();
                    //this.props.onClick();
                }}
                render={(remainingTime, isGazed) => (
                    <View style={styles.greetingBox}>
                        <Text style={styles.greeting}>
                            {gazed ? "You have gazed me" : isGazed ? remainingTime : "Gaze me"}
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
        height: 600,
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

const ConnectedUIPanel = connect(UIPanel);

export default ConnectedUIPanel;