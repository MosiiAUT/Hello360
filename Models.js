import * as React from 'react';
import {Animated, asset, StyleSheet, PointLight, DirectionalLight, AmbientLight, View} from 'react-360';
import Entity from 'Entity';
import {connect} from './ClickManager';

const AnimatedEntity = Animated.createAnimatedComponent(Entity);

class Models extends React.Component {
    render() {
        let elements;

        switch (this.props.station) {
            case 0:
                elements = <Fass_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>;
                break;
            case 1:
                elements = [<Fass_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>, <Truhe_d/>];
                break;
            case 2:
                elements = [<Fass_d/>, <Truhe_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>];
                break;
            case 3:
                elements = [<Fass_d/>,<Truhe_d/>];
                break;
        }

        return(
            <View>
                {/*<PointLight intensity={0.5} style={{color:'white', transform:[{translate:[0,50,0]}]}}/>*/}
                <DirectionalLight intensity={0.4} />
                <AmbientLight intensity={0.3} />
                <Terrain/>
                {/*<Bild/>*/}
                <Ship/>
                {/*
                <Fass/>
                <Geschirr/>
                <GPflanze/>
                <Koralle/>
                <Lilapflanze/>
                <Pflanze/>
                <Rosakoralle/>
                <Schuh/>
                <Stein/>
                <Truhe/>
                */}
                {elements}
            </View>
        );

    }
}

// _w - watched things
// _d - watched things in default

class Fass_w extends React.Component {
    rotation = new Animated.Value(0);
    translationX = new Animated.Value(0);
    translationY = new Animated.Value(0);
    translationZ = new Animated.Value(0);

    booli = false;

