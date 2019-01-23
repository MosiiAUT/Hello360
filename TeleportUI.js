import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    NativeModules, asset,
} from 'react-360';

import GazeButton from "react-360-gaze-button";
import {connect, setStation} from './ClickManager';

const {MyModule} = NativeModules;
const {AudioModule} = NativeModules;

class TeleportUI extends React.Component {
    render() {
        return (
            <View style={styles.panel}>
                <TeleportButton station={this.props.station}/>
            </View>
        )
    }
}


class TeleportButton extends React.Component {
    state = {
        gazed: false,
        station: this.props.station
    };

    setGazed = () => {
        this.setState({gazed: true});

        //Achtung! case 0 ist initial case, dh es wirkt sich eigentlich auf den Render case 1 aus
        switch (this.state.station) {
            case 0:
                MyModule.setWorld(60, 0, 170);
                MyModule.openWatchButton();
                MyModule.moveWatchButton(-Math.PI / 1.37, 0);
                MyModule.moveDescription(-Math.PI / 2.1, 0,);
                MyModule.moveTeleport(-Math.PI / 8, 0);
                break;
            case 1:
                MyModule.setWorld(70, 0, 250);
                MyModule.moveWatchButton(-Math.PI / 1.65, -Math.PI / 8);
                MyModule.moveDescription(-Math.PI / 2.7, 0,);
                MyModule.moveTeleport(Math.PI / 2.2, 0);
                break;
            case 2:
                MyModule.setWorld(-40, 0, 240);
                MyModule.moveWatchButton(Math.PI / 8, -Math.PI / 9);
                MyModule.moveDescription(Math.PI / 2.5, 0,);
                MyModule.moveTeleport(-Math.PI / 8, 0);
                break;
            case 3:
                MyModule.setWorld(55, 0, 430);
                MyModule.moveWatchButton(Math.PI / 1.15, -Math.PI / 6);
                MyModule.moveDescription(Math.PI / 1.7, 0,);
                MyModule.moveTeleport(Math.PI / 2, 0);
                break;
            case 4:
                MyModule.setWorld(-45, 0, 390);
                MyModule.moveWatchButton(-Math.PI / 14, -Math.PI / 10);
                MyModule.moveDescription(Math.PI / 6, 0,);
                MyModule.moveTeleport(0, 0);
                break;
            case 5:
                MyModule.setWorld(-55, 20, 530);
                MyModule.moveWatchButton(-Math.PI / 14, -Math.PI / 10);
                MyModule.moveDescription(Math.PI / 6, 0,);
                MyModule.moveTeleport(0, 0);
                break;

        }

        setStation(this.state.station + 1);

        this.setState({
            gazed: false,
            station: this.state.station + 1,
        });

        AudioModule.playOneShot({
            source: asset('swim.mp3'),
        });

        //this.setState({gazed: true,});
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
                        <Text style={styles.greeting}>
                            {/*{gazed ? "You have gazed me" : isGazed ? remainingTime : "Gaze me"}*/}
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
        width: 200,
        height: 200,
        backgroundColor: 'rgba(255, 255, 255, 0)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    greetingBox: {
        width: 200,
        height: 200,
        borderColor: '#efea01',
        borderWidth: 2,
    },
    greeting: {
        fontSize: 30,
    },
});

const ConnectedTeleportUI = connect(TeleportUI);

export default ConnectedTeleportUI;