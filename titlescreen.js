import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    VrButton,
    NativeModules,
} from 'react-360';
import {Environment} from 'react-360';


import {connect, setCurrent} from './ClickManager';
import {MyGaze} from './myGaze';


const {MyModule} = NativeModules;


export class Titlescreen extends React.Component {

    state = {
        toggle: true,
    };

//handleClick = this.handleClick.bind(this);


    /*function handleClick(){
        this.setState({toggle: !this.state.toggle});
        console.log("titlescreenclick");
        MyModule.deleteTitlescreen();
    }*/


    render() {
        return (
            <View style={{
                width: 1000,
                height: 400,
                backgroundColor: 'rgba(255, 255, 255, 0.0)',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <MyGaze gazeText="Start Swimming Matey!" timey={1000} station={this.props.station}/>

                <MyGaze gazeText="Stop Exploring" timey={1000} station={this.props.station}/>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    panel: {
        // Fill the entire surface
        width: 1000,
        height: 1000,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        justifyContent: 'center',
        alignItems: 'center',

    },
    left: {
        transform: [{rotateY: 180}]
    },

});


//const ConnectedUIPanel = connect(Titlescreen);
const ConnectedTitleScreen = connect(Titlescreen);

export default ConnectedTitleScreen;