import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, StatusBar, Header, Image, ScrollView, Dimensions, TouchableWithoutFeedback, TouchableOpacity, ActivityIndicator, ImageBackground } from 'react-native';
import dictionary from '../dictionary/dictionary.json'

let start;
let end;

class Home extends Component {

    static navigationOptions = {
        header: null
    }


    constructor() {
        super();
        this.state = {
            loading: 0,
        }
    }


    render() {
        return (
            <ScrollView style={{ backgroundColor: "black" }}>
                <StatusBar barStyle="light-content" backgroundColor='rgba(207, 102, 16, 0.0)' translucent={true} />
                <ImageBackground source={require('../media/pagebg.jpg')} style={{ width: "100%" }}>
                    <View style={{ alignSelf: 'center', marginTop: 50, marginBottom: 30 }}>
                        <Image source={require('../media/title.png')} />
                    </View>
                    <View style={{ backgroundColor: 'rgba(207, 102, 16, 0.15)' }}>
                        <View style={{ flexDirection: "row", alignSelf: "center", marginBottom: 0 }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Dictionary')}>
                                <Image source={require('../media/dictionary.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Translate')}>
                                <Image source={require('../media/translator.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
                <Image style={{ position: 'relative', left: -12 }} source={require('../media/footer.png')} />
                <ImageBackground source={require('../media/mainbg.jpg')} style={{ width: "100%" }}>
                    <Image style={{ alignSelf: "center", marginTop: 20 }} source={require('../media/homebig.png')} />
                    <View style={{ marginTop: 10, marginLeft: 20, marginRight: 20 }}>
                        <Text style={{ fontSize: 20, textAlign: "center", marginBottom: 20 }}>Welcome to the home of the Ta'agra project. The goal of this project is to build off of the existing pieces of Ta'agra that are available in lore and create a more complete language that can be used by Elder Scrolls fans, roleplayers, fan lore writers, and mod makers. We hope you enjoy what we've created so far!</Text>
                    </View>
                </ImageBackground>
                <Image style={{ position: 'relative', left: -12 }} source={require('../media/footer.png')} />
                <Image source={require('../media/pagebg.jpg')} style={{ width: "100%", height: 100 }} />
            </ScrollView>
        );
    }
}

export default Home;