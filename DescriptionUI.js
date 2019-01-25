import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    NativeModules,
    asset,
} from 'react-360';

import GazeButton from "react-360-gaze-button";
import {connect, setWatched} from './ClickManager';

const {MyModule} = NativeModules;
const {AudioModule} = NativeModules;


class DescriptionUI extends React.Component {
    render() {
        switch (this.props.station) {
            case 0:
                return null;
            case 1:
                if(this.props.isWatched)
                    return (
                        <View style={styles.panel}>
                            <UI isWatched={this.props.isWatched}/>
                            <View>
                                <Text style={[{fontSize: 38}, styles.text]}>
                                    Koralle
                                </Text>
                                <Text style={[{fontSize: 26}, styles.text]}>
                                    Korallen können ein bemerkenswertes Alter erreichen!{"\n"}
                                    Diese hier existiert schon seit mehreren tausend Jahren{"\n"}
                                    und hat keine Absicht vor ihrer Pension{"\n"}
                                    in die ewigen Jagdgründe einzugehen,{"\n"}
                                    also trage deine toxische Sonnencreme anderswo{"\n"}
                                    und schwimm weiter Matrose!
                                </Text>
                            </View>
                        </View>
                    );
            case 2:
                if(this.props.isWatched)
                    return (
                        <View style={styles.panel}>
                            <UI isWatched={this.props.isWatched}/>
                            <View>
                                <Text style={[{fontSize: 38}, styles.text]}>
                                    Fass
                                </Text>
                                <Text style={[{fontSize: 26}, styles.text]}>
                                    Dieser Gegenstand, im gemeinen Volk ‘Fass’ genannt,{"\n"}
                                    wurde in Piratenlingo oft als “Shotglas” bezeichnet.{"\n"}
                                    Fässer dienten den Piraten mit ihrem vielseitigen Nutzen.{"\n"}
                                    Hier wurde nicht nur Trank und Trockenfleisch gelagert,{"\n"}
                                    sondern auch schlafende Piraten wenn zu wenig Platz an Bord war.
                                </Text>
                            </View>
                        </View>
                    );
            case 3:
                if(this.props.isWatched)
                    return (
                        <View style={styles.panel}>
                            <UI isWatched={this.props.isWatched}/>
                            <View>
                                <Text style={[{fontSize: 38}, styles.text]}>
                                    Schatztruhe
                                </Text>
                                <Text style={[{fontSize: 26}, styles.text]}>
                                    Captain Anemie erbte als alleinige Tochter des Piraten Reling{"\n"}
                                    all seine bereits verspielten Reichtümer.{"\n"}
                                    Nur das Schiff und alle Schatzkisten blieben übrig,{"\n"}
                                    welche Anemie als praktikablen Stauraum nutzte.
                                </Text>
                            </View>
                        </View>
                    );
            case 4:
                if(this.props.isWatched)
                    return (
                        <View style={styles.panel}>
                            <UI isWatched={this.props.isWatched}/>
                            <View>
                                <Text style={[{fontSize: 38}, styles.text]}>
                                    Humpen
                                </Text>
                                <Text style={[{fontSize: 26}, styles.text]}>
                                    Das wohl gängigste Werkzeug in der Haken-Familie.{"\n"}
                                    Da Piraten ständig tranken, bat er eine komfortable Option.{"\n"}
                                    Der Humpen wurde zusätzlich vom Schiffskoch verwendet{"\n"}
                                    um Trockenfleisch noch trockener zu klopfen.{"\n"}
                                    Ein guter Schiffskoch war in der Lage ein Stück Trockenfleisch{"\n"}
                                    vollständig zu Staub klopfen. Sollte dies geschehen,{"\n"}
                                    wurde er umgehend bei der nächsten Malzeit hochgepriesen,{"\n"}
                                    da man zum essen nicht den Haken wechseln musste,{"\n"}
                                    sondern den Fleischstaub einfach zum Rum in den Humpen lehren konnte.
                                </Text>
                            </View>
                        </View>
                    );
            case 5:
                if(this.props.isWatched)
                    return (
                        <View style={styles.panel}>
                            <UI isWatched={this.props.isWatched}/>
                            <View>
                                <Text style={[{fontSize: 38}, styles.text]}>
                                    Shrimp mit Hut
                                </Text>
                                <Text style={[{fontSize: 26}, styles.text]}>
                                    Shrimp mit Hut - Öl auf trockener Leinwand (verm. 1643){"\n"}
                                    {"\n"}
                                    Mysteriöses Gemälde einer wohlbekannten Gaumenfreude{"\n"}
                                    mit frivoler Kopfbedeckung.{"\n"}
                                    Geschenk von Plankenwart dem 13. zur ersten Kaperfahrt.
                                </Text>
                            </View>
                        </View>
                    );
            case 6:
                if(this.props.isWatched)
                    return (
                        <View style={styles.panel}>
                            <UI isWatched={this.props.isWatched}/>
                            <View>
                                <Text style={[{fontSize: 38}, styles.text]}>
                                    Schlafplätze
                                </Text>
                                <Text style={[{fontSize: 26}, styles.text]}>
                                    Die Schlafplätze boten großes Konfliktpotential an Bord,{"\n"}
                                    da viele Piraten es bevorzugten das obere Bett zu bewohnen.{"\n"}
                                    Damit es zu keinen regelmäßigen Schlägereien kam,{"\n"}
                                    wurden jedes Monat die Schlafplätze durch Losziehen neu vergeben.{"\n"}
                                    Dies führte jedoch oft dazu, dass sich Läuse und Krankheiten schnell verbreiteten.
                                </Text>
                            </View>
                        </View>
                    );
            case 7:
                if(this.props.isWatched)
                    return (
                        <View style={styles.panel}>
                            <UI isWatched={this.props.isWatched}/>
                            <View>
                                <Text style={[{fontSize: 38}, styles.text]}>
                                    Schuh
                                </Text>
                                <Text style={[{fontSize: 26}, styles.text]}>
                                    Ein Designer Schuh eines französischen Gefangenen.
                                </Text>
                            </View>
                        </View>
                    );
            case 8:
                if(this.props.isWatched)
                    return (
                        <View style={styles.panel}>
                            <UI isWatched={this.props.isWatched}/>
                            <View>
                                <Text style={[{fontSize: 38}, styles.text]}>
                                    Plankenwart der 13. Piratenkönig
                                </Text>
                                <Text style={[{fontSize: 26}, styles.text]}>
                                    Ein Bildnis des amtierenden Piratenkönigs
                                </Text>
                            </View>
                        </View>
                    );
            case 9:
                if(this.props.isWatched)
                    return (
                        <View style={styles.panel}>
                            <UI isWatched={this.props.isWatched}/>
                            <View>
                                <Text style={[{fontSize: 38}, styles.text]}>
                                    Zeitungsartikel: Die Seemöve 19. August 1732.
                                </Text>
                                <Text style={[{fontSize: 26}, styles.text]}>
                                    Hat es sich ausgeshrimpt?{"\n"}
                                    {"\n"}
                                    Seid nun fast 2 Jahren bleiben die Netze der Shrimp Fischer{"\n"}
                                    nahe Tortugas leer wenn Winter herreinbricht und die{"\n"}
                                    Shrimp Jagdzeit beginnt. Die wenigen die gefangen werden sind erkrankt{"\n"}
                                    und ungenießbar. Aus diversen Quellen heißt es nun,{"\n"}
                                    dass die Shrimp Ernte auch diesen Winter ausfallen soll.{"\n"}
                                    Die Wissenschaftlern des Königs bezeichnen das Phänomen als “Werk Satans”{"\n"}
                                    und schlagen einen umgehenden Aderlass bei den verbliebenden{"\n"}
                                    erkrankten Shrimps im Aquarium des Königs vor,{"\n"}
                                    in der Hoffnung diese zu gesunden und anschließend zu züchten.
                                </Text>
                            </View>
                        </View>
                    );
            case 10:
                if(this.props.isWatched)
                    return (
                        <View style={styles.panel}>
                            <UI isWatched={this.props.isWatched}/>
                            <View>
                                <Text style={[{fontSize: 38}, styles.text]}>
                                    Shrimp Statue
                                </Text>
                                <Text style={[{fontSize: 26}, styles.text]}>
                                    Eine in Stein verewigte Schönheit. Erbeutet 1729.
                                </Text>
                            </View>
                        </View>
                    );
            case 11:
                if(this.props.isWatched)
                    return (
                        <View style={styles.panel}>
                            <UI isWatched={this.props.isWatched}/>
                            <View>
                                <Text style={[{fontSize: 38}, styles.text]}>
                                    Der gemeine Haken
                                </Text>
                                <Text style={[{fontSize: 26}, styles.text]}>
                                    Der gemeine Haken war, obwohl das wohl stereotypischste{"\n"}
                                    Zeichen der Piraterie, ein relativ unbeliebtes Werkzeug,{"\n"}
                                    da man damit weder Rum trinken, noch Kameraden verprügeln konnte.
                                </Text>
                            </View>
                        </View>
                    );
            case 12:
                if(this.props.isWatched)
                    return (
                        <View style={styles.panel}>
                            <UI isWatched={this.props.isWatched}/>
                            <View>
                                <Text style={[{fontSize: 38}, styles.text]}>
                                    Wellness Broschüre
                                </Text>
                                <Text style={[{fontSize: 26}, styles.text]}>
                                    Ahoi Kameraden!{"\n"}
                                    {"\n"}
                                    Gönnen Sie sich eine Pause von Cholera und billigem Rum{"\n"}
                                    und kommen Sie an Bord der Wellennässe!{"\n"}
                                    Unsere Exklusive Erholungskur auf hoher See bietet Ihnen{"\n"}
                                    eine Zwei Wöchige Pause von dem Piratentreiben{"\n"}
                                    und lässt sie erfrischt in den Arbeitsalltag zurückkehren.{"\n"}
                                    Wir bieten Ihnen authentische Schlaf Bretter aus Eichenholz,{"\n"}
                                    ausgewählte Kurse um Ihre Piraterie zu verbessern{"\n"}
                                    und einen Wellnessbereich mit exklusiver Rum Badewanne.{"\n"}
                                    {"\n"}
                                    Unser mit drei Enterhaken ausgezeichneter Schiffskoch{"\n"}
                                    bereitet jeden zweiten Sonnenuntergang Algengulasch{"\n"}
                                    und jeden Morgen Staubiges Trockenfleisch für Sie zu.{"\n"}
                                    {"\n"}
                                    Inkludiert sind:{"\n"}
                                    1x Zahnvergoldung{"\n"}
                                    1x Holzbein polieren (auch andere hölzerne Prothesen werden akzeptiert) {"\n"}
                                    5x Seemanslied nach Wahl{"\n"}
                                    2x Bartflechten{"\n"}
                                    1x Enterhaken werfen für Anfänger (Kurs){"\n"}
                                    1x Reden ohne Zähne (Kurs){"\n"}
                                    {"\n"}
                                    Wir freuen uns auf Sie!{"\n"}
                                    Ihr Wellenässe Team.
                                </Text>
                            </View>
                        </View>
                    );
            default:
                return null;
        }
    }
}


