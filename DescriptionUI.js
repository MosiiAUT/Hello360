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
                                Aus der Gedichtsammlung von Plankenwart dem 13. Piratenkönig.
                                Eine Liebe in Rosa
                            </Text>
                            <Text style={[{fontSize: 26}, styles.text]}>
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
                                Ach Shrimps wo seid ihr nur geblieben?{"\n"}
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
                                    Aus der Gedichtsammlung von Plankenwart dem 13. Piratenkönig.
                                    Eine Liebe in Rosa
                                </Text>
                                <Text style={[{fontSize: 26}, styles.text]}>
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
                                    Ach Shrimps wo seid ihr nur geblieben?{"\n"}
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

        //this.setState({gazed: true,});
    };

    componentDidMount() {
        console.log("hello yellow");
    }

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
        alignItems: 'flex-end',
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
        padding: 15
    }
});

const ConnectedDescriptionUI = connect(DescriptionUI);

export default ConnectedDescriptionUI;