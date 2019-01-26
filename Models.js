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

//floor 2 room 1
let t_haken_loeffler = [-203, 0, -543];
let t_knochen_body = [-290, 0, -581];
let t_gedicht = [-196, 0, -631];
let t_haken_laser = [-181, 0, -590];

//outside
let t_knochen_feelings = [-113, 0, -602];

//floor 2 room 2
let t_augenklappe = [37.5, 0, -549.5];
let t_hut = [57, 0, -544];
let t_book_tagebuch = [76, 0, -580];
let t_teller = [98, 0, -586];

//outside
let t_book_welle = [-30, 0, -543];
let t_haken_triller = [-221, 0, -644];
let t_kanone = [-244, 0, -583];
let t_brief = [-279, 0, -613];

class Models extends React.Component {
    render() {
        let elements;

        switch (this.props.station) {

            // outside
            case 0:
                elements = [<Koralle_w/>, <Fass_w/>, <Truhe_w/>, <Haken_mug_w/>, <Bild_shrimp_w/>];
                break;
            case 1:
                elements = [<Koralle_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,
                    <Fass_w/>, <Truhe_w/>, <Haken_mug_w/>, <Bild_shrimp_w/>];
                break;
            case 2:
                elements = [<Koralle_w/>,
                    <Fass_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>, <Truhe_w/>,
                    <Haken_mug_w/>, <Bild_shrimp_w/>];
                break;
            case 3:
                elements = [<Koralle_w/>, <Fass_w/>,
                    <Truhe_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>, <Haken_mug_w/>,
                    <Bild_shrimp_w/>];
                break;
            case 4:
                elements = [<Koralle_w/>, <Fass_w/>, <Truhe_w/>,
                    <Haken_mug_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,
                    <Bild_shrimp_w/>];
                break;
            case 5:
                elements = [<Koralle_w/>, <Fass_w/>, <Truhe_w/>, <Haken_mug_w/>,
                    <Bild_shrimp_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,
                    <Bett_w/>, <Schuh_w/>, <Bild_plankenwart_w/>, <Book_see_w/>, <Shrimpstatue_w/>, <Haken_gemein_w/>,
                    <Wellness_w/>];
                break;

            //first floor
            case 6:
                elements = [<Koralle_w/>, <Fass_w/>, <Truhe_w/>, <Haken_mug_w/>, <Bild_shrimp_w/>,
                    <Bett_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>, <Schuh_w/>,
                    <Bild_plankenwart_w/>, <Book_see_w/>, <Shrimpstatue_w/>, <Haken_gemein_w/>, <Wellness_w/>];
                break;
            case 7:
                elements = [<Koralle_w/>, <Fass_w/>, <Truhe_w/>, <Haken_mug_w/>, <Bild_shrimp_w/>, <Bett_w/>,
                    <Schuh_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,
                    <Bild_plankenwart_w/>, <Book_see_w/>, <Shrimpstatue_w/>, <Haken_gemein_w/>, <Wellness_w/>];
                break;
            case 8:
                elements = [<Bett_w/>, <Schuh_w/>,
                    <Bild_plankenwart_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,
                    <Book_see_w/>, <Shrimpstatue_w/>, <Haken_gemein_w/>, <Wellness_w/>];
                break;
            case 9:
                elements = [<Bett_w/>, <Schuh_w/>, <Bild_plankenwart_w/>,
                    <Book_see_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,
                    <Shrimpstatue_w/>, <Haken_gemein_w/>, <Wellness_w/>];
                break;
            case 10:
                elements = [<Bett_w/>, <Schuh_w/>, <Bild_plankenwart_w/>, <Book_see_w/>,
                    <Shrimpstatue_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,
                    <Haken_gemein_w/>, <Wellness_w/>];
                break;
            case 11:
                elements = [<Bett_w/>, <Schuh_w/>, <Bild_plankenwart_w/>, <Book_see_w/>, <Shrimpstatue_w/>,
                    <Haken_gemein_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,
                    <Wellness_w/>];
                break;
            case 12:
                elements = [<Bett_w/>, <Schuh_w/>, <Bild_plankenwart_w/>, <Book_see_w/>, <Shrimpstatue_w/>,
                    <Haken_gemein_w/>,
                    <Wellness_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>];
                break;

            //second floor room one
            case 13:
                elements = [<Haken_loeffler_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,<Knochen_body_w/>,<Gedicht_w/>,<Haken_laser_w/>];
                break;
            case 14:
                elements = [<Haken_loeffler_w/>,<Knochen_body_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,<Gedicht_w/>,<Haken_laser_w/>];
                break;
            case 15:
                elements = [<Haken_loeffler_w/>,<Knochen_body_w/>,<Gedicht_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,<Haken_laser_w/>];
                break;
            case 16:
                elements = [<Haken_loeffler_w/>,<Knochen_body_w/>,<Gedicht_w/>,<Haken_laser_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>];
                break;

                //knochen outside
            case 17:
                elements = [<Knochen_feelings_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,<Book_welle_w/>];
                break;

            //second floor room two
            case 18:
                elements = [<Augenklappe_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,<Hut_w/>,<Book_tagebuch_w/>,<Teller_w/>];
                break;
            case 19:
                elements = [<Augenklappe_w />,<Hut_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,<Book_tagebuch_w/>,<Teller_w/>];
                break;
            case 20:
                elements = [<Augenklappe_w/>,<Hut_w/>,<Book_tagebuch_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,<Teller_w/>];
                break;

            case 21:
                elements = [<Augenklappe_w />,<Hut_w/>,<Book_tagebuch_w/>,<Teller_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>];
                break;


            //outside
            case 22:
                elements = [<Knochen_feelings_w/>,<Book_welle_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,<Haken_triller_w/>,<Kanone_w/>,<Brief_w/>];
                break;
            case 23:
                elements = [<Knochen_feelings_w/>,<Book_welle_w/>,<Haken_triller_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,<Kanone_w/>,<Brief_w/>];
                break;
            case 24:
                elements = [<Knochen_feelings_w/>,<Book_welle_w/>,<Haken_triller_w/>,<Kanone_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,<Brief_w/>];
                break;
            case 25:
                elements = [<Knochen_feelings_w/>,<Book_welle_w/>,<Haken_triller_w />,<Kanone_w/>,<Brief_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>];
                break;

                //the end
            case 26:
                elements = [<Knochen_feelings_w/>,<Book_welle_w/>,<Haken_triller_w />,<Kanone_w/>,<Brief_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>];
                break;
        }

        return (
            <View>
                {/*<PointLight intensity={0.5} style={{color:'white', transform:[{translate:[0,50,0]}]}}/>*/}
                <DirectionalLight intensity={0.4}/>
                <AmbientLight intensity={0.3}/>
                <Scene/>

                <Ship/>
                <Terrain/>
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
                styles.white]} source={{obj: asset('w_book_see.obj')}} lit={true}/>
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
                styles.grey]} source={{obj: asset('w_shrimpstatue.obj')}} lit={true}/>
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
                styles.grey]} source={{obj: asset('w_haken_gemein.obj')}} lit={true}/>
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
                styles.white]} source={{obj: asset('w_wellness.obj')}} lit={true}/>
        );
    }
}

