import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, StatusBar, Header, Image, ScrollView, Dimensions, TouchableWithoutFeedback, TouchableOpacity, ActivityIndicator, ImageBackground } from 'react-native';
import dictionary from '../dictionary/dictionary.json'
import { TextInput } from 'react-native-gesture-handler';
var hasWord = false

class Translate extends Component {

    static navigationOptions = {
        header: null
    }


    constructor() {
        super();
        this.state = {
            loading: 0,
            text: '',
            words: [],
            return: [],
            translated: '',
            font: ''
        }
    }

    _translate = () => {
        this.state.words = this.state.text.toLowerCase().replace(',', '').replace('?', '').replace('!', '').split(' ')
        this.state.return = []
        this.state.words.forEach(word => {
            hasWord = false
            dictionary.forEach(list => {
                if (word === list.ENGLISH) {
                    this.state.return.push(list.TAAGRA)
                    hasWord = true
                }
            })
            if (hasWord === false) {
                this.state.return.push(word)
            }
        })
        this.setState({ translated: JSON.stringify(this.state.return).replace(/"/g, '').replace('[', '').replace(']', '').replace(/,/g, ' ') })
    }

    _changeFontTaagra = () => {
        this.setState({ font: 'Taagra' })
    }

    _changeFontNormal = () => {
        this.setState({ font: '' })
    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: "black" }}>
                <StatusBar barStyle="light-content" backgroundColor='rgba(207, 102, 16, 0.0)' translucent={true} />
                <ImageBackground source={require('../media/pagebg.jpg')} style={{ width: "100%" }}>
                    <View style={{ alignSelf: 'center', marginTop: 50, marginBottom: 50 }}>
                        <Image source={require('../media/translatorbig.png')} />
                    </View>
                </ImageBackground>
                <Image style={{ position: 'relative', left: -12 }} source={require('../media/footer.png')} />
                <ImageBackground source={require('../media/mainbg.jpg')} style={{ width: "100%" }}>
                    <View style={{ marginTop: 10, marginBottom: 10, marginLeft: 20, marginRight: 20 }}>
                        <Text>Result in Ta'agra</Text>
                        {(this.state.font == 'Taagra') ?
                            (
                                <TextInput multiline={true} autoCorrect={false} editable={false} style={{ backgroundColor: '#bf9b7a', color: 'black', fontSize: 30, borderColor: '#a67a53', borderWidth: 2, marginBottom: 10, height: 150, fontFamily: 'TaagraCalligraphy' }}>
                                    {this.state.translated}
                                </TextInput>
                            )
                            :
                            (
                                <TextInput multiline={true} autoCorrect={false} editable={false} style={{ backgroundColor: '#bf9b7a', color: 'black', fontSize: 30, borderColor: '#a67a53', borderWidth: 2, marginBottom: 10, height: 150 }}>
                                    {this.state.translated}
                                </TextInput>
                            )}
                        <View style={{ flexDirection: 'row', alignSelf: "center", marginTop: 5, marginBottom: 10 }}>
                            <Button
                                title="Show in Taagra"
                                onPress={() => this._changeFontTaagra()}
                            />
                            <View style={{ marginLeft: 30, marginRight: 30 }} />
                            <Button
                                title="Show in English"
                                onPress={() => this._changeFontNormal()}
                            />
                        </View>
                        <Text>Type in English here</Text>
                        <TextInput
                            multiline={true}
                            onChangeText={(text) => this.setState({ text })}
                            style={{ backgroundColor: '#bf9b7a', fontSize: 20, borderColor: '#a67a53', borderWidth: 2, marginBottom: 10 }} />
                        <View style={{ marginLeft: 23, marginRight: 23 }}>
                            <Button
                                title="Translate"
                                onPress={() => this._translate()}
                            />
                        </View>
                        <Text style={{ marginTop: 20 }}>Important notes:</Text>
                        <Text>The translator cannot currently correct for sentence structure changes resulting from Lative Case (to/+ali), Ablative Case (from/+iitay), Future Tense (will/+se), or Negative Verbs (not/+oh). You will need to make these changes manually.</Text>
                        <Text>Words that cannot be translated will be returned in the output text.</Text>
                        <Text>The translator cannot account for parts of speech. In English the word "talk" could be a noun (a talk) or it could be a verb (to talk), but the root word "talk" does not change. This is not the case in Ta'agra. If you input the word "talk" into the translator, it will not know if you mean "a talk" (which translates to "purna") or "to talk" (which translates to "pur"). We are working on a better way to do this, but for now you need to take care to double-check your outputs against the dictionary to make sure they are accurate.</Text>
                    </View>
                </ImageBackground>
                <Image style={{ position: 'relative', left: -12 }} source={require('../media/footer.png')} />
                <Image source={require('../media/pagebg.jpg')} style={{ width: "100%", height: 50 }} />
            </ScrollView>
        );
    }
}

export default Translate;