import * as React from 'react';
import {Animated, asset, StyleSheet, PointLight, DirectionalLight, AmbientLight, View} from 'react-360';
import Entity from 'Entity';
import {connect} from './ClickManager';

const AnimatedEntity = Animated.createAnimatedComponent(Entity);

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

//floor 2 room 2
let t_augenklappe = [37.5, 0, -549.5];
let t_hut = [57, 0, -544];
let t_book_tagebuch = [76, 0, -580];
let t_teller = [98, 0, -586];

class Models extends React.Component {
    render() {
        let elements;

        switch (this.props.station) {
            // elements = <ChairTwo isWatched={this.props.isWatched} station={this.props.station} lit={true}/>;

            // outside
            case 0:
                elements = [<Koralle_d/>,<Fass_d/>,<Truhe_d/>,<Haken_mug_d/>,<Bild_shrimp_d/>];
                break;
            case 1:
                elements = [<Koralle_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>, <Fass_d/>,<Truhe_d/>,<Haken_mug_d/>,<Bild_shrimp_d/>];
                break;
            case 2:
                elements = [<Koralle_d/>, <Fass_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>, <Truhe_d/>,<Haken_mug_d/>,<Bild_shrimp_d/>];
                break;
            case 3:
                elements = [<Koralle_d/>, <Fass_d/>, <Truhe_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,<Haken_mug_d/>,<Bild_shrimp_d/>];
                break;
            case 4:
                elements = [<Koralle_d/>, <Fass_d/>, <Truhe_d/>,<Haken_mug_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,<Bild_shrimp_d/>];
                break;
            case 5:
                elements = [<Koralle_d/>, <Fass_d/>, <Truhe_d/>,<Haken_mug_d/>,<Bild_shrimp_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>, <Bett_d/>,<Schuh_d/>,<Bild_plankenwart_d/>,<Book_see_d/>,<Shrimpstatue_d/>,<Haken_gemein_d/>,<Wellness_d/>];
                break;

            //first floor
            case 6:
                elements = [<Koralle_d/>, <Fass_d/>, <Truhe_d/>,<Haken_mug_d/>,<Bild_shrimp_d/>, <Bett_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,<Schuh_d/>,<Bild_plankenwart_d/>,<Book_see_d/>,<Shrimpstatue_d/>,<Haken_gemein_d/>,<Wellness_d/>];
                break;
            case 7:
                elements = [<Koralle_d/>, <Fass_d/>, <Truhe_d/>,<Haken_mug_d/>,<Bild_shrimp_d/>, <Bett_d/>,<Schuh_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,<Bild_plankenwart_d/>,<Book_see_d/>,<Shrimpstatue_d/>,<Haken_gemein_d/>,<Wellness_d/>];
                break;
            case 8:
                elements = [<Bett_d/>,<Schuh_d/>,<Bild_plankenwart_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,<Book_see_d/>,<Shrimpstatue_d/>,<Haken_gemein_d/>,<Wellness_d/>];
                break;
            case 9:
                elements = [<Bett_d/>,<Schuh_d/>,<Bild_plankenwart_d/>,<Book_see_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,<Shrimpstatue_d/>,<Haken_gemein_d/>,<Wellness_d/>];
                break;
            case 10:
                elements = [<Bett_d/>,<Schuh_d/>,<Bild_plankenwart_d/>,<Book_see_d/>,<Shrimpstatue_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,<Haken_gemein_d/>,<Wellness_d/>];
                break;
            case 11:
                elements = [<Bett_d/>,<Schuh_d/>,<Bild_plankenwart_d/>,<Book_see_d/>,<Shrimpstatue_d/>,<Haken_gemein_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,<Wellness_d/>];
                break;
            case 12:
                elements = [<Bett_d/>,<Schuh_d/>,<Bild_plankenwart_d/>,<Book_see_d/>,<Shrimpstatue_d/>,<Haken_gemein_d/>,<Wellness_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>];
                break;

            //second floor room one
            case 13:
                elements = [<Haken_loeffler_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,<Knochen_body_d/>,<Gedicht_d/>,<Haken_laser_d/>];
                break;
            case 14:
                elements = [<Haken_loeffler_d/>,<Knochen_body_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,<Gedicht_d/>,<Haken_laser_d/>];
                break;
            case 15:
                elements = [<Haken_loeffler_d/>,<Knochen_body_d/>,<Gedicht_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,<Haken_laser_d/>];
                break;
            case 16:
                elements = [<Haken_loeffler_d/>,<Knochen_body_d/>,<Gedicht_d/>,<Haken_laser_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>];
                break;

                //knochen outside
            case 17:
                elements = null;
                break;

            //second floor room one
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

            case 4:
                elements = [<Augenklappe_w />,<Hut_w/>,<Book_tagebuch_w/>,<Teller_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>];
                break;

        }

        return (
            <View>
                {/*<PointLight intensity={0.5} style={{color:'white', transform:[{translate:[0,50,0]}]}}/>*/}
                <DirectionalLight intensity={0.4} />
                <AmbientLight intensity={0.3} />
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

/*
//da die variablen global sind, greifen alle entities darauf zu, deswegen bewegt sich das
//nächste objekt wenn man sich teleportiert zurück....
let rotation = new Animated.Value(0);
let translationX = new Animated.Value(0);
let translationY = new Animated.Value(0);
let translationZ = new Animated.Value(0);


function animationElement(x, y, z, back) {
    if (!back) {
        translationX.setValue(0);
        translationY.setValue(0);
        translationZ.setValue(0);

        Animated.timing(rotation, {toValue: 360, duration: 20000}).start();
        Animated.timing(translationX, {toValue: x, duration: 5000}).start();
        Animated.timing(translationY, {toValue: y, duration: 5000}).start();
        Animated.timing(translationZ, {toValue: z, duration: 5000}).start();
    } else {
        Animated.timing(rotation, {toValue: 0, duration: 5000}).start();
        Animated.timing(translationX, {toValue: 0, duration: 5000}).start();
        Animated.timing(translationY, {toValue: 0, duration: 5000}).start();
        Animated.timing(translationZ, {toValue: 0, duration: 5000}).start();

    }
}
*/


// _w - watched things
// _d - watched things in default

class Koralle_w extends React.Component {
    rotation = new Animated.Value(0);
    translationX = new Animated.Value(0);
    translationY = new Animated.Value(0);
    translationZ = new Animated.Value(0);

    booli = false;

    render() {
        if (this.props.isWatched == true && this.props.station == 1) {

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

        } else if (this.props.isWatched == false && this.props.station == 1 && this.booli) {
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

        } else if (this.props.isWatched == false && this.props.station == 2 && this.booli) {
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
            Animated.timing(this.translationX, {toValue: 4, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 18, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 2, duration: 5000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 3 && this.booli) {
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

        } else if (this.props.isWatched == false && this.props.station == 4 && this.booli) {
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

        } else if (this.props.isWatched == false && this.props.station == 5 && this.booli) {
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
                    {translate: t_bild_shrimp},
                    {rotateY: this.rotation},
                ]
            },
                styles.brown]} source={{obj: asset('w_bild_shrimp.obj')}} lit={true}/>
        );
    }
}

class Bett_w extends React.Component {
    rotation = new Animated.Value(0);
    translationX = new Animated.Value(0);
    translationY = new Animated.Value(0);
    translationZ = new Animated.Value(0);

