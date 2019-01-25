import * as React from 'react';
import {Animated, asset, StyleSheet, DirectionalLight, AmbientLight, View, NativeModules} from 'react-360';
import Entity from 'Entity';
import {connect} from './ClickManager';

const AnimatedEntity = Animated.createAnimatedComponent(Entity);
const {AudioModule} = NativeModules;

AudioModule.playEnvironmental({
    source: asset('Fluidscape.mp3'),
    volume: 0.1,
});

//outside
let t_koralle = [-116, 0, -112];
let t_fass = [-111, 0, -237];
let t_truhe = [61, 0, -290];
let t_haken_mug = [-42, 0, -399];
let t_bild_shrimp = [32, 0, -454];

//floor 1
let t_bett = [81, 0, -573];
let t_shoe = [32, 0, -538];
let t_bild_plankenwart = [-4, 0, -507];
let t_book_see = [-24, 0, -534];
let t_shrimpstatue = [-68, 0, -568];
let t_haken_gemein = [-123, 0, -552];
let t_wellness = [-82, 0, -516];


class Models extends React.Component {
    render() {
        let elements;

        switch (this.props.station) {
            // outside
            case 0:
                elements = [<Koralle_d/>, <Fass_d/>, <Truhe_d/>, <Haken_mug_d/>, <Bild_shrimp_d/>];
                break;
            case 1:
                elements = [<Koralle_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,
                    <Fass_d/>, <Truhe_d/>, <Haken_mug_d/>, <Bild_shrimp_d/>];
                break;
            case 2:
                elements = [<Koralle_d/>,
                    <Fass_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>, <Truhe_d/>,
                    <Haken_mug_d/>, <Bild_shrimp_d/>];
                break;
            case 3:
                elements = [<Koralle_d/>, <Fass_d/>,
                    <Truhe_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>, <Haken_mug_d/>,
                    <Bild_shrimp_d/>];
                break;
            case 4:
                elements = [<Koralle_d/>, <Fass_d/>, <Truhe_d/>,
                    <Haken_mug_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,
                    <Bild_shrimp_d/>];
                break;
            case 5:
                elements = [<Koralle_d/>, <Fass_d/>, <Truhe_d/>, <Haken_mug_d/>,
                    <Bild_shrimp_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,
                    <Bett_d/>, <Schuh_d/>, <Bild_plankenwart_d/>, <Book_see_d/>, <Shrimpstatue_d/>, <Haken_gemein_d/>,
                    <Wellness_d/>];
                break;

            //first floor
            case 6:
                elements = [<Koralle_d/>, <Fass_d/>, <Truhe_d/>, <Haken_mug_d/>, <Bild_shrimp_d/>,
                    <Bett_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>, <Schuh_d/>,
                    <Bild_plankenwart_d/>, <Book_see_d/>, <Shrimpstatue_d/>, <Haken_gemein_d/>, <Wellness_d/>];
                break;
            case 7:
                elements = [<Koralle_d/>, <Fass_d/>, <Truhe_d/>, <Haken_mug_d/>, <Bild_shrimp_d/>, <Bett_d/>,
                    <Schuh_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,
                    <Bild_plankenwart_d/>, <Book_see_d/>, <Shrimpstatue_d/>, <Haken_gemein_d/>, <Wellness_d/>];
                break;
            case 8:
                elements = [<Bett_d/>, <Schuh_d/>,
                    <Bild_plankenwart_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,
                    <Book_see_d/>, <Shrimpstatue_d/>, <Haken_gemein_d/>, <Wellness_d/>];
                break;
            case 9:
                elements = [<Bett_d/>, <Schuh_d/>, <Bild_plankenwart_d/>,
                    <Book_see_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,
                    <Shrimpstatue_d/>, <Haken_gemein_d/>, <Wellness_d/>];
                break;
            case 10:
                elements = [<Bett_d/>, <Schuh_d/>, <Bild_plankenwart_d/>, <Book_see_d/>,
                    <Shrimpstatue_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,
                    <Haken_gemein_d/>, <Wellness_d/>];
                break;
            case 11:
                elements = [<Bett_d/>, <Schuh_d/>, <Bild_plankenwart_d/>, <Book_see_d/>, <Shrimpstatue_d/>,
                    <Haken_gemein_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,
                    <Wellness_d/>];
                break;
            case 12:
                elements = [<Bett_d/>, <Schuh_d/>, <Bild_plankenwart_d/>, <Book_see_d/>, <Shrimpstatue_d/>,
                    <Haken_gemein_d/>,
                    <Wellness_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>];
                break;
            case 13:
                elements = null;
                break;

        }

        return (
            <View>
                {/*<PointLight intensity={0.5} style={{color:'white', transform:[{translate:[0,50,0]}]}}/>*/}
                <DirectionalLight intensity={0.4}/>
                <AmbientLight intensity={0.3}/>
                <Terrain/>
                <Scene/>
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

class Koralle_w extends React.Component {
    rotation = new Animated.Value(0);
    // translationX = new Animated.Value(0);
    // translationY = new Animated.Value(0);
    // translationZ = new Animated.Value(0);

    booli = false;

    render() {
        if (this.props.isWatched == true && this.props.station == 1) {

            // animationElement(12, 18, 6, false);
            this.rotation.setValue(0);
            // this.translationX.setValue(0);
            // this.translationY.setValue(0);
            // this.translationZ.setValue(0);

            Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
            // Animated.timing(this.translationX, {toValue: 0, duration: 5000}).start();
            // Animated.timing(this.translationY, {toValue: 0, duration: 5000}).start();
            // Animated.timing(this.translationZ, {toValue: 0, duration: 5000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 1 && this.booli) {
            Animated.timing(this.rotation, {toValue: 0, duration: 5000}).start();
            // Animated.timing(this.translationX, {toValue: 0, duration: 5000}).start();
            // Animated.timing(this.translationY, {toValue: 0, duration: 5000}).start();
            // Animated.timing(this.translationZ, {toValue: 0, duration: 5000}).start();

            this.booli = true;

        }

        return (
            <AnimatedEntity style={[{
                transform: [
                    // {translateX: this.translationX},
                    // {translateY: this.translationY},
                    // {translateZ: this.translationZ},
                    {translate: t_koralle},
                    {rotateY: this.rotation},
                ]
            },
                styles.red]} source={{obj: asset('w_coral.obj')}} lit={true}/>
        );
    }
}

class Fass_w extends React.Component {
    rotation = new Animated.Value(0);
    translationX = new Animated.Value(0);
    translationY = new Animated.Value(0);
    translationZ = new Animated.Value(0);

    booli = false;

    render() {
        if (this.props.isWatched == true && this.props.station == 2) {

            this.rotation.setValue(0);
            this.translationX.setValue(0);
            this.translationY.setValue(0);
            this.translationZ.setValue(0);

            Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
            Animated.timing(this.translationX, {toValue: 18, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 18, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: -4, duration: 5000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 2 && this.booli) {
            Animated.timing(this.rotation, {toValue: 0, duration: 5000}).start();
            Animated.timing(this.translationX, {toValue: 0, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 0, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 0, duration: 5000}).start();

            this.booli = true;

        }

        return (
            <AnimatedEntity style={[{
                transform: [
                    {translateX: this.translationX},
                    {translateY: this.translationY},
                    {translateZ: this.translationZ},
                    {translate: t_fass},
                    {rotateY: this.rotation},
                ]
            },
                styles.brown]} source={{obj: asset('w_fass.obj')}} lit={true}/>
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
        if (this.props.isWatched == true && this.props.station == 3) {
            // animationElement(12, 18, 6, false);
            this.rotation.setValue(0);
            this.translationX.setValue(0);
            this.translationY.setValue(0);
            this.translationZ.setValue(0);

            Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
            Animated.timing(this.translationX, {toValue: -5, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 18, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 22, duration: 5000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 3 && this.booli) {
            Animated.timing(this.rotation, {toValue: 0, duration: 5000}).start();
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
                    {translate: t_truhe},
                    {rotateY: this.rotation},
                ]
            },
                styles.brown]} source={{obj: asset('w_truhe.obj')}} lit={true}/>
        );
    }
}

class Haken_mug_w extends React.Component {
    rotation = new Animated.Value(0);
    translationX = new Animated.Value(0);
    translationY = new Animated.Value(0);
    translationZ = new Animated.Value(0);

    booli = false;

    render() {
        if (this.props.isWatched == true && this.props.station == 4) {
            this.rotation.setValue(0);
            this.translationX.setValue(0);
            this.translationY.setValue(0);
            this.translationZ.setValue(0);

            Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
            Animated.timing(this.translationX, {toValue: -4, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 18, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: -10, duration: 5000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 4 && this.booli) {
            Animated.timing(this.rotation, {toValue: 0, duration: 5000}).start();
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
                    {translate: t_haken_mug},
                    {rotateY: this.rotation},
                ]
            },
                styles.grey]} source={{obj: asset('w_haken_mug.obj')}} lit={true}/>
        );
    }
}

class Bild_shrimp_w extends React.Component {
    rotation = new Animated.Value(0);
    translationX = new Animated.Value(0);
    translationY = new Animated.Value(0);
    translationZ = new Animated.Value(0);

    booli = false;

    render() {
        if (this.props.isWatched == true && this.props.station == 5) {
            this.rotation.setValue(0);
            this.translationX.setValue(0);
            this.translationY.setValue(0);
            this.translationZ.setValue(0);

            Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
            Animated.timing(this.translationX, {toValue: 6, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 19, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 24, duration: 5000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 5 && this.booli) {
            Animated.timing(this.rotation, {toValue: 0, duration: 5000}).start();
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
                    {translate: t_bild_shrimp},
                    {rotateY: this.rotation},
                ]
            },
                styles.brown]} source={{obj: asset('w_bild_shrimp.obj')}} lit={true}/>
        );
    }
}

