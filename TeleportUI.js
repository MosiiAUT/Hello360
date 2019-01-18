import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    NativeModules,
} from 'react-360';

import GazeButton from "react-360-gaze-button";
import {connect, setStation} from './ClickManager';

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
            case 0:
                MyModule.setWorld(90, 0, 210);
                break;
            case 1:
                MyModule.setWorld(70, 0, 250);
                break;
            case 2:
                MyModule.setWorld(50, 0, 320);
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