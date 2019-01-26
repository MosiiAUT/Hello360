import React from 'react';
import {
    StyleSheet,
    View,
    NativeModules,
    asset,
    Image
} from 'react-360';

import GazeButton from "react-360-gaze-button";
import {connect, setWatched} from './ClickManager';

const {AudioModule} = NativeModules;
const {MyModule} = NativeModules;


class WatchUI extends React.Component {
    render() {
        return (
            <View style={styles.panel}>
                <WatchButton isWatched={this.props.isWatched}/>
            </View>
        )
    }
}


class WatchButton extends React.Component {
    state = {
        gazed: false,
    };

    setGazed = () => {
        if (this.props.isWatched == false) {
            setWatched(true);
        }

        //Setzt die Größe des beschreibungspanels
        MyModule.openDescription();
        MyModule.closeTeleport();
        MyModule.closeWatchButton();
        AudioModule.playOneShot({
            source: asset('click.mp3'),
        });
    };

    render() {
        const {gazed} = this.state;
        return (
            <GazeButton
                duration={2000}
                onClick={() => {
                    this.setGazed();
                    //this.props.onClick();
                }}
                render={(remainingTime, isGazed) => (
                    <View style={styles.greetingBox}>
                        <Image style={styles.image} source={asset('circleblau.png')} />
                    </View>
                )}
            />
        )
    };
}


const styles = StyleSheet.create({
    panel: {
        // Fill the entire surface
        width: 300,
        height: 300,
        backgroundColor: 'rgba(255, 255, 255, 0)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    greetingBox: {
        width: 300,
        height: 300,
        borderColor: '#639dda',
        borderWidth: 0,
    },
    greeting: {
        fontSize: 30,
    },
    image: {
        width: 300,
        height: 300,
    }
});

const ConnectedWatchUI = connect(WatchUI);

export default ConnectedWatchUI;