class UI extends React.Component {
    state = {
        gazed: false,
        opacity: 0,
        id: null
    };


    setGazed = () => {
        if(this.props.isWatched == true){
            setWatched(false);
        }

        MyModule.openTeleport();
        MyModule.openWatchButton();
        AudioModule.playOneShot({
            source: asset('click2.mp3'),
        });

    };

    componentWillUnmount() {
        clearInterval(this.state.id);
        this.setState({opacity: 0});
        MyModule.closeDescription();

        setWatched(false);
    }

    render() {

        const {gazed} = this.state;
        return (
            <GazeButton
                duration={2000}
                onClick={() => {
                    this.setGazed();
                    //this.props.onClick();
                }}
                onEnter={()=>{
                    this.setState({
                        id: setInterval(()=> {
                            this.setState({opacity: this.state.opacity + 0.05})
                    }, 100)})
                }}
                onExit={()=>{
                    clearInterval(this.state.id);
                    this.setState({opacity: 0});

                }}
                render={(remainingTime, isGazed) => (
                    <View style={{backgroundColor: 'rgba(255, 255, 255, ' + this.state.opacity  + ')',
                        width: 50,
                        height: 50,
                        borderColor: '#5e5e5e',
                        borderWidth: 2,
                        alignSelf: 'flex-end'
                    }}>
                        <Text style={styles.greeting}>
                            X
                        </Text>
                    </View>
                )}
            />
        )
    };
}


const styles = StyleSheet.create({
    panel: {
        // Fill the entire surface
        width: 900,
        height: 700,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        //justifyContent: 'center',
        alignItems: 'stretch',
    },
    greetingBox: {
        width: 50,
        height: 50,
        borderColor: '#000000',
        borderWidth: 2,
    },
    greeting: {
        fontSize: 30,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    exitButton: {
        justifyContent: 'center'
    },
    text: {
        padding: 15,
        alignSelf: 'center'
    }
});

const ConnectedDescriptionUI = connect(DescriptionUI);

export default ConnectedDescriptionUI;