class Haken_loeffler_w extends React.Component {
    rotation = new Animated.Value(0);
    translationX = new Animated.Value(0);
    translationY = new Animated.Value(0);
    translationZ = new Animated.Value(0);

    booli = false;

    render() {
        if (this.props.isWatched == true && this.props.station == 13) {

            // animationElement(12, 18, 6, false);
            this.rotation.setValue(0);
            this.translationX.setValue(0);
            this.translationY.setValue(0);
            this.translationZ.setValue(0);

            Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
            Animated.timing(this.translationX, {toValue: 2, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 1, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 2, duration: 5000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 13 && this.booli) {
            this.rotation.setValue(0);
            this.translationX.setValue(2);
            this.translationY.setValue(1);
            this.translationZ.setValue(2);

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
                    {translate: t_haken_loeffler},
                    {rotateY: this.rotation},
                ]
            },
                styles.grey]} source={{obj: asset('w_haken_loeffler.obj')}} lit={true}/>
        );
    }
}

class Knochen_body_w extends React.Component {
    rotation = new Animated.Value(0);
    translationX = new Animated.Value(0);
    translationY = new Animated.Value(0);
    translationZ = new Animated.Value(0);

    booli = false;

    render() {
        if (this.props.isWatched == true && this.props.station == 14) {

            // animationElement(12, 18, 6, false);
            this.rotation.setValue(0);
            this.translationX.setValue(0);
            this.translationY.setValue(0);
            this.translationZ.setValue(0);

            Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
            Animated.timing(this.translationX, {toValue: 2, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 1, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 2, duration: 5000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 14 && this.booli) {
            this.rotation.setValue(0);
            this.translationX.setValue(2);
            this.translationY.setValue(1);
            this.translationZ.setValue(2);

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
                    {translate: t_knochen_body},
                    {rotateY: this.rotation},
                ]
            },
                styles.white]} source={{obj: asset('w_knochen_body.obj')}} lit={true}/>
        );
    }
}

