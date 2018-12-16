import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    VrButton,
    asset,
    NativeModules
} from 'react-360';

import Entity from 'Entity';
import GazeButton from "react-360-gaze-button";

const {MyModule} = NativeModules;

export default class Hello360 extends React.Component {
// Our component will keep track of this state
    state = {
        toggle: false,
    };

    _toggleBool = () => {
        this.setState({toggle: !this.state.toggle});
        console.log("hi")
    };


// Once the component mounts, run the increment method every second
    /*
    componentDidMount() {
        setInterval(this._incrementCount, 1000);
    }
    */

    render() {
        let button;

        if (this.state.toggle) {
            button = <MyButton onClick={this._toggleBool}/>;
        } else {
            button = <MyGaze onClick={this._toggleBool}/>;
        }

        return (
            <View style={styles.panel}>
                {button}
            </View>
        );
    }
}

class MyButton extends React.Component {
    state = {
        count: 0,
    };

    _setPos = () => {
        MyModule.setWorld(0, 0, -10);
    };

    // This method increments our count, triggering a re-render
    _incrementCount = () => {
        this.setState({count: this.state.count + 1});
    };

    render() {
        return (
            <VrButton
                style={styles.greetingBox}
                onClick={() => {
                    this._setPos();
                    this.props.onClick();
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
        gazed: false
    };

    setGazed = () => {
        this.setState({gazed: true});
        MyModule.setWorld(15, 0, -10);
    };

    render() {
        const {gazed} = this.state;
        return (
            <GazeButton
                duration={3000}
                onClick={() => {
                    this.setGazed();
                    this.props.onClick();
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

class ChairOne extends React.Component {
    render() {
        return (
            <View>
                <Entity style={styles.chair} source={{obj: asset('chair.obj')}}/>
                <ChairTwo/>
            </View>
        );
    }
}

class ChairTwo extends React.Component {
    render() {
        return (
            <Entity style={styles.chairTwo} source={{obj: asset('chair.obj')}}/>
        );
    }
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
    chair: {
        transform: [{translate: [-5, -1, -10]}, {rotateY: 210}]
    },
    chairTwo: {
        transform: [{translate: [5, -1, -10]}, {rotateY: 150}]
    },
});

AppRegistry.registerComponent('Hello360', () => Hello360);
AppRegistry.registerComponent('ChairOne', () => ChairOne);
