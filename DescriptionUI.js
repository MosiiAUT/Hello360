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
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
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