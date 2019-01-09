import * as React from 'react';
import {Animated, asset, StyleSheet, View} from 'react-360';
import Entity from 'Entity';
import {connect} from './ClickManager';

const AnimatedEntity = Animated.createAnimatedComponent(Entity);

class Models extends React.Component {
    render() {
        switch (this.props.current) {
            case -1:
                return (
                    <View>
                        <ChairOne/>
                    </View>
                );
            case 1:
                return (
                    <View>
                        <ChairTwo/>
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
});

const ConnectedModelsView = connect(Models);

export default ConnectedModelsView;