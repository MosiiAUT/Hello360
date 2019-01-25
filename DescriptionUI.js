import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    NativeModules,
    Animated,
} from 'react-360';

import GazeButton from "react-360-gaze-button";
import {connect, setWatched} from './ClickManager';

const {MyModule} = NativeModules;


class DescriptionUI extends React.Component {
    render() {
        switch (this.props.station) {
            case 0:
                if(this.props.isWatched)
                return (
                    <View style={styles.panel}>
                        <UI isWatched={this.props.isWatched}/>
                        <View>
                            <Text style={[{fontSize: 38}, styles.text]}>
                                Koralle
                            </Text>
                            <Text style={[{fontSize: 26}, styles.text]}>
                                Korallen können ein bemerkenswertes Alter erreichen! {"\n"}
                                Diese hier existiert schon seit mehreren tausend Jahren {"\n"}
                                und hat keine Absicht vor ihrer Pension {"\n"}
                                in die ewigen Jagdgründe einzugehen, {"\n"}
                                also trage deine toxische Sonnencreme anderswo {"\n"}
                                und schwimm weiter Matrose!
                            </Text>
                        </View>
                    </View>
                );
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
                                    Korallen können ein bemerkenswertes Alter erreichen! {"\n"}
                                    Diese hier existiert schon seit mehreren tausend Jahren {"\n"}
                                    und hat keine Absicht vor ihrer Pension {"\n"}
                                    in die ewigen Jagdgründe einzugehen, {"\n"}
                                    also trage deine toxische Sonnencreme anderswo {"\n"}
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
                                    Dieser Gegenstand, im gemeinen Volk ‘Fass’ genannt, {"\n"}
                                    wurde in Piratenlingo oft als “Shotglas” bezeichnet. {"\n"}
                                    Fässer dienten den Piraten mit ihrem vielseitigen Nutzen. {"\n"}
                                    Hier wurde nicht nur Trank und Trockenfleisch gelagert, {"\n"}
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
                                    Captain Anemie erbte als alleinige Tochter des Piraten Reling {"\n"}
                                    all seine bereits verspielten Reichtümer. {"\n"}
                                    Nur das Schiff und alle Schatzkisten blieben übrig, {"\n"}
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
                                    Das wohl gängigste Werkzeug in der Haken-Familie. {"\n"}Da Piraten ständig tranken, bat er eine komfortable Option. {"\n"}
                                    Der Humpen wurde zusätzlich vom Schiffskoch verwendet {"\n"}
                                    um Trockenfleisch noch trockener zu klopfen.{"\n"}
                                    Ein guter Schiffskoch war in der Lage ein Stück Trockenfleisch {"\n"}
                                    vollständig zu Staub klopfen. Sollte dies geschehen, {"\n"}
                                    wurde er umgehend bei der nächsten Malzeit hochgepriesen, {"\n"}
                                    da man zum essen nicht den Haken wechseln musste, {"\n"}
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
                                    Mysteriöses Gemälde einer wohlbekannten Gaumenfreude {"\n"}
                                    mit frivoler Kopfbedeckung. {"\n"}
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
                                    Die Schlafplätze boten großes Konfliktpotential an Bord, {"\n"}
                                    da viele Piraten es bevorzugten das obere Bett zu bewohnen. {"\n"}
                                    Damit es zu keinen regelmäßigen Schlägereien kam, {"\n"}
                                    wurden jedes Monat die Schlafplätze durch Losziehen neu vergeben. {"\n"}
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
                                    nahe Tortugas leer wenn Winter herreinbricht und die {"\n"}
                                    Shrimp Jagdzeit beginnt. Die wenigen die gefangen werden sind erkrankt {"\n"}
                                    und ungenießbar. Aus diversen Quellen heißt es nun, {"\n"}
                                    dass die Shrimp Ernte auch diesen Winter ausfallen soll. {"\n"}
                                    Die Wissenschaftlern des Königs bezeichnen das Phänomen als “Werk Satans” {"\n"}
                                    und schlagen einen umgehenden Aderlass bei den verbliebenden {"\n"}
                                    erkrankten Shrimps im Aquarium des Königs vor, {"\n"}
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
                                    Der gemeine Haken war, obwohl das wohl stereotypischste {"\n"}
                                    Zeichen der Piraterie, ein relativ unbeliebtes Werkzeug, {"\n"}
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
                                    Ahoi Kameraden! {"\n"}
                                    {"\n"}
                                    Gönnen Sie sich eine Pause von Cholera und billigem Rum {"\n"}
                                    und kommen Sie an Bord der Wellennässe!{"\n"}
                                    Unsere Exklusive Erholungskur auf hoher See bietet Ihnen {"\n"}
                                    eine Zwei Wöchige Pause von dem Piratentreiben {"\n"}
                                    und lässt sie erfrischt in den Arbeitsalltag zurückkehren.{"\n"}
                                    Wir bieten Ihnen authentische Schlaf Bretter aus Eichenholz, {"\n"}
                                    ausgewählte Kurse um Ihre Piraterie zu verbessern {"\n"}
                                    und einen Wellnessbereich mit exklusiver Rum Badewanne. {"\n"}
                                    {"\n"}
                                    Unser mit drei Enterhaken ausgezeichneter Schiffskoch {"\n"}
                                    bereitet jeden zweiten Sonnenuntergang Algengulasch {"\n"}
                                    und jeden Morgen Staubiges Trockenfleisch für Sie zu. {"\n"}
                                    {"\n"}
                                    Inkludiert sind:{"\n"}
                                    1x Zahnvergoldung{"\n"}
                                    1x Holzbein polieren (auch andere hölzerne Prothesen werden akzeptiert) {"\n"}
                                    5x Seemanslied nach Wahl {"\n"}
                                    2x Bartflechten {"\n"}
                                    1x Enterhaken werfen für Anfänger (Kurs) {"\n"}
                                    1x Reden ohne Zähne (Kurs) {"\n"}
                                    {"\n"}
                                    Wir freuen uns auf Sie!{"\n"}
                                    Ihr Wellenässe Team.
                                </Text>
                            </View>
                        </View>
                    );
            case 13:
                if(this.props.isWatched)
                    return (
                        <View style={styles.panel}>
                            <UI isWatched={this.props.isWatched}/>
                            <View>
                                <Text style={[{fontSize: 38}, styles.text]}>
                                    Löffler
                                </Text>
                                <Text style={[{fontSize: 26}, styles.text]}>
                                    Dieser Haken wurde unter Piraten der Löffler genannt{"\n"}
                                    und erfreute sich großer Beliebtheit. Mit Gusto wurde{"\n"}
                                    Rum und Pulverisiertes Trockenfleisch damit konsumiert.{"\n"}
                                    Oft auch gemischt als bekömmlicher Brei.{"\n"}
                                    Hierarchisch höher gestellte Piraten hatten dazu{"\n"}
                                    noch einen Gabelhaken. Seltener waren die sogenannten{"\n"}
                                    Sushi Haken, eine Spezialität aus dem Osten,{"\n"}
                                    oder der Trichterhaken, welche gerne bei Festen getragen wurden.
                                </Text>
                            </View>
                        </View>
                    );
            case 14:
                if(this.props.isWatched)
                    return (
                        <View style={styles.panel}>
                            <UI isWatched={this.props.isWatched}/>
                            <View>
                                <Text style={[{fontSize: 38}, styles.text]}>
                                    Oberschenkel-Knochen
                                </Text>
                                <Text style={[{fontSize: 26}, styles.text]}>
                                    Eine DNA Analyse des Oberschenkelknochens ergab folgende{"\n"}
                                    Schlüsse auf die Bestandteile des Ehemaligen Besitzers.{"\n"}
                                    {"\n"}
                                    Keuchhusten 15%{"\n"}
                                    Flöhe 20% (23 Stück){"\n"}
                                    Rum 98 %{"\n"}
                                    Vitamin C Mangel 14 %
                                </Text>
                            </View>
                        </View>
                    );
            case 15:
                if(this.props.isWatched)
                    return (
                        <View style={styles.panel}>
                            <UI isWatched={this.props.isWatched}/>
                            <View>
                                <Text style={[{fontSize: 38}, styles.text]}>
                                    Gedicht aus der Sammelband von Plankenwart{"\n"}
                                    dem 13. Piratenkönig
                                </Text>
                                <Text style={[{fontSize: 26}, styles.text]}>
                                    Eine Liebe in Rosa{"\n"}
                                    Rosa, zart und stets am schwimmen,{"\n"}
                                    Nur du, ach kannst mein Herz gewinnen.{"\n"}
                                    Im Wasser ziehst du deine Runden{"\n"}
                                    In meinem Herzen tiefe Wunden{"\n"}
                                    Deine Schwarzen Äuglein, so tot und doch doch so allerliebst,{"\n"}
                                    Mein Herz wundert wo du nur verbliebst{"\n"}
                                    Seit 5 Jahren schon kein Blick von dir{"\n"}
                                    Du bist wie ausgestorben hier{"\n"}
                                    Ausgestorben wie mein Herz{"\n"}
                                    Am liebsten aß ich dich mit Heidensterz{"\n"}
                                    Auch gegrillt kann ich dich lieben{"\n"}
                                    Ach Shrimps wo seid ihr nur geblieben?
                                </Text>
                            </View>
                        </View>
                    );
            case 16:
                if(this.props.isWatched)
                    return (
                        <View style={styles.panel}>
                            <UI isWatched={this.props.isWatched}/>
                            <View>
                                <Text style={[{fontSize: 38}, styles.text]}>
                                    Laserhaken
                                </Text>
                                <Text style={[{fontSize: 26}, styles.text]}>
                                    Ein Haken unbekannter Herkunft.{"\n"}
                                    Gerüchte munkeln von anderen Welten{"\n"}
                                    und einem furchtlosen galaktischen Piraten
                                </Text>
                            </View>
                        </View>
                    );
            case 17:
                if(this.props.isWatched)
                    return (
                        <View style={styles.panel}>
                            <UI isWatched={this.props.isWatched}/>
                            <View>
                                <Text style={[{fontSize: 38}, styles.text]}>
                                    Zehen-Knochen
                                </Text>
                                <Text style={[{fontSize: 26}, styles.text]}>
                                    Eine DNA Analyse diese Knochen aus dem Kleinen Zeh{"\n"}
                                    ergab folgende Schlüsse auf die Beziehungsstatus{"\n"}
                                    des Ehemaligen Besitzers.{"\n"}
                                    {"\n"}
                                    12 % Es ist Kompliziert{"\n"}
                                    50% Alle Hoffnung kommt zu spät{"\n"}
                                    40% Vermisse meine Frau, die an Cholera gestorben ist
                                </Text>
                            </View>
                        </View>
                    );
            case 18:
                if(this.props.isWatched)
                    return (
                        <View style={styles.panel}>
                            <UI isWatched={this.props.isWatched}/>
                            <View>
                                <Text style={[{fontSize: 38}, styles.text]}>
                                    Augenklappe
                                </Text>
                                <Text style={[{fontSize: 26}, styles.text]}>
                                    Auch wenn beide Ihrer Augen funktionierten, hatte{"\n"}
                                    Captain Anämie doch immer eine Augenklappe in ihren Kammern,{"\n"}
                                    für den Fall, dass sie Adlige auf einem{"\n"}
                                    gekenterten Schiff einschüchtern wollte.
                                </Text>
                            </View>
                        </View>
                    );
            case 19:
                if(this.props.isWatched)
                    return (
                        <View style={styles.panel}>
                            <UI isWatched={this.props.isWatched}/>
                            <View>
                                <Text style={[{fontSize: 38}, styles.text]}>
                                    Hut
                                </Text>
                                <Text style={[{fontSize: 26}, styles.text]}>
                                    Die Kopfbedeckung von Captain Anämie, welche sie{"\n"}
                                    von den Sonnenstrahlen und Gottes zornigen Blicken schützen sollte.
                                </Text>
                            </View>
                        </View>
                    );
            case 20:
                if(this.props.isWatched)
                    return (
                        <View style={styles.panel}>
                            <UI isWatched={this.props.isWatched}/>
                            <View>
                                <Text style={[{fontSize: 38}, styles.text]}>
                                    Tagebucheintrag von Anämie, 27 Jänner 1733.
                                </Text>
                                <Text style={[{fontSize: 26}, styles.text]}>
                                    Liebes Tagebuch,{"\n"}
                                    Heute habe ich meine 30. Lebensjahr erreicht.{"\n"}
                                    Jedoch ist mein Gemüt getrübt, und selbst{"\n"}
                                    nachdem ich mich von meiner Crew hochleben ließ,{"\n"}
                                    kam kein Bestreben nach dem Foltern von Adeligen{"\n"}
                                    zu mir und mein Verlangen nach Rum blieb gestillt.{"\n"}
                                    Mein Verstand ist nimmermüde und ich sehe die Krone{"\n"}
                                    des Piratenkönigs in meiner Hand.{"\n"}
                                    Nichts möchte ich nun mehr verspüren als diese Macht.{"\n"}
                                    Koste es alles was ich besitze,{"\n"}
                                    ich werde als nächstes über unsere Zunft herrschen!
                                </Text>
                            </View>
                        </View>
                    );
            case 21:
                if(this.props.isWatched)
                    return (
                        <View style={styles.panel}>
                            <UI isWatched={this.props.isWatched}/>
                            <View>
                                <Text style={[{fontSize: 38}, styles.text]}>
                                    Snackteller
                                </Text>
                                <Text style={[{fontSize: 26}, styles.text]}>
                                    Ein paar Getrocknete Sardellen helfen den Hirnzellen
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
        //this.setState({gazed: true,});
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
                        borderColor: '#639dda',
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
        borderColor: '#639dda',
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