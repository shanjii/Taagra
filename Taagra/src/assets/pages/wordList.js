import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, StatusBar, Header, Image, ScrollView, Dimensions, TouchableWithoutFeedback, TouchableOpacity, ActivityIndicator, ImageBackground } from 'react-native';
import dictionary from '../dictionary/dictionary.json'
import * as Animatable from 'react-native-animatable'
import { TouchableHighlight } from 'react-native-gesture-handler';

let start;
let end;
let page;

class wordList extends Component {

    static navigationOptions = {
        header: null
    }


    constructor() {
        super();
        this.state = {
            loading: 0,
            data: []
        }
    }


    componentDidMount = () => {
        start = 0;
        end = 20;
        page = 1;
        this.setState({ data: dictionary.slice(start, end) })
    }

    _nextPage = () => {
        if (page != 132) {
            start = end;
            end = end + 20;
            page = page + 1;
            this.setState({ data: dictionary.slice(start, end) })
        }
    }

    _previousPage = () => {
        if (start != 0) {
            start = start - 20;
            end = end - 20;
            this.setState({ data: dictionary.slice(start, end) })
        }
        if (page != 1) {
            page = page - 1
        }
    }





    render() {
        return (
            <ScrollView style={{ backgroundColor: "black" }}>
                <StatusBar barStyle="light-content" backgroundColor='rgba(207, 102, 16, 0.0)' translucent={true} />
                <ImageBackground source={require('../media/pagebg.jpg')} style={{ width: "100%" }}>
                    <View style={{ alignSelf: 'center', marginTop: 50, marginBottom: 50 }}>
                        <Image source={require('../media/dictionarybig.png')} />
                    </View>
                </ImageBackground>
                <Image style={{ position: 'relative', left: -12 }} source={require('../media/footer.png')} />
                <ImageBackground source={require('../media/mainbg.jpg')} style={{ width: '100%' }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 5, marginLeft: 40, marginRight: 40, marginBottom: 10 }}>
                        <Text style={{ fontSize: 30, alignSelf: "center" }}>English</Text>
                        <Text style={{ fontSize: 30, alignSelf: "center" }}>Ta'agra</Text>
                    </View>
                    <View style={{ marginBottom: 2 }}>
                        {this.state.data.map(a => {
                            return (
                                <TouchableOpacity>
                                    <View style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: 'rgba(207, 102, 16, 0.15)', marginLeft: 0, marginBottom: 2, marginRight: 0 }}>
                                        <Text style={{ fontSize: 15, marginLeft: 40 }}>{a.ENGLISH}</Text>
                                        <Text style={{ fontSize: 15, marginRight: 40 }}>{(a.TAAGRA != "") ? (a.TAAGRA) : ('*' + a.NOTES + '*')}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }
                        )}
                    </View>
                </ImageBackground>
                <Image style={{ position: 'relative', left: -12 }} source={require('../media/footer.png')} />
                <ImageBackground source={require('../media/pagebg.jpg')} style={{ width: "100%" }}>

                    <Text style={{ textAlign: "center", marginTop: 5, color: '#c2b280', fontSize: 20 }}>{page}</Text>
                    <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 10, marginBottom: 20 }}>
                        <View style={{ marginRight: 5 }}>
                            <Button
                                title="Back"
                                onPress={() => this._previousPage()}
                            />
                        </View>
                        <View style={{ marginLeft: 5 }}>
                            <Button
                                title="Next"
                                onPress={() => this._nextPage()}

                            />
                        </View>
                    </View>
                </ImageBackground>
            </ScrollView>
        );
    }
}

export default wordList;