//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import constants from 'jest-haste-map/build/constants';
import { color } from 'react-native-reanimated';

// create a component55823
class Root extends Component {
    // static navigationOptions = {
    //     header: null,
    // }

    render() {

        return (
            <View style={styles.container}>
                {/* <Image style={styles.backgroundImage} source={require('../Image/background.png')}  /> */}
                <View style={styles.headerRoot}>


                </View>

                <View style={styles.bodyRoot}>

                </View>
                <View style={styles.footerRoot}>

                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffbf00',

    },

    headerRoot: {
        flex: 0.3,
        // justifyContent:'center',
        alignItems: 'center'
    },
    bodyRoot: {
        flex: 0.5,
        top: 20,
        // backgroundColor:'red',
        // justifyContent: 'center',
        alignItems: 'center'
    },

    footerRoot: {
        flex: 0.2
    },

});

//make this component available to the app
export default Root;

