import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    NativeModules,
} from 'react-360';

import GazeButton from "react-360-gaze-button";
import {connect, setStation, setWatched} from './ClickManager';

const {MyModule} = NativeModules;


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

            //outside
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
                MyModule.setWorld(-55, 0, 390);
                MyModule.moveWatchButton(-Math.PI / 10, -Math.PI / 10);
                MyModule.moveDescription(Math.PI / 8, 0,);
                MyModule.moveTeleport(0, 0);
                break;

            //first floor
            case 5:
                MyModule.setWorld(-55, 15, 520);
                MyModule.moveWatchButton(Math.PI / 8, -Math.PI / 8);
                MyModule.moveDescription(-Math.PI / 6, 0,);
                MyModule.moveTeleport(-Math.PI / 4, -Math.PI / 8);
                break;
            case 6:
                MyModule.setWorld(-45, 25, 530);
                MyModule.moveWatchButton(-Math.PI / 3, -Math.PI / 3.5);
                MyModule.moveDescription(-Math.PI / 12, 0,);
                MyModule.moveTeleport(-Math.PI / 1.5, Math.PI / 8);
                break;
            case 7:
                MyModule.setWorld(-35, 10, 520);
                MyModule.moveWatchButton(-Math.PI / 1.55, Math.PI / 8);
                MyModule.moveDescription(-Math.PI / 3, 0,);
                MyModule.moveTeleport(-Math.PI / 2, 0);
                break;
            case 8:
                MyModule.setWorld(20, 5, 510);
                MyModule.moveWatchButton(-Math.PI / 16, -Math.PI / 4);
                MyModule.moveDescription(Math.PI / 5, 0,);
                MyModule.moveTeleport(-Math.PI / 6, -Math.PI / 6);
                break;
            case 9:
                MyModule.setWorld(50, 35, 560);
                MyModule.moveWatchButton(-Math.PI / 2.5, -Math.PI / 4);
                MyModule.moveDescription(-Math.PI / 7, 0,);
                MyModule.moveTeleport(-Math.PI / 2, 0);
                break;
            case 10:
                MyModule.setWorld(90, 35, 560);
                MyModule.moveWatchButton(-Math.PI / 1.8, -Math.PI / 7);
                MyModule.moveDescription(-Math.PI / 3, 0,);
                MyModule.moveTeleport(-Math.PI / 1.2, Math.PI / 12);
                break;
            case 11:
                MyModule.setWorld(120, 25, 540);
                MyModule.moveWatchButton(Math.PI / 1.5, 0);
                MyModule.moveDescription(Math.PI / 2.2, 0,);
                MyModule.moveTeleport(-Math.PI / 3.5, Math.PI / 5);
                break;

            //second floor - first room
            case 12:
                MyModule.setWorld(180, -60, 570);
                MyModule.moveWatchButton(Math.PI / 1.5, 0);
                MyModule.moveDescription(Math.PI / 2.5, 0,);
                MyModule.moveTeleport(-Math.PI / 3.5, Math.PI / 5);
                break;
        }

        setStation(this.state.station + 1);

        this.setState({
            gazed: false,
            station: this.state.station + 1,
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