import React from 'react';
import {
    StyleSheet,
    View,
    NativeModules,
    asset,
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
                MyModule.moveTeleport(-Math.PI / 5.5, -Math.PI / 6);
                break;
            case 9:
                MyModule.setWorld(50, 35, 560);
                MyModule.moveWatchButton(-Math.PI / 2.8, -Math.PI / 4);
                MyModule.moveDescription(-Math.PI / 7, 0,);
                MyModule.moveTeleport(-Math.PI / 2, 0);
                break;
            case 10:
                MyModule.setWorld(90, 35, 560);
                MyModule.moveWatchButton(-Math.PI / 1.75, -Math.PI / 7);
                MyModule.moveDescription(-Math.PI / 3, 0,);
                MyModule.moveTeleport(-Math.PI / 1.2, Math.PI / 12);
                break;
            case 11:
                MyModule.setWorld(120, 25, 540);
                MyModule.moveWatchButton(Math.PI / 1.48, -Math.PI / 29);
                MyModule.moveDescription(Math.PI / 2.2, 0,);
                MyModule.moveTeleport(-Math.PI / 3.5, Math.PI / 5);
                break;

            //second floor - first room
            case 12:
                MyModule.setWorld(180, -60, 570);
                MyModule.moveWatchButton(-Math.PI / 1.3, -Math.PI / 22);
                MyModule.moveDescription(-Math.PI / 1.8, 0,);
                MyModule.moveTeleport(-Math.PI / 2.3, -Math.PI / 12);
                break;
            case 13:
                MyModule.setWorld(250, -50, 587);
                MyModule.moveWatchButton(-Math.PI / 1.8, -Math.PI / 8);
                MyModule.moveDescription(-Math.PI / 3.5, 0,);
                MyModule.moveTeleport(Math.PI / 2.5, -Math.PI / 8);
                break;
            case 14:
                MyModule.setWorld(200, -45, 600);
                MyModule.moveWatchButton(Math.PI / 18, -Math.PI / 4.5);
                MyModule.moveDescription(Math.PI / 4, 0,);
                MyModule.moveTeleport(Math.PI / 1.1, 0);
                break;
            case 15:
                MyModule.setWorld(200, -55, 580);
                MyModule.moveWatchButton(Math.PI / 3, -Math.PI / 3.5);
                MyModule.moveDescription(0, 0,);
                MyModule.moveTeleport(Math.PI / 1.7, 0);
                break;

                //outside
            case 16:
                MyModule.setWorld(140, -55, 570);
                MyModule.moveWatchButton(Math.PI / 4, -Math.PI / 4.5);
                MyModule.moveDescription(0, 0,);
                MyModule.moveTeleport(Math.PI / 2.2, -Math.PI / 25);
                break;

            //second floor - second room
            case 17:
                MyModule.setWorld(-30, -58, 590);
                MyModule.moveWatchButton(Math.PI / 1.05, Math.PI / 6);
                MyModule.moveDescription(-Math.PI / 1.2, 0,);
                MyModule.moveTeleport(Math.PI / 1.2, 0);
                break;

            case 18:
                MyModule.setWorld(-45, -70, 570);
                MyModule.moveWatchButton(Math.PI / 1.2, Math.PI / 12);
                MyModule.moveDescription(-Math.PI / 1.2, 0,);
                MyModule.moveTeleport(Math.PI / 1.9, -Math.PI / 8);
                break;

            case 19:
                MyModule.setWorld(-75, -70, 565);
                MyModule.moveWatchButton(Math.PI / 30, -Math.PI / 3.5);
                MyModule.moveDescription(Math.PI / 4, 0,);
                MyModule.moveTeleport(Math.PI / 2.5, -Math.PI / 8);
                break;

            case 20:
                MyModule.setWorld(-115, -60, 590);
                MyModule.moveWatchButton(-Math.PI / 1.75, -Math.PI / 5.5);
                MyModule.moveDescription(-Math.PI / 3, 0,);
                MyModule.moveTeleport(-Math.PI / 2, -Math.PI / 20);
                break;

            //outside
            case 21:
                MyModule.setWorld(10, -65, 570);
                MyModule.moveWatchButton(-Math.PI / 1.25, -Math.PI / 10);
                MyModule.moveDescription(-Math.PI / 1.8, 0,);
                MyModule.moveTeleport(-Math.PI / 2.5, 0);
                break;

            case 22:
                MyModule.setWorld(180, -100, 630);
                MyModule.moveWatchButton(-Math.PI / 2.5, -Math.PI / 3.5);
                MyModule.moveDescription(-Math.PI / 1.6, 0,);
                MyModule.moveTeleport(-Math.PI / 1.3, Math.PI / 20);
                break;

            case 23:
                MyModule.setWorld(200, -115, 590);
                MyModule.moveWatchButton(-Math.PI / 1.9, -Math.PI / 5.5);
                MyModule.moveDescription(-Math.PI / 1.2, 0,);
                MyModule.moveTeleport(-Math.PI / 3, -Math.PI / 7);
                break;

            case 24:
                MyModule.setWorld(220, -105, 619);
                MyModule.moveWatchButton(-Math.PI / 1.9, -Math.PI / 10);
                MyModule.moveDescription(-Math.PI / 1.35, 0,);
                MyModule.moveTeleport(Math.PI / 1.2, Math.PI / 8);
                break;

                //the end
            case 25:
                MyModule.closeWatchButton();
                MyModule.setWorld(-10, -180, 300);
                MyModule.moveDescription(-Math.PI / 1.35, 0,);
                MyModule.moveTeleport(Math.PI / 1.2, Math.PI / 8);
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