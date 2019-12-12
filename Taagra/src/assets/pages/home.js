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
            <ScrollView style={{ backgroundColor: "#c2b280" }}>
                <StatusBar barStyle="dark-content" backgroundColor='rgba(207, 102, 16, 0.0)' translucent={true} />
                <View style={{ marginTop: 50 }}>
                    <Text>Taagra</Text>
                </View>
                <Button
                    title="Dictionary"
                    onPress={() => this.props.navigation.navigate('Dictionary')}
                />
            </ScrollView>
        );
    }
}

export default Home;