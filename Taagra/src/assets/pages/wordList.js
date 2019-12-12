import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, StatusBar, Header, Image, ScrollView, Dimensions, TouchableWithoutFeedback, TouchableOpacity, ActivityIndicator, ImageBackground } from 'react-native';
import dictionary from '../dictionary/dictionary.json'
import * as Animatable from 'react-native-animatable'

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
        page = 0;
        this.setState({ data: dictionary.slice(start, end) })
    }

    _nextPage = () => {
        start = end;
        end = end + 20;
        page = page + 1;
        this.setState({ data: dictionary.slice(start, end) })
    }

    _previousPage = () => {
        if (start != 0) {
            start = start - 20;
            end = end - 20;
            this.setState({ data: dictionary.slice(start, end) })
        }
        if (page != 0) {
            page = page - 1
        }
    }





    render() {
        return (
            <ScrollView style={{ backgroundColor: "#c2b280" }}>
                <StatusBar barStyle="dark-content" backgroundColor='rgba(207, 102, 16, 0.0)' translucent={true} />
                <View style={{ marginTop: 50 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: 20, marginRight: 20, marginBottom: 20 }}>
                        <Text style={{ fontSize: 30, alignSelf: "center" }}>English</Text>
                        <Text style={{ fontSize: 30, alignSelf: "center" }}>Ta'agra</Text>
                    </View>
                    {this.state.data.map(a => {
                        return (
                            <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: 35, marginRight: 35 }}>
                                <Text style={{ fontSize: 20 }}>{a.ENGLISH}</Text>
                                <Text style={{ fontSize: 20 }}>{a.TAAGRA}</Text>
                            </View>
                        )
                    }
                    )}
                    <Text style={{textAlign: "center", marginTop: 10}}>{page}</Text>
                    <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 30, marginBottom: 20 }}>
                        <View style={{ marginRight: 5 }}>
                            <Button
                                title="Previous page"
                                onPress={() => this._previousPage()}
                            />
                        </View>
                        <View style={{ marginLeft: 5 }}>
                            <Button
                                title="Next page"
                                onPress={() => this._nextPage()}

                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default wordList;