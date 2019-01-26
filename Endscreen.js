import React from 'react';
import {
    StyleSheet,
    View,
    NativeModules, Text
} from 'react-360';
import GazeButton from "react-360-gaze-button";
import {connect} from './ClickManager';

const {MyModule} = NativeModules;

export class Endscreen extends React.Component {
    state = {
        toggle: true,
    };

    setGazed = () => {
        MyModule.closeEndscreen()
    };

    render() {
        const {gazed} = this.state;
        return (
            <View style={styles.panel}>
                <View>
                    <Text style={styles.text}>Danke fürs Spielen von Keel!</Text>
                    <Text style={{fontSize: 30}}>
                        Developers:{"\n"}
                        Julia Gruber{"\n"}
                        Irina Mittermayr{"\n"}
                        Andreas Moser{"\n"}
                        {"\n"}
                        Music Credit:{"\n"}
                        Kevin McLeod - Fluidscape{"\n"}
                        {"\n"}
                    </Text>
                </View>
                <GazeButton
                    duration={2000}
                    onClick={() => {
                        this.setGazed();
                        //this.props.onClick();
                    }}
                    render={(remainingTime, isGazed) => (
                        <View style={styles.greetingBox}>
                            <Text style={[styles.greeting, {width: 300}]}>
                                {gazed ? "Now starting!" : isGazed ? "Alrighty!" : "Start again!"}
                            </Text>
                        </View>
                    )}
                />
            </View>
        )
    };
}

const styles = StyleSheet.create({
    panel: {
        // Fill the entire surface
        width: 1000,
        height: 600,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',

    },
    greetingBox: {
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderColor: '#639dda',
        borderWidth: 2,
    },
    greeting: {
        color: 'rgb(0,0,0)'
    },
    text: {
        fontSize: 40
    }
});


const ConnectedEndscreen = connect(Endscreen);

export default ConnectedEndscreen;