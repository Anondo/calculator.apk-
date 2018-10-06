import React from "react";
import {StyleSheet, Text, View} from 'react-native';


const styles = StyleSheet.create({
  texts : {
    fontSize :60,
    textAlign : 'right',
  },
});


export default class ResultScreen extends React.Component{

  render(){
    return (
      <View style = {this.props.styles}>
        <Text style = {styles.texts}>
            {this.props.text}
        </Text>
      </View>
    );
  }


}
