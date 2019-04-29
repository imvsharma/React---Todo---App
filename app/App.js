/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <React.Fragment>
        <StatusBar barStyle = "light-content" hidden={false} backgroundColor = "#6146CB" translucent = {false} />
        <View 
          style = {{
            position: "absolute",
            top:0,
            left:0,
            right:0,
            height:60,
            backgroundColor:"#6146CB",
            opacity: 0.9,
            display:"flex",
            flexDirection: "row",
            justifyContent:"center",
            alignItems:"center"}}>
            <View
             style={{flexGrow: 2, display:"flex", justifyContent:"center", alignItems:"center"}}>
              <Ionicons name="md-menu" color="#fff" size={30}  />
            </View>
            <View
              style = {{
                flexGrow: 6,display:"flex", justifyContent:"center", alignItems:"center"
              }}>
              <Text style={{fontSize: 22,
                fontWeight: "bold",
                color: "#fff"}}>
                Task Manager
              </Text>
              
            </View>
            <View style={{flexGrow: 2, display:"flex", justifyContent:"center", alignItems:"center"}}>
              <Ionicons name="md-notifications" color="#fff" size={30} />
              {/* <View style={{position:"absolute", top:2,right: 25,height:8,width:8,borderRadius:50,backgroundColor:"red"}}></View> */}
            </View>
        </View>

        <View
        style = {{
            position: "absolute",
            bottom:25,
            right:25,
            height:50,
            width: 50,
            backgroundColor:"#6146CB",
            borderRadius: 50,
            display:"flex",
            flexDirection: "row",
            justifyContent:"center",
            alignItems:"center"}}>
              <Ionicons name="md-add" color="#fff" size={30} />
            </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