class Bett_w extends React.Component {
    // rotation = new Animated.Value(0);
    translationX = new Animated.Value(0);
    translationY = new Animated.Value(0);
    translationZ = new Animated.Value(0);

    booli = false;

    render() {
        if (this.props.isWatched == true && this.props.station == 6) {
            // this.rotation.setValue(0);
            this.translationX.setValue(0);
            this.translationY.setValue(0);
            this.translationZ.setValue(0);

            // Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
            Animated.timing(this.translationX, {toValue: -4, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 20, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 10, duration: 5000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 6 && this.booli) {
            // Animated.timing(this.rotation, {toValue: 0, duration: 5000}).start();
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
                    {translate: t_bett},
                    // {rotateY: this.rotation},
                ]
            },
                styles.brown]} source={{obj: asset('w_bett.obj')}} lit={true}/>
        );
    }
}

class Schuh_w extends React.Component {
    rotation = new Animated.Value(0);
    translationX = new Animated.Value(0);
    translationY = new Animated.Value(0);
    translationZ = new Animated.Value(0);

    booli = false;

    render() {
        if (this.props.isWatched == true && this.props.station == 7) {
            this.rotation.setValue(0);
            // this.translationX.setValue(0);
            this.translationY.setValue(0);
            this.translationZ.setValue(0);

            Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
            // Animated.timing(this.translationX, {toValue: 4, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 18, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 2, duration: 5000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 7 && this.booli) {
            Animated.timing(this.rotation, {toValue: 0, duration: 5000}).start();
            // Animated.timing(this.translationX, {toValue: 0, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 0, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 0, duration: 5000}).start();
            this.booli = false;
        }

        return (
            <AnimatedEntity style={[{
                transform: [
                    // {translateX: this.translationX},
                    {translateY: this.translationY},
                    {translateZ: this.translationZ},
                    {translate: t_shoe},
                    {rotateY: this.rotation},
                ]
            },
                styles.black]} source={{obj: asset('w_schuh.obj')}} lit={true}/>
        );
    }
}

