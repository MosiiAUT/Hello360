import * as React from 'react';
import {Animated, asset, StyleSheet, View} from 'react-360';
import Entity from 'Entity';
import {connect} from './ClickManager';

const AnimatedEntity = Animated.createAnimatedComponent(Entity);

class Models extends React.Component {
    render() {
        switch (this.props.station) {
            case -1:
                return (
                    <View>
                        <ChairOne/>
                    </View>
                );
            case 1:
                return (
                    <View>
                        <ChairTwo isWatched={this.props.isWatched}/>
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
});

const ConnectedModelsView = connect(Models);

export default ConnectedModelsView;