    render() {
        if (this.props.isWatched == true && this.props.station == 0) {
            this.rotation.setValue(0);
            this.translationX.setValue(0);
            this.translationY.setValue(0);
            this.translationZ.setValue(0);

            Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
            Animated.timing(this.translationX, {toValue: 2, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 1, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 2, duration: 5000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 0 && this.booli) {
            this.rotation.setValue(0);
            this.translationX.setValue(2);
            this.translationY.setValue(1);
            this.translationZ.setValue(2);

            Animated.timing(this.translationX, {toValue: 0, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 0, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 0, duration: 5000}).start();
            this.booli = false;
        }

        return (
            <AnimatedEntity style={[{
                transform: [
                    {translateX: this.translationX},
                    {translateY: this.translationY},
                    {translateZ: this.translationZ},
                    {translate: [-111, 0, -237]},
                    {rotateY: this.rotation},
                ]
            },
                styles.brown]} source={{obj: asset('fass_watched.obj')}} lit={true}/>
        );
    }
}
class Truhe_w extends React.Component {
    rotation = new Animated.Value(0);
    translationX = new Animated.Value(0);
    translationY = new Animated.Value(0);
    translationZ = new Animated.Value(0);

    booli = false;

    render() {
        if (this.props.isWatched == true && this.props.station == 0) {
            this.rotation.setValue(0);
            this.translationX.setValue(0);
            this.translationY.setValue(0);
            this.translationZ.setValue(0);

            Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
            Animated.timing(this.translationX, {toValue: 2, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 1, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 2, duration: 5000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 0 && this.booli) {
            this.rotation.setValue(0);
            this.translationX.setValue(2);
            this.translationY.setValue(1);
            this.translationZ.setValue(2);

            Animated.timing(this.translationX, {toValue: 0, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 0, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 0, duration: 5000}).start();
            this.booli = false;
        }

        return (
            <AnimatedEntity style={[{
                transform: [
                    {translateX: this.translationX},
                    {translateY: this.translationY},
                    {translateZ: this.translationZ},
                    {translate: [-63, 0, -281]},
                    {rotateY: this.rotation},
                ]
            },
                styles.brown]} source={{obj: asset('truhe_watched.obj')}} lit={true}/>
        );
    }
}

class ChairTwo extends React.Component {
    rotation = new Animated.Value(30);
    translationX = new Animated.Value(0);
    translationY = new Animated.Value(0);
    translationZ = new Animated.Value(0);

    booli = false;

    render() {
        if (this.props.isWatched == true && this.props.station == 0) {
            this.rotation.setValue(30);
            this.translationX.setValue(0);
            this.translationY.setValue(0);
            this.translationZ.setValue(0);

            Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
            Animated.timing(this.translationX, {toValue: 2, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 1, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 2, duration: 5000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 0 && this.booli) {
            this.rotation.setValue(30);
            this.translationX.setValue(2);
            this.translationY.setValue(1);
            this.translationZ.setValue(2);

            Animated.timing(this.translationX, {toValue: 0, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 0, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 0, duration: 5000}).start();
            this.booli = false;
        }

            return (
            <AnimatedEntity style={[{
                transform: [
                    {translateX: this.translationX},
                    {translateY: this.translationY},
                    {translateZ: this.translationZ},
                    {translate: [-5, 0.5, 0.1]},
                    {rotateY: this.rotation},
                    {scale: 0.3}
                ]
            }]} source={{obj: asset('chair.obj')}} lit={true}/>
        );
    }
}

class Fass_d extends React.Component {
    render() {
        return (
            <Entity lit={true} style={[styles.brown, styles.fass]} source={{obj: asset('fass_watched.obj')}}/>
        );
    }
}

class Truhe_d extends React.Component {
    render() {
        return (
            <Entity lit={true} style={[styles.brown, styles.truhe]} source={{obj: asset('truhe_watched.obj')}}/>
        );
    }
}

class Ship extends React.Component {
    render() {
        return (
            <Entity lit={true} style={styles.brown} source={{obj: asset('ship.obj')}}/>
        );
    }
}

class Terrain extends React.Component {
    render() {
        return (
            <Entity lit={true} style={styles.sand} source={{obj: asset('terrain.obj')}}/>
        );
    }
}

class Bild extends React.Component {
    render() {
        return (
            <Entity style={styles.white} source={{obj: asset('scene.obj')}} lit={true}/>
        );
    }
}

class Fass extends React.Component {
    render() {
        return (
            <Entity style={styles.brown} source={{obj: asset('fass.obj')}} lit={true}/>
        );
    }
}

class Geschirr extends React.Component {
    render() {
        return (
            <Entity style={styles.white} source={{obj: asset('geschirr.obj')}} lit={true}/>
        );
    }
}

class GPflanze extends React.Component {
    render() {
        return (
            <Entity style={styles.lightgreen} source={{obj: asset('gpflanze.obj')}}
                    lit={true}/>
        );
    }
}

class Pflanze extends React.Component {
    render() {
        return (
            <Entity style={styles.green} source={{obj: asset('pflanze.obj')}} lit={true}/>
        );
    }
}

class Koralle extends React.Component {
    render() {
        return (
            <Entity style={styles.red} source={{obj: asset('koralle.obj')}} lit={true}/>
        );
    }
}

class Lilapflanze extends React.Component {
    render() {
        return (
            <Entity style={styles.purple} source={{obj: asset('lilapflanze.obj')}} lit={true}/>
        );
    }
}

class Rosakoralle extends React.Component {
    render() {
        return (
            <Entity style={styles.pink} source={{obj: asset('rosakoralle.obj')}} lit={true}/>
        );
    }
}

class Schuh extends React.Component {
    render() {
        return (
            <Entity style={styles.black} source={{obj: asset('schuh.obj')}} lit={true}/>
        );
    }
}

class Stein extends React.Component {
    render() {
        return (
            <Entity style={styles.grey} source={{obj: asset('stein.obj')}} lit={true}/>
        );
    }
}

class Truhe extends React.Component {
    render() {
        return (
            <Entity style={styles.brown} source={{obj: asset('truhe.obj')}} lit={true}/>
        );
    }
}


const styles = StyleSheet.create({
    black: {
        color: 'darkgrey',
    },
    brown: {
        color: '#A86F3E',
    },
    darkbrown: {
        color: '#663D1A',
    },
    green: {
        color: '#1E9949',
    },
    grey: {
        color: 'lightgrey',
    },
    lightgreen: {
        color: '#49C675',
    },
    pink: {
        color: '#F7A3CB',
    },
    purple: {
        color: '#CC97D8',
    },
    red: {
        color: '#C93250',
    },
    sand: {
        color: '#FCF8C7',
    },
    white: {
        color: 'white',
    },
    fass: {
        transform: [{translate: [-111, 0, -237]}],

    },
    truhe: {
        transform: [{translate: [-63, 0, -281]}],
    },
});

const ConnectedModelsView = connect(Models);

export default ConnectedModelsView;