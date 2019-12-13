import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, StatusBar, Header, Image, ScrollView, Dimensions, TouchableWithoutFeedback, TouchableOpacity, ActivityIndicator, ImageBackground } from 'react-native';
import dictionary from '../dictionary/dictionary.json'
import { TextInput } from 'react-native-gesture-handler';

let start;
let end;

class Translate extends Component {

    static navigationOptions = {
        header: null
    }


    constructor() {
        super();
        this.state = {
            loading: 0,
            text: '',
            return: ''
        }
    }

    _translate = () => {
        this.setState({return: ''})
        let text = this.state.text.toLowerCase()
        dictionary.forEach(element => {
            if(element.ENGLISH === text){
                this.setState({return: element.TAAGRA})
            }
        });
    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: "black" }}>
                <StatusBar barStyle="dark-content" backgroundColor='rgba(207, 102, 16, 0.0)' translucent={true} />
                <ImageBackground source={require('../media/pagebg.jpg')} style={{ width: "100%" }}>
                    <View style={{ alignSelf: 'center', marginTop: 50, marginBottom: 50 }}>
                        <Image source={require('../media/translatorbig.png')} />
                    </View>
                </ImageBackground>
                <Image style={{ position: 'relative', left: -12 }} source={require('../media/footer.png')} />
                <ImageBackground source={require('../media/mainbg.jpg')} style={{ width: "100%" }}>
                    <View style={{ marginTop: 10, marginBottom: 10, marginLeft: 50, marginRight: 50 }}>
                        <Text>Result in Ta'agra</Text>
                        <Text style={{ backgroundColor: '#bf9b7a', textAlign: "center", fontSize: 30, borderColor: '#a67a53', borderWidth: 2, marginBottom: 10 }}>
                            {this.state.return}
                        </Text>
                        <Text>Type the word here</Text>
                        <TextInput
                            onChangeText={(text) => this.setState({ text })}
                            style={{ backgroundColor: '#bf9b7a', fontSize: 20, borderColor: '#a67a53', borderWidth: 2, marginBottom: 10 }} />
                        <Button
                            title="Next"
                            onPress={() => this._translate()}
                        />
                    </View>
                </ImageBackground>
                <Image style={{ position: 'relative', left: -12 }} source={require('../media/footer.png')} />
            </ScrollView>
        );
    }
}

export default Translate;