class Gedicht_w extends React.Component {
    rotation = new Animated.Value(0);
    translationX = new Animated.Value(0);
    translationY = new Animated.Value(0);
    translationZ = new Animated.Value(0);

    booli = false;

    render() {
        if (this.props.isWatched == true && this.props.station == 15) {
            // animationElement(12, 18, 6, false);
            this.rotation.setValue(0);
            this.translationX.setValue(0);
            this.translationY.setValue(0);
            this.translationZ.setValue(0);

            Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
            Animated.timing(this.translationX, {toValue: 4, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 18, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 2, duration: 5000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 15 && this.booli) {
            this.rotation.setValue(0);
            this.translationX.setValue(2);
            this.translationY.setValue(1);
            this.translationZ.setValue(2);

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
                    {translate: t_gedicht},
                    {rotateY: this.rotation},
                ]
            },
                styles.white]} source={{obj: asset('w_gedicht.obj')}} lit={true}/>
        );
    }
}

class Haken_laser_w extends React.Component {
    rotation = new Animated.Value(0);
    translationX = new Animated.Value(0);
    translationY = new Animated.Value(0);
    translationZ = new Animated.Value(0);

    booli = false;

    render() {
        if (this.props.isWatched == true && this.props.station == 16) {
            // animationElement(12, 18, 6, false);
            this.rotation.setValue(0);
            this.translationX.setValue(0);
            this.translationY.setValue(0);
            this.translationZ.setValue(0);

            Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
            Animated.timing(this.translationX, {toValue: 4, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 18, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 2, duration: 5000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 17 && this.booli) {
            this.rotation.setValue(0);
            this.translationX.setValue(2);
            this.translationY.setValue(1);
            this.translationZ.setValue(2);

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
                    {translate: t_haken_laser},
                    {rotateY: this.rotation},
                ]
            },
                styles.grey]} source={{obj: asset('w_haken_laser.obj')}} lit={true}/>
        );
    }
}

//
class Knochen_feelings_w extends React.Component {
    rotation = new Animated.Value(0);
    translationX = new Animated.Value(0);
    translationY = new Animated.Value(0);
    translationZ = new Animated.Value(0);

    booli = false;

    render() {
        if (this.props.isWatched == true && this.props.station == 17) {

            // animationElement(12, 18, 6, false);
            this.rotation.setValue(0);
            this.translationX.setValue(0);
            this.translationY.setValue(0);
            this.translationZ.setValue(0);

            Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
            Animated.timing(this.translationX, {toValue: 2, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 1, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 2, duration: 5000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 17 && this.booli) {
            this.rotation.setValue(0);
            this.translationX.setValue(2);
            this.translationY.setValue(1);
            this.translationZ.setValue(2);

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
                    {translate: t_knochen_feelings},
                    {rotateY: this.rotation},
                ]
            },
                styles.white]} source={{obj: asset('w_knochen_feelings.obj')}} lit={true}/>
        );
    }
}
//

