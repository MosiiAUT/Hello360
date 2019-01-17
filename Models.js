import * as React from 'react';
import {Animated, asset, StyleSheet, PointLight, AmbientLight, View} from 'react-360';
import Entity from 'Entity';
import {connect} from './ClickManager';

const AnimatedEntity = Animated.createAnimatedComponent(Entity);

class Models extends React.Component {
    render() {
        switch (this.props.station) {
            case -1:
                return (
                    <View>
                        <PointLight intensity={0.5}/>
                        <AmbientLight intensity={0.3}/>
                        <Terrain/>
                        <Bild/>
                        <Fass/>
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
                    </View>
                );
            case 1:
                return (
                    <View>
                        <PointLight intensity={0.5}/>
                        <AmbientLight intensity={0.3}/>
                        <ChairTwo isWatched={this.props.isWatched}/>
                        <Shrimp/>

                    </View>
                );
            default:
                return null;
        }
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
            <Entity lit={true} style={[styles.brown, styles.transformation]} source={{obj: asset('ship.obj')}}/>
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
    render() {
        return (
            <Entity style={[styles.brown, styles.transformation]} source={{obj: asset('fass.obj')}} lit={true}/>
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
            <Entity style={[styles.lightgreen, styles.transformation]} source={{obj: asset('gpflanze.obj')}} lit={true}/>
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

class ChairTwo extends React.Component {
    rotation = new Animated.Value(0);
    translationz = new Animated.Value(-4);

    loopAnimation() {
        this.rotation.setValue(0);
        this.translationz.setValue(-4);

        if(this.props.isWatched == true){
            console.log("hello");
            Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
        }

        Animated.timing(this.translationz, {toValue: -8, duration: 10000}).start();
    }

    componentDidMount() {
        console.log(this.props.isWatched);
        this.loopAnimation();
    }

    componentWillUnmount(){
        console.log("unmount");
    }

    render() {
        return (
            <AnimatedEntity style={[{transform: [{translateZ: this.translationz},{translate: [0, 0, -4]},{rotateY: this.rotation}]}]}
                            source={{obj: asset('chair.obj')}}/>
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
        color: '#8C5321',
    },
    darkbrown: {
        color: '#6B411C',
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