class Bild_plankenwart_w extends React.Component {
    rotation = new Animated.Value(0);
    translationX = new Animated.Value(0);
    translationY = new Animated.Value(0);
    translationZ = new Animated.Value(0);
    scale = new Animated.Value(1);

    booli = false;

    render() {
        if (this.props.isWatched == true && this.props.station == 8) {
            this.rotation.setValue(0);
            this.translationX.setValue(0);
            this.translationY.setValue(0);
            this.translationZ.setValue(0);
            this.scale.setValue(1);

            Animated.timing(this.rotation, {toValue: 300, duration: 20000}).start();
            Animated.timing(this.translationX, {toValue: 5, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: -10, duration: 3000}).start();
            Animated.timing(this.translationZ, {toValue: -6, duration: 5000}).start();
            Animated.timing(this.scale, {toValue: 0.3, duration: 3000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 8 && this.booli) {
            Animated.timing(this.rotation, {toValue: 0, duration: 5000}).start();
            Animated.timing(this.translationX, {toValue: 0, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 0, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 0, duration: 5000}).start();
            Animated.timing(this.scale, {toValue: 1, duration: 4000}).start();
            this.booli = false;
        }

        return (
            <AnimatedEntity style={[{
                transform: [
                    {translateX: this.translationX},
                    {translateY: this.translationY},
                    {translateZ: this.translationZ},
                    {translate: t_bild_plankenwart},
                    {rotateY: this.rotation},
                    {scale: this.scale},
                ]
            },
                styles.brown]} source={{obj: asset('w_bild_plankenwart.obj')}} lit={true}/>
        );
    }
}

class Book_see_w extends React.Component {
    rotation = new Animated.Value(0);
    translationX = new Animated.Value(0);
    translationY = new Animated.Value(0);
    translationZ = new Animated.Value(0);

    booli = false;

    render() {
        if (this.props.isWatched == true && this.props.station == 9) {
            this.rotation.setValue(0);
            this.translationX.setValue(0);
            this.translationY.setValue(0);
            this.translationZ.setValue(0);

            Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
            Animated.timing(this.translationX, {toValue: -3, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 22, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 3, duration: 5000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 9 && this.booli) {
            Animated.timing(this.rotation, {toValue: 0, duration: 5000}).start();
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
                    {translate: t_book_see},
                    {rotateY: this.rotation},
                ]
            },
                styles.brown]} source={{obj: asset('w_book_see.obj')}} lit={true}/>
        );
    }
}