class Augenklappe_w extends React.Component {
    rotation = new Animated.Value(0);
    translationX = new Animated.Value(0);
    translationY = new Animated.Value(0);
    translationZ = new Animated.Value(0);

    booli = false;

    render() {
        if (this.props.isWatched == true && this.props.station == 18) {

            // animationElement(12, 18, 6, false);
            this.rotation.setValue(0);
            this.translationX.setValue(0);
            this.translationY.setValue(0);
            this.translationZ.setValue(0);

            Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
            Animated.timing(this.translationX, {toValue: 2, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 1, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 2, duration: 5000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 18 && this.booli) {
            this.rotation.setValue(0);
            this.translationX.setValue(2);
            this.translationY.setValue(1);
            this.translationZ.setValue(2);

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
                    {translate: t_augenklappe},
                    {rotateY: this.rotation},
                ]
            },
                styles.black]} source={{obj: asset('w_augenklappe.obj')}} lit={true}/>
        );
    }
}

class Hut_w extends React.Component {
    rotation = new Animated.Value(0);
    translationX = new Animated.Value(0);
    translationY = new Animated.Value(0);
    translationZ = new Animated.Value(0);

    booli = false;

    render() {
        if (this.props.isWatched == true && this.props.station == 19) {

            // animationElement(12, 18, 6, false);
            this.rotation.setValue(0);
            this.translationX.setValue(0);
            this.translationY.setValue(0);
            this.translationZ.setValue(0);

            Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
            Animated.timing(this.translationX, {toValue: 2, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 1, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 2, duration: 5000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 19 && this.booli) {
            this.rotation.setValue(0);
            this.translationX.setValue(2);
            this.translationY.setValue(1);
            this.translationZ.setValue(2);

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
                    {translate: t_hut},
                    {rotateY: this.rotation},
                ]
            },
                styles.black]} source={{obj: asset('w_hut.obj')}} lit={true}/>
        );
    }
}

class Book_tagebuch_w extends React.Component {
    rotation = new Animated.Value(0);
    translationX = new Animated.Value(0);
    translationY = new Animated.Value(0);
    translationZ = new Animated.Value(0);

    booli = false;

    render() {
        if (this.props.isWatched == true && this.props.station == 20) {
            // animationElement(12, 18, 6, false);
            this.rotation.setValue(0);
            this.translationX.setValue(0);
            this.translationY.setValue(0);
            this.translationZ.setValue(0);

            Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
            Animated.timing(this.translationX, {toValue: 4, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 18, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 2, duration: 5000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 20 && this.booli) {
            this.rotation.setValue(0);
            this.translationX.setValue(2);
            this.translationY.setValue(1);
            this.translationZ.setValue(2);

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
                    {translate: t_book_tagebuch},
                    {rotateY: this.rotation},
                ]
            },
                styles.white]} source={{obj: asset('w_book_tagebuch.obj')}} lit={true}/>
        );
    }
}

class Teller_w extends React.Component {
    rotation = new Animated.Value(0);
    translationX = new Animated.Value(0);
    translationY = new Animated.Value(0);
    translationZ = new Animated.Value(0);

    booli = false;

    render() {
        if (this.props.isWatched == true && this.props.station == 21) {
            // animationElement(12, 18, 6, false);
            this.rotation.setValue(0);
            this.translationX.setValue(0);
            this.translationY.setValue(0);
            this.translationZ.setValue(0);

            Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
            Animated.timing(this.translationX, {toValue: 4, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 18, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 2, duration: 5000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 21 && this.booli) {
            this.rotation.setValue(0);
            this.translationX.setValue(2);
            this.translationY.setValue(1);
            this.translationZ.setValue(2);

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
                    {translate: t_teller},
                    {rotateY: this.rotation},
                ]
            },
                styles.white]} source={{obj: asset('w_teller.obj')}} lit={true}/>
        );
    }
}

