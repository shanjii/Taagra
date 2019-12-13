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
                <StatusBar barStyle="dark-content" backgroundColor='rgba(207, 102, 16, 0.0)' translucent={true} />
                <ImageBackground source={require('../media/pagebg.jpg')} style={{ width: "100%" }}>
                    <View style={{ alignSelf: 'center', marginTop: 50, marginBottom: 30 }}>
                        <Image source={require('../media/homebig.png')} />
                    </View>
                    <View style={{flexDirection: "row", alignSelf: "center", marginBottom: 10}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Dictionary')}>
                            <Image source={require('../media/dictionary.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Translate')}>
                            <Image source={require('../media/translator.png')} />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                <Image style={{ position: 'relative', left: -12 }} source={require('../media/footer.png')} />
                <ImageBackground source={require('../media/mainbg.jpg')} style={{ width: "100%" }}>
                    <View style={{ marginTop: 10 }}>
                        <Text>Taagra</Text>
                    </View>
                </ImageBackground>
                <Image style={{ position: 'relative', left: -12 }} source={require('../media/footer.png')} />
            </ScrollView>
        );
    }
}

export default Home;