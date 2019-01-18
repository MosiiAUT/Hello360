import * as React from 'react';
import {Animated, asset, StyleSheet, PointLight, AmbientLight, View} from 'react-360';
import Entity from 'Entity';
import {connect} from './ClickManager';

const AnimatedEntity = Animated.createAnimatedComponent(Entity);

class Models extends React.Component {
    render() {
        let elements;

        switch (this.props.station) {
            case 0:
                elements = <ChairTwo isWatched={this.props.isWatched} station={this.props.station} lit={true}/>;
                break;
            case 1:
                elements = null;
        }

        return(
            <View>
                <PointLight intensity={0.5}/>
                <AmbientLight intensity={0.3}/>
                <Terrain/>
                <Bild/>
                {/*<Fass isWatched={this.props.isWatched} station={this.props.station}/>*/}
                <Ship/>
                <Geschirr/>
                <GPflanze/>
                <Koralle/>
                <Lilapflanze/>
                <Pflanze/>
                <Rosakoralle/>
                <Schuh/>
                <Stein/>
                <Truhe/>
                {elements}
            </View>
        );

    }
}

class ChairOne extends React.Component {
    render() {
        return (
            <Entity style={styles.chair} source={{obj: asset('chair.obj')}}/>
        );
    }
}

class Scene extends React.Component {
    render() {
        return (
            <Entity lit={true} style={[styles.sand, styles.transformation]} source={{obj: asset('scene.obj')}}/>
        );
    }
}

class Ship extends React.Component {
    render() {
        return (
            <Entity lit={true} style={[styles.brown, styles.transformation, {transform:[{scale: 2}]}]} source={{obj: asset('ship.obj')}}/>
        );
    }
}

class Terrain extends React.Component {
    render() {
        return (
            <Entity lit={true} style={[styles.sand, styles.transformation]} source={{obj: asset('terrain.obj')}}/>
        );
    }
}

class Shrimp extends React.Component {
    render() {
        return (
            <Entity style={styles.scene} source={{obj: asset('shrimp.obj')}} lit={true}/>
        );
    }
}

class Bild extends React.Component {
    render() {
        return (
            <Entity style={[styles.brown, styles.transformation]} source={{obj: asset('bild.obj')}} lit={true}/>
        );
    }
}

class Fass extends React.Component {
    rotation = new Animated.Value(0);
    translationX = new Animated.Value(0);
    translationY = new Animated.Value(0);
    translationZ = new Animated.Value(0);

    render() {
        this.rotation.setValue(0);
        this.translationX.setValue(0);
        this.translationY.setValue(0);
        this.translationZ.setValue(0);

        if (this.props.isWatched == true && this.props.station == 0) {
            console.log("hhelo");
            // Animated.timing(this.rotation, {toValue: 390, duration: 20000}).start();
            Animated.timing(this.translationX, {toValue: 200, duration: 10000}).start();
            Animated.timing(this.translationY, {toValue: 100, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 200, duration: 10000}).start();
        }

        return (
            <AnimatedEntity
                style={[{
                    transform:
                        [{translateX: this.translationX},
                            {translateY: this.translationY},
                            {translateZ: this.translationZ},
                            {rotateY: this.rotation}]
                },
                    styles.brown,
                    styles.transformation]} source={{obj: asset('fass.obj')}} lit={true}/>
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
            }]} source={{obj: asset('chair.obj')}}/>
        );
    }
}

class Geschirr extends React.Component {
    render() {
        return (
            <Entity style={[styles.white, styles.transformation]} source={{obj: asset('geschirr.obj')}} lit={true}/>
        );
    }
}

class GPflanze extends React.Component {
    render() {
        return (
            <Entity style={[styles.lightgreen, styles.transformation]} source={{obj: asset('gpflanze.obj')}}
                    lit={true}/>
        );
    }
}

class Pflanze extends React.Component {
    render() {
        return (
            <Entity style={[styles.green, styles.transformation]} source={{obj: asset('pflanze.obj')}} lit={true}/>
        );
    }
}

class Koralle extends React.Component {
    render() {
        return (
            <Entity style={[styles.red, styles.transformation]} source={{obj: asset('koralle.obj')}} lit={true}/>
        );
    }
}

class Lilapflanze extends React.Component {
    render() {
        return (
            <Entity style={[styles.purple, styles.transformation]} source={{obj: asset('lilapflanze.obj')}} lit={true}/>
        );
    }
}

class Rosakoralle extends React.Component {
    render() {
        return (
            <Entity style={[styles.pink, styles.transformation]} source={{obj: asset('rosakoralle.obj')}} lit={true}/>
        );
    }
}

class Schuh extends React.Component {
    render() {
        return (
            <Entity style={[styles.black, styles.transformation]} source={{obj: asset('schuh.obj')}} lit={true}/>
        );
    }
}

class Stein extends React.Component {
    render() {
        return (
            <Entity style={[styles.grey, styles.transformation]} source={{obj: asset('stein.obj')}} lit={true}/>
        );
    }
}

class Truhe extends React.Component {
    render() {
        return (
            <Entity style={[styles.brown, styles.transformation]} source={{obj: asset('truhe.obj')}} lit={true}/>
        );
    }
}


const styles = StyleSheet.create({
    chair: {
        transform: [{translate: [-5, 0, -4]}, {rotateY: 0}]
    },
    chairTwo: {
        transform: [{translate: [5, 0, -10]}, {rotateY: 150}]
    },
    scene: {
        transform: [{translate: [0, -5, 0]}],
    },
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

    starttransformation: {
        transform: [{translate: [0, -17, -400]}],
    },
    transformation: {
        transform: [{translate: [0, -17, -170]}],
    }
});

const ConnectedModelsView = connect(Models);

export default ConnectedModelsView;