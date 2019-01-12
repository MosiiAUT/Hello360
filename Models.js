import * as React from 'react';
import {Animated, asset, StyleSheet, PointLight, AmbientLight, View} from 'react-360';
import Entity from 'Entity';
import {connect} from './ClickManager';

const AnimatedEntity = Animated.createAnimatedComponent(Entity);

class Models extends React.Component {
    render() {
        switch (this.props.current) {
            case -1:
                return (
                    <View>
                        <PointLight intensity={0.5}/>
                        <AmbientLight intensity={0.2}/>
                        <ChairOne/>
                        <Scene/>
                        <Stone/>
                    </View>
                );
            case 1:
                return (
                    <View>
                        <PointLight intensity={0.5}/>
                        <AmbientLight intensity={0.2}/>
                        <ChairTwo/>
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
            <Entity lit={true} style={styles.scene} source={{obj: asset('scenecolor.obj'), mtl: asset('scenecolor.mtl')}}/>
        );
    }
}

class Stone extends React.Component {
    render() {
        return (
            <Entity lit={true} style={styles.scene} source={{obj: asset('stone.obj'), mtl: asset('stone.mtl')}}/>
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

class ChairTwo extends React.Component {
    rotation = new Animated.Value(0);

    loopAnimation() {
        this.rotation.setValue(0);
        //Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start(() => this.loopAnimation());
        Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
    }


    componentDidMount() {
        //setInterval(this._incrementCount, 1000);

        //uncomment me    this.loopAnimation();
    }

    render() {
        return (
            <AnimatedEntity style={[styles.chairTwo/*, {transform: [{rotateY: this.rotation}]}*/]}
                            source={{obj: asset('chair.obj')}}/>
        );
    }
}

const styles = StyleSheet.create({
    chair: {
        transform: [{translate: [-5, 0, -10]}, {rotateY: 210}]
    },
    chairTwo: {
        transform: [{translate: [5, 0, -10]}, {rotateY: 150}]
    },
    scene: {
        transform: [{translate: [0, -5, 0]}]
    },
});

const ConnectedModelsView = connect(Models);

export default ConnectedModelsView;