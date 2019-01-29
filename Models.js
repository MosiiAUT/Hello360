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
        let defaultelements;

        switch (this.props.station) {

            // outside
            case 0:
                elements = [<Koralle_w/>, <Fass_w/>, <Truhe_w/>, <Haken_mug_w/>, <Bild_shrimp_w/>, <Kanone_w/>];
                break;
            case 1:
                elements = [<Koralle_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,
                    <Fass_w/>, <Truhe_w/>, <Haken_mug_w/>, <Bild_shrimp_w/>, <Kanone_w/>];
                break;
            case 2:
                elements = [<Koralle_w/>,
                    <Fass_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>, <Truhe_w/>,
                    <Haken_mug_w/>, <Bild_shrimp_w/>, <Kanone_w/>];
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
                    <Bild_plankenwart_w/>, <Book_see_w/>, <Shrimpstatue_w/>, <Haken_gemein_w/>, <Wellness_w/>, <Haken_laser_w/>];
                break;
            case 7:
                elements = [<Koralle_w/>, <Fass_w/>, <Truhe_w/>, <Haken_mug_w/>, <Bild_shrimp_w/>, <Bett_w/>,
                    <Schuh_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,
                    <Bild_plankenwart_w/>, <Book_see_w/>, <Shrimpstatue_w/>, <Haken_gemein_w/>, <Wellness_w/>, <Haken_laser_w/>];
                break;
            case 8:
                elements = [<Bett_w/>, <Schuh_w/>,
                    <Bild_plankenwart_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,
                    <Book_see_w/>, <Shrimpstatue_w/>, <Haken_gemein_w/>, <Wellness_w/>, <Haken_laser_w/>];
                break;
            case 9:
                elements = [<Bett_w/>, <Schuh_w/>, <Bild_plankenwart_w/>,
                    <Book_see_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,
                    <Shrimpstatue_w/>, <Haken_gemein_w/>, <Wellness_w/>, <Haken_laser_w/>];
                break;
            case 10:
                elements = [<Bett_w/>, <Schuh_w/>, <Bild_plankenwart_w/>, <Book_see_w/>,
                    <Shrimpstatue_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,
                    <Haken_gemein_w/>, <Wellness_w/>, <Haken_laser_w/>];
                break;
            case 11:
                elements = [<Bett_w/>, <Schuh_w/>, <Bild_plankenwart_w/>, <Book_see_w/>, <Shrimpstatue_w/>,
                    <Haken_gemein_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,
                    <Wellness_w/>, <Haken_laser_w/>];
                break;
            case 12:
                elements = [<Bett_w/>, <Schuh_w/>, <Bild_plankenwart_w/>, <Book_see_w/>, <Shrimpstatue_w/>,
                    <Haken_gemein_w/>,
                    <Wellness_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>, <Haken_laser_w/>];
                break;

            //second floor room one
            case 13:
                elements = [<Haken_loeffler_w isWatched={this.props.isWatched} station={this.props.station}
                                              lit={true}/>, <Knochen_body_w/>, <Gedicht_w/>, <Haken_laser_w/>, <Book_welle_w/>];
                break;
            case 14:
                elements = [<Haken_loeffler_w/>,
                    <Knochen_body_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,
                    <Gedicht_w/>, <Haken_laser_w/>, <Book_welle_w/>];
                break;
            case 15:
                elements = [<Haken_loeffler_w/>, <Knochen_body_w/>,
                    <Gedicht_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,
                    <Haken_laser_w/>, <Book_welle_w/>];
                break;
            case 16:
                elements = [<Haken_loeffler_w/>, <Knochen_body_w/>, <Gedicht_w/>,
                    <Haken_laser_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>, <Book_welle_w/>];
                break;

            //knochen outside
            case 17:
                elements = [<Knochen_feelings_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,<Book_welle_w/>];
                break;

            //second floor room two
            case 18:
                elements = [<Augenklappe_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,
                    <Hut_w/>, <Book_tagebuch_w/>, <Teller_w/>];
                break;
            case 19:
                elements = [<Augenklappe_w/>,
                    <Hut_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,
                    <Book_tagebuch_w/>, <Teller_w/>];
                break;
            case 20:
                elements = [<Augenklappe_w/>, <Hut_w/>,
                    <Book_tagebuch_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>,
                    <Teller_w/>];
                break;

            case 21:
                elements = [<Augenklappe_w/>, <Hut_w/>, <Book_tagebuch_w/>,
                    <Teller_w isWatched={this.props.isWatched} station={this.props.station} lit={true}/>, <Knochen_feelings_w/>,<Book_welle_w/>];
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
                elements = [<Koralle_w/>, <Fass_w/>, <Truhe_w/>, <Haken_mug_w/>, <Bild_shrimp_w/>, <Kanone_w/>, <Kanone_w/>, <Bett_w/>];
                break;
        }

        switch (this.props.station) {

            // outside
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                defaultelements = [<Out_fass/>, <Out_geschirr/>, <Out_koralle_green/>, <Out_koralle_big/>, <Out_koralle_lila/>, <Out_koralle_pink/>, <Out_koralle_rot/>, <Out_pflanzen/>, <Out_schatzkiste/>, <Out_seegras/>, <Out_shoe/>, <Out_stones/>];
                break;
            case 5:
                defaultelements = [<Out_fass/>, <Out_geschirr/>, <Out_koralle_green/>, <Out_koralle_big/>, <Out_koralle_lila/>, <Out_koralle_pink/>, <Out_koralle_rot/>, <Out_pflanzen/>, <Out_schatzkiste/>, <Out_seegras/>, <Out_shoe/>, <Out_stones/>, <One_bett/>, <One_shoe/>, <One_stuhl/>, <One_tisch/>];
                break;

            //first floor
            case 6:
            case 7:
            case 8:
                defaultelements = [<Out_fass/>, <Out_geschirr/>, <Out_koralle_green/>, <Out_koralle_big/>, <Out_koralle_lila/>, <Out_koralle_pink/>, <Out_koralle_rot/>, <Out_pflanzen/>, <Out_schatzkiste/>, <Out_seegras/>, <Out_shoe/>, <Out_stones/>, <One_bett/>, <One_shoe/>, <One_stuhl/>, <One_tisch/>, <Two_bild/>, <Two_fass/>, <Two_knochen/>, <Two_kommode/>, <Two_koralle_green/>, <Two_koralle_pink/>, <Two_pflanzen/>, <Two_schatzkiste/>, <Two_schrank/>, <Two_stuhl/>, <Two_tisch/>];
                break;
            case 9:
            case 10:
            case 11:
            case 12:
                defaultelements = [<One_bett/>, <One_shoe/>, <One_stuhl/>, <One_tisch/>, <Two_bild/>, <Two_fass/>, <Two_knochen/>, <Two_kommode/>, <Two_koralle_green/>, <Two_koralle_pink/>, <Two_pflanzen/>, <Two_schatzkiste/>, <Two_schrank/>, <Two_stuhl/>, <Two_tisch/>];
                break;

            //second floor room one
            case 13:
            case 14:
            case 15:
            case 16:
                defaultelements = [<One_bett/>, <One_shoe/>, <One_stuhl/>, <One_tisch/>, <Two_bild/>, <Two_fass/>, <Two_knochen/>, <Two_kommode/>, <Two_koralle_green/>, <Two_koralle_pink/>, <Two_pflanzen/>, <Two_schatzkiste/>, <Two_schrank/>, <Two_stuhl/>, <Two_tisch/>, <Top_knochen/>, <Top_koralle/>, <Three_bett/>, <Three_fass/>, <Three_geschirr/>, <Three_kerze/>, <Three_kommode/>, <Three_schatzkiste/>, <Three_schrank/>, <Three_stuhl/>, <Three_tisch/>];
                break;

            //knochen outside
            case 17:
                defaultelements = [<Top_knochen/>, <Top_koralle/>, <Two_bild/>, <Two_fass/>, <Two_knochen/>, <Two_kommode/>, <Two_koralle_green/>, <Two_koralle_pink/>, <Two_pflanzen/>, <Two_schatzkiste/>, <Two_schrank/>, <Two_stuhl/>, <Two_tisch/>, <Three_bett/>, <Three_fass/>, <Three_geschirr/>, <Three_kerze/>, <Three_kommode/>, <Three_schatzkiste/>, <Three_schrank/>, <Three_stuhl/>, <Three_tisch/>];
                break;

            //second floor room two
            case 18:
            case 19:
            case 20:
                defaultelements = [<Three_bett/>, <Three_fass/>, <Three_geschirr/>, <Three_kerze/>, <Three_kommode/>, <Three_schatzkiste/>, <Three_schrank/>, <Three_stuhl/>, <Three_tisch/>];
                break;
            case 21:
                defaultelements = [<Top_knochen/>, <Top_koralle/>, <Two_bild/>, <Two_fass/>, <Two_knochen/>, <Two_kommode/>, <Two_koralle_green/>, <Two_koralle_pink/>, <Two_pflanzen/>, <Two_schatzkiste/>, <Two_schrank/>, <Two_stuhl/>, <Two_tisch/>, <Three_bett/>, <Three_fass/>, <Three_geschirr/>, <Three_kerze/>, <Three_kommode/>, <Three_schatzkiste/>, <Three_schrank/>, <Three_stuhl/>, <Three_tisch/>];
                break;

            //outside
            case 22:
                defaultelements = [<Top_knochen/>, <Top_koralle/>, <Two_bild/>, <Two_fass/>, <Two_knochen/>, <Two_kommode/>, <Two_koralle_green/>, <Two_koralle_pink/>, <Two_pflanzen/>, <Two_schatzkiste/>, <Two_schrank/>, <Two_stuhl/>, <Two_tisch/>];
                break;
            case 23:
            case 24:
                defaultelements = [<Top_knochen/>, <Top_koralle/>];
                break;
            case 25:
                defaultelements = [<Top_knochen/>, <Top_koralle/>, <Out_fass/>, <Out_geschirr/>, <Out_koralle_green/>, <Out_koralle_big/>, <Out_koralle_lila/>, <Out_koralle_pink/>, <Out_koralle_rot/>, <Out_pflanzen/>, <Out_schatzkiste/>, <Out_seegras/>, <Out_shoe/>, <Out_stones/>];
                break;

            //the end
            case 26:
                defaultelements = [<One_bett/>, <One_shoe/>, <One_stuhl/>, <One_tisch/>, <Out_fass/>, <Out_geschirr/>, <Out_koralle_green/>, <Out_koralle_big/>, <Out_koralle_lila/>, <Out_koralle_pink/>, <Out_koralle_rot/>, <Out_pflanzen/>, <Out_schatzkiste/>, <Out_seegras/>, <Out_shoe/>, <Out_stones/>];
                break;
        }

        return (
            <View>
                <DirectionalLight intensity={0.4}/>
                <AmbientLight intensity={0.3}/>

                <Ship/>
                <Terrain/>

                {elements}
                {defaultelements}
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
    translationZ = new Animated.Value(5);
    scale = new Animated.Value(1);

    booli = false;

    render() {
        if (this.props.isWatched == true && this.props.station == 8) {
            this.rotation.setValue(0);
            this.translationX.setValue(0);
            this.translationY.setValue(0);
            this.translationZ.setValue(5);
            this.scale.setValue(1);

            Animated.timing(this.rotation, {toValue: 300, duration: 20000}).start();
            Animated.timing(this.translationX, {toValue: -5, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: -5, duration: 3000}).start();
            Animated.timing(this.translationZ, {toValue: -4, duration: 5000}).start();
            Animated.timing(this.scale, {toValue: 0.3, duration: 3000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 8 && this.booli) {
            Animated.timing(this.rotation, {toValue: 0, duration: 5000}).start();
            Animated.timing(this.translationX, {toValue: 0, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 0, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 5, duration: 5000}).start();
            Animated.timing(this.scale, {toValue: 1, duration: 4000}).start();
            this.booli = false;
        }

        return (
            <AnimatedEntity style={[{
                transform: [
                    {rotateZ: 90},
                    {translateX: this.translationX},
                    {translateY: this.translationY},
                    {translateZ: this.translationZ},
                    {translate: t_bild_plankenwart},
                    {rotateY: 10},
                    {rotateX: this.rotation},
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

            this.rotation.setValue(0);
            this.translationX.setValue(0);
            this.translationY.setValue(0);
            this.translationZ.setValue(0);

            Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
            Animated.timing(this.translationX, {toValue: 13, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 5, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: -10, duration: 5000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 13 && this.booli) {
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

            this.rotation.setValue(0);
            this.translationX.setValue(0);
            this.translationY.setValue(0);
            this.translationZ.setValue(0);

            Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
            Animated.timing(this.translationX, {toValue: 15, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 18, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: -2, duration: 5000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 14 && this.booli) {
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
            this.rotation.setValue(0);
            this.translationX.setValue(0);
            this.translationY.setValue(0);
            this.translationZ.setValue(0);

            Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
            Animated.timing(this.translationX, {toValue: -4, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 26, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 15, duration: 5000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 15 && this.booli) {
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
            this.rotation.setValue(0);
            this.translationX.setValue(0);
            this.translationY.setValue(0);
            this.translationZ.setValue(0);

            Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
            Animated.timing(this.translationX, {toValue: 4, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 26, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 2, duration: 5000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 16 && this.booli) {
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
            this.rotation.setValue(0);
            this.translationX.setValue(0);
            this.translationY.setValue(0);
            this.translationZ.setValue(0);

            Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
            Animated.timing(this.translationX, {toValue: 2, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 30, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 2, duration: 5000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 17 && this.booli) {
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
            this.rotation.setValue(0);
            this.translationX.setValue(0);
            this.translationY.setValue(0);
            this.translationZ.setValue(0);

            Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
            Animated.timing(this.translationX, {toValue: -5, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: -22, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: -30, duration: 5000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 18 && this.booli) {
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

            this.rotation.setValue(0);
            this.translationX.setValue(0);
            this.translationY.setValue(0);
            this.translationZ.setValue(0);

            Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
            Animated.timing(this.translationX, {toValue: -4, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: -6, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: -8, duration: 5000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 19 && this.booli) {
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
            this.rotation.setValue(0);
            this.translationX.setValue(0);
            this.translationY.setValue(0);
            this.translationZ.setValue(0);

            Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
            Animated.timing(this.translationX, {toValue: -4, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 16, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 2, duration: 5000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 20 && this.booli) {
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
            this.rotation.setValue(0);
            this.translationX.setValue(0);
            this.translationY.setValue(0);
            this.translationZ.setValue(0);

            Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
            Animated.timing(this.translationX, {toValue: 4, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 11, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 0, duration: 5000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 21 && this.booli) {
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
            this.rotation.setValue(0);
            this.translationX.setValue(0);
            this.translationY.setValue(0);
            this.translationZ.setValue(0);

            Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
            Animated.timing(this.translationX, {toValue: 2, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 10, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: -2, duration: 5000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 22 && this.booli) {
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
            this.rotation.setValue(0);
            this.translationX.setValue(0);
            this.translationY.setValue(0);
            this.translationZ.setValue(0);

            Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
            Animated.timing(this.translationX, {toValue: 4, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 50, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 5, duration: 5000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 23 && this.booli) {
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
    scale = new Animated.Value(1);

    booli = false;

    render() {
        if (this.props.isWatched == true && this.props.station == 24) {
            this.rotation.setValue(0);
            this.translationX.setValue(0);
            this.translationY.setValue(0);
            this.translationZ.setValue(0);
            this.scale.setValue(1);

            Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
            Animated.timing(this.translationX, {toValue: 13, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 68, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: -5, duration: 5000}).start();
            Animated.timing(this.scale, {toValue: 0.5, duration: 5000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 24 && this.booli) {
            Animated.timing(this.rotation, {toValue: 0, duration: 5000}).start();
            Animated.timing(this.translationX, {toValue: 0, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 0, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: 0, duration: 5000}).start();
            Animated.timing(this.scale, {toValue: 1, duration: 5000}).start();
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
                    {scale: this.scale},
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
            this.rotation.setValue(0);
            this.translationX.setValue(0);
            this.translationY.setValue(0);
            this.translationZ.setValue(0);

            Animated.timing(this.rotation, {toValue: 360, duration: 20000}).start();
            Animated.timing(this.translationX, {toValue: 19, duration: 5000}).start();
            Animated.timing(this.translationY, {toValue: 18, duration: 5000}).start();
            Animated.timing(this.translationZ, {toValue: -2, duration: 5000}).start();
            this.booli = true;

        } else if (this.props.isWatched == false && this.props.station == 25 && this.booli) {
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Out_fass extends React.Component {
    render() {
        return (
            <Entity style={styles.brown} source={{obj: asset('scene/outside_fass.obj')}} lit={true}/>
        );
    }
}
class Out_geschirr extends React.Component {
    render() {
        return (
            <Entity style={styles.white} source={{obj: asset('scene/outside_geschirr.obj')}} lit={true}/>
        );
    }
}
class Out_koralle_green extends React.Component {
    render() {
        return (
            <Entity style={styles.lightgreen} source={{obj: asset('scene/outside_koralle_green.obj')}} lit={true}/>
        );
    }
}
class Out_koralle_big extends React.Component {
    render() {
        return (
            <Entity style={styles.sand} source={{obj: asset('scene/outside_koralle_groß.obj')}} lit={true}/>
        );
    }
}
class Out_koralle_lila extends React.Component {
    render() {
        return (
            <Entity style={styles.purple} source={{obj: asset('scene/outside_koralle_lila.obj')}} lit={true}/>
        );
    }
}
class Out_koralle_pink extends React.Component {
    render() {
        return (
            <Entity style={styles.pink} source={{obj: asset('scene/outside_koralle_pink.obj')}} lit={true}/>
        );
    }
}
class Out_koralle_rot extends React.Component {
    render() {
        return (
            <Entity style={styles.red} source={{obj: asset('scene/outside_koralle_rot.obj')}} lit={true}/>
        );
    }
}
class Out_pflanzen extends React.Component {
    render() {
        return (
            <Entity style={styles.green} source={{obj: asset('scene/outside_pflanzen.obj')}} lit={true}/>
        );
    }
}
class Out_schatzkiste extends React.Component {
    render() {
        return (
            <Entity style={styles.brown} source={{obj: asset('scene/outside_schatzkiste.obj')}} lit={true}/>
        );
    }
}
class Out_seegras extends React.Component {
    render() {
        return (
            <Entity style={styles.green} source={{obj: asset('scene/outside_seegras.obj')}} lit={true}/>
        );
    }
}
class Out_shoe extends React.Component {
    render() {
        return (
            <Entity style={styles.black} source={{obj: asset('scene/outside_shoe.obj')}} lit={true}/>
        );
    }
}
class Out_stones extends React.Component {
    render() {
        return (
            <Entity style={styles.grey} source={{obj: asset('scene/outside_stones.obj')}} lit={true}/>
        );
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class One_bett extends React.Component {
    render() {
        return (
            <Entity style={styles.brown} source={{obj: asset('scene/one_bett.obj')}} lit={true}/>
        );
    }
}
class One_shoe extends React.Component {
    render() {
        return (
            <Entity style={styles.black} source={{obj: asset('scene/one_shoe.obj')}} lit={true}/>
        );
    }
}
class One_stuhl extends React.Component {
    render() {
        return (
            <Entity style={styles.brown} source={{obj: asset('scene/one_stuhl.obj')}} lit={true}/>
        );
    }
}
class One_tisch extends React.Component {
    render() {
        return (
            <Entity style={styles.brown} source={{obj: asset('scene/one_tisch.obj')}} lit={true}/>
        );
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Two_bild extends React.Component {
    render() {
        return (
            <Entity style={styles.brown} source={{obj: asset('scene/two_bild.obj')}} lit={true}/>
        );
    }
}
class Two_fass extends React.Component {
    render() {
        return (
            <Entity style={styles.brown} source={{obj: asset('scene/two_fass.obj')}} lit={true}/>
        );
    }
}
class Two_knochen extends React.Component {
    render() {
        return (
            <Entity style={styles.white} source={{obj: asset('scene/two_knochen.obj')}} lit={true}/>
        );
    }
}
class Two_kommode extends React.Component {
    render() {
        return (
            <Entity style={styles.brown} source={{obj: asset('scene/two_kommode.obj')}} lit={true}/>
        );
    }
}
class Two_koralle_green extends React.Component {
    render() {
        return (
            <Entity style={styles.lightgreen} source={{obj: asset('scene/two_koralle_green.obj')}} lit={true}/>
        );
    }
}
class Two_koralle_pink extends React.Component {
    render() {
        return (
            <Entity style={styles.pink} source={{obj: asset('scene/two_koralle_pink.obj')}} lit={true}/>
        );
    }
}
class Two_pflanzen extends React.Component {
    render() {
        return (
            <Entity style={styles.green} source={{obj: asset('scene/two_pflanzen.obj')}} lit={true}/>
        );
    }
}
class Two_schatzkiste extends React.Component {
    render() {
        return (
            <Entity style={styles.brown} source={{obj: asset('scene/two_schatzkiste.obj')}} lit={true}/>
        );
    }
}
class Two_schrank extends React.Component {
    render() {
        return (
            <Entity style={styles.brown} source={{obj: asset('scene/two_schrank.obj')}} lit={true}/>
        );
    }
}
class Two_stuhl extends React.Component {
    render() {
        return (
            <Entity style={styles.brown} source={{obj: asset('scene/two_stuhl.obj')}} lit={true}/>
        );
    }
}
class Two_tisch extends React.Component {
    render() {
        return (
            <Entity style={styles.brown} source={{obj: asset('scene/two_tisch.obj')}} lit={true}/>
        );
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Three_bett extends React.Component {
    render() {
        return (
            <Entity style={styles.brown} source={{obj: asset('scene/three_bett.obj')}} lit={true}/>
        );
    }
}
class Three_fass extends React.Component {
    render() {
        return (
            <Entity style={styles.brown} source={{obj: asset('scene/three_fass.obj')}} lit={true}/>
        );
    }
}
class Three_geschirr extends React.Component {
    render() {
        return (
            <Entity style={styles.white} source={{obj: asset('scene/three_geschirr.obj')}} lit={true}/>
        );
    }
}
class Three_kerze extends React.Component {
    render() {
        return (
            <Entity style={styles.white} source={{obj: asset('scene/three_kerze.obj')}} lit={true}/>
        );
    }
}
class Three_kommode extends React.Component {
    render() {
        return (
            <Entity style={styles.brown} source={{obj: asset('scene/three_kommode.obj')}} lit={true}/>
        );
    }
}
class Three_schatzkiste extends React.Component {
    render() {
        return (
            <Entity style={styles.brown} source={{obj: asset('scene/three_bett.obj')}} lit={true}/>
        );
    }
}
class Three_schrank extends React.Component {
    render() {
        return (
            <Entity style={styles.brown} source={{obj: asset('scene/three_schrank.obj')}} lit={true}/>
        );
    }
}
class Three_stuhl extends React.Component {
    render() {
        return (
            <Entity style={styles.brown} source={{obj: asset('scene/three_stuhl.obj')}} lit={true}/>
        );
    }
}
class Three_tisch extends React.Component {
    render() {
        return (
            <Entity style={styles.brown} source={{obj: asset('scene/three_tisch.obj')}} lit={true}/>
        );
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Top_knochen extends React.Component {
    render() {
        return (
            <Entity style={styles.white} source={{obj: asset('scene/top_knochen.obj')}} lit={true}/>
        );
    }
}
class Top_koralle extends React.Component {
    render() {
        return (
            <Entity style={styles.red} source={{obj: asset('scene/top_koralle_rot.obj')}} lit={true}/>
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
        color: '#a76261',
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