class Book_welle_w extends React.Component {
    rotation = new Animated.Value(0);
    translationX = new Animated.Value(0);
    translationY = new Animated.Value(0);
    translationZ = new Animated.Value(0);

    booli = false;

    render() {
        if (this.props.isWatched == true && this.props.station == 22) {
            // animationElement(12, 18, 6, false);
            this.rotation.setValue(0);
            this.translationX.setValue(0);
            this.translationY.setValue(0);
            this.translationZ.setValue(0);

            Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
            Animated.timing(this.translationX, {toValue: 4, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 18, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 2, duration: 5000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 22 && this.booli) {
            this.rotation.setValue(0);
            this.translationX.setValue(2);
            this.translationY.setValue(1);
            this.translationZ.setValue(2);

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
                    {translate: t_book_welle},
                    {rotateY: this.rotation},
                ]
            },
                styles.white]} source={{obj: asset('w_book_welle.obj')}} lit={true}/>
        );
    }
}

class Haken_triller_w extends React.Component {
    rotation = new Animated.Value(0);
    translationX = new Animated.Value(0);
    translationY = new Animated.Value(0);
    translationZ = new Animated.Value(0);

    booli = false;

    render() {
        if (this.props.isWatched == true && this.props.station == 23) {
            // animationElement(12, 18, 6, false);
            this.rotation.setValue(0);
            this.translationX.setValue(0);
            this.translationY.setValue(0);
            this.translationZ.setValue(0);

            Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
            Animated.timing(this.translationX, {toValue: 4, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 18, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 2, duration: 5000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 23 && this.booli) {
            this.rotation.setValue(0);
            this.translationX.setValue(2);
            this.translationY.setValue(1);
            this.translationZ.setValue(2);

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
                    {translate: t_haken_triller},
                    {rotateY: this.rotation},
                ]
            },
                styles.grey]} source={{obj: asset('w_haken_triller.obj')}} lit={true}/>
        );
    }
}

class Kanone_w extends React.Component {
    rotation = new Animated.Value(0);
    translationX = new Animated.Value(0);
    translationY = new Animated.Value(0);
    translationZ = new Animated.Value(0);

    booli = false;

    render() {
        if (this.props.isWatched == true && this.props.station == 24) {
            // animationElement(12, 18, 6, false);
            this.rotation.setValue(0);
            this.translationX.setValue(0);
            this.translationY.setValue(0);
            this.translationZ.setValue(0);

            Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
            Animated.timing(this.translationX, {toValue: 4, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 18, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 2, duration: 5000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 24 && this.booli) {
            this.rotation.setValue(0);
            this.translationX.setValue(2);
            this.translationY.setValue(1);
            this.translationZ.setValue(2);

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
                    {translate: t_kanone},
                    {rotateY: this.rotation},
                ]
            },
                styles.black]} source={{obj: asset('w_kanone.obj')}} lit={true}/>
        );
    }
}

class Brief_w extends React.Component {
    rotation = new Animated.Value(0);
    translationX = new Animated.Value(0);
    translationY = new Animated.Value(0);
    translationZ = new Animated.Value(0);

    booli = false;

    render() {
        if (this.props.isWatched == true && this.props.station == 25) {
            // animationElement(12, 18, 6, false);
            this.rotation.setValue(0);
            this.translationX.setValue(0);
            this.translationY.setValue(0);
            this.translationZ.setValue(0);

            Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
            Animated.timing(this.translationX, {toValue: 4, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 18, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 2, duration: 5000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 25 && this.booli) {
            this.rotation.setValue(0);
            this.translationX.setValue(2);
            this.translationY.setValue(1);
            this.translationZ.setValue(2);

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
                    {translate: t_brief},
                    {rotateY: this.rotation},
                ]
            },
                styles.white]} source={{obj: asset('w_brief.obj')}} lit={true}/>
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
        color: '#212121',
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
});

const ConnectedModelsView = connect(Models);

export default ConnectedModelsView;