class Shrimpstatue_w extends React.Component {
    rotation = new Animated.Value(0);
    translationX = new Animated.Value(0);
    translationY = new Animated.Value(0);
    translationZ = new Animated.Value(0);

    booli = false;

    render() {
        if (this.props.isWatched == true && this.props.station == 10) {
            this.rotation.setValue(0);
            this.translationX.setValue(0);
            this.translationY.setValue(0);
            this.translationZ.setValue(0);

            Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
            Animated.timing(this.translationX, {toValue: 0, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 19, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 2, duration: 5000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 10 && this.booli) {
            Animated.timing(this.rotation, {toValue: 0, duration: 5000}).start();
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
                    {translate: t_shrimpstatue},
                    {rotateY: this.rotation},
                ]
            },
                styles.brown]} source={{obj: asset('w_shrimpstatue.obj')}} lit={true}/>
        );
    }
}

class Haken_gemein_w extends React.Component {
    rotation = new Animated.Value(0);
    translationX = new Animated.Value(0);
    translationY = new Animated.Value(0);
    translationZ = new Animated.Value(0);

    booli = false;

    render() {
        if (this.props.isWatched == true && this.props.station == 11) {
            this.rotation.setValue(0);
            this.translationX.setValue(0);
            this.translationY.setValue(0);
            this.translationZ.setValue(0);

            Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
            Animated.timing(this.translationX, {toValue: 15, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 16, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 0, duration: 5000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 11 && this.booli) {
            Animated.timing(this.rotation, {toValue: 0, duration: 5000}).start();
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
                    {translate: t_haken_gemein},
                    {rotateY: this.rotation},
                ]
            },
                styles.brown]} source={{obj: asset('w_haken_gemein.obj')}} lit={true}/>
        );
    }
}

class Wellness_w extends React.Component {
    rotation = new Animated.Value(0);
    translationX = new Animated.Value(0);
    translationY = new Animated.Value(0);
    translationZ = new Animated.Value(0);

    booli = false;