    booli = false;

    render() {
        if (this.props.isWatched == true && this.props.station == 6) {
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

        } else if (this.props.isWatched == false && this.props.station == 6 && this.booli) {
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
                    {translate: t_bett},
                    {rotateY: this.rotation},
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

        } else if (this.props.isWatched == false && this.props.station == 7 && this.booli) {
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

    booli = false;

    render() {
        if (this.props.isWatched == true && this.props.station == 8) {
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

        } else if (this.props.isWatched == false && this.props.station == 8 && this.booli) {
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
                    {translate: t_bild_plankenwart},
                    {rotateY: this.rotation},
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

        } else if (this.props.isWatched == false && this.props.station == 9 && this.booli) {
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

        } else if (this.props.isWatched == false && this.props.station == 10 && this.booli) {
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

        } else if (this.props.isWatched == false && this.props.station == 11 && this.booli) {
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

        } else if (this.props.isWatched == false && this.props.station == 12 && this.booli) {
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
                    {translate: t_wellness},
                    {rotateY: this.rotation},
                ]
            },
                styles.brown]} source={{obj: asset('w_wellness.obj')}} lit={true}/>
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
                styles.grey]} source={{obj: asset('w_knochen_body.obj')}} lit={true}/>
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
                styles.grey]} source={{obj: asset('w_gedicht.obj')}} lit={true}/>
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
class Knochen_life_w extends React.Component {
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
                    {translate: t_augenklappe},
                    {rotateY: this.rotation},
                ]
            },
                styles.black]} source={{obj: asset('w_augenklappe.obj')}} lit={true}/>
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
                styles.grey]} source={{obj: asset('w_book_tagebuch.obj')}} lit={true}/>
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
                styles.grey]} source={{obj: asset('w_teller.obj')}} lit={true}/>
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
            <Entity lit={true} style={[styles.brown, styles.bild_plankenwart]} source={{obj: asset('w_bild_plankenwart.obj')}}/>
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

class Haken_loeffler_d extends React.Component {
    render() {
        return (
            <Entity lit={true} style={[styles.grey, styles.haken_loeffler]} source={{obj: asset('w_haken_loeffler.obj')}}/>
        );
    }
}

class Knochen_body_d extends React.Component {
    render() {
        return (
            <Entity lit={true} style={[styles.grey, styles.knochen_body]} source={{obj: asset('w_knochen_body.obj')}}/>
        );
    }
}

class Gedicht_d extends React.Component {
    render() {
        return (
            <Entity lit={true} style={[styles.grey, styles.gedicht]} source={{obj: asset('w_gedicht.obj')}}/>
        );
    }
}

class Haken_laser_d extends React.Component {
    render() {
        return (
            <Entity lit={true} style={[styles.grey, styles.haken_laser]} source={{obj: asset('w_haken_laser.obj')}}/>
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

/*
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
*/

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
    haken_loeffler: {
        transform: [{translate: t_haken_loeffler}],
    },
    knochen_body: {
        transform: [{translate: t_knochen_body}],
    },
    gedicht: {
        transform: [{translate: t_gedicht}],
    },
    haken_laser: {
        transform: [{translate: t_haken_laser}],
    }

});

const ConnectedModelsView = connect(Models);

export default ConnectedModelsView;