    render() {
        if (this.props.isWatched == true && this.props.station == 12) {
            this.rotation.setValue(0);
            this.translationX.setValue(0);
            this.translationY.setValue(0);
            this.translationZ.setValue(0);

            Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
            Animated.timing(this.translationX, {toValue: -25, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 5, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: -10, duration: 5000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 12 && this.booli) {
            Animated.timing(this.rotation, {toValue: 0, duration: 5000}).start();
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
                    {translate: t_wellness},
                    {rotateY: this.rotation},
                ]
            },
                styles.brown]} source={{obj: asset('w_wellness.obj')}} lit={true}/>
        );
    }
}


class Koralle_d extends React.Component {
    render() {
        return (
            <Entity lit={true} style={[styles.red, styles.koralle]} source={{obj: asset('w_coral.obj')}}/>
        );
    }
}


class Fass_d extends React.Component {
    render() {
        return (
            <Entity lit={true} style={[styles.brown, styles.fass]} source={{obj: asset('w_fass.obj')}}/>
        );
    }
}

class Truhe_d extends React.Component {
    render() {
        return (
            <Entity lit={true} style={[styles.brown, styles.truhe]} source={{obj: asset('w_truhe.obj')}}/>
        );
    }
}

class Haken_mug_d extends React.Component {
    render() {
        return (
            <Entity lit={true} style={[styles.grey, styles.haken_mug]} source={{obj: asset('w_haken_mug.obj')}}/>
        );
    }
}

class Bild_shrimp_d extends React.Component {
    render() {
        return (
            <Entity lit={true} style={[styles.brown, styles.bild_shrimp]} source={{obj: asset('w_bild_shrimp.obj')}}/>
        );
    }
}

class Bett_d extends React.Component {
    render() {
        return (
            <Entity lit={true} style={[styles.brown, styles.bett]} source={{obj: asset('w_bett.obj')}}/>
        );
    }
}

class Schuh_d extends React.Component {
    render() {
        return (
            <Entity lit={true} style={[styles.black, styles.shoe]} source={{obj: asset('w_schuh.obj')}}/>
        );
    }
}

class Bild_plankenwart_d extends React.Component {
    render() {
        return (
            <Entity lit={true} style={[styles.brown, styles.bild_plankenwart]}
                    source={{obj: asset('w_bild_plankenwart.obj')}}/>
        );
    }
}

class Book_see_d extends React.Component {
    render() {
        return (
            <Entity lit={true} style={[styles.black, styles.book_see]} source={{obj: asset('w_book_see.obj')}}/>
        );
    }
}

class Shrimpstatue_d extends React.Component {
    render() {
        return (
            <Entity lit={true} style={[styles.black, styles.shrimpstatue]} source={{obj: asset('w_shrimpstatue.obj')}}/>
        );
    }
}

class Haken_gemein_d extends React.Component {
    render() {
        return (
            <Entity lit={true} style={[styles.black, styles.haken_gemein]} source={{obj: asset('w_haken_gemein.obj')}}/>
        );
    }
}

class Wellness_d extends React.Component {
    render() {
        return (
            <Entity lit={true} style={[styles.black, styles.wellness]} source={{obj: asset('w_wellness.obj')}}/>
        );
    }
}

class Ship extends React.Component {
    render() {
        return (
            <Entity lit={true} style={styles.darkbrown} source={{obj: asset('ship.obj')}}/>
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

class Scene extends React.Component {
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
    koralle: {
        transform: [{translate: t_koralle}],
    },
    fass: {
        transform: [{translate: t_fass}],
    },
    truhe: {
        transform: [{translate: t_truhe}],
    },
    haken_mug: {
        transform: [{translate: t_haken_mug}],
    },
    bild_shrimp: {
        transform: [{translate: t_bild_shrimp}],
    },
    bett: {
        transform: [{translate: t_bett}],
    },
    shoe: {
        transform: [{translate: t_shoe}],
    },
    bild_plankenwart: {
        transform: [{translate: t_bild_plankenwart}],
    },
    book_see: {
        transform: [{translate: t_book_see}],
    },
    shrimpstatue: {
        transform: [{translate: t_shrimpstatue}],
    },
    haken_gemein: {
        transform: [{translate: t_haken_gemein}],
    },
    wellness: {
        transform: [{translate: t_wellness}],
    },

});

const ConnectedModelsView = connect(Models);

export default ConnectedModelsView;