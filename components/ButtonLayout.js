import React from 'react';
import {StyleSheet , View  ,  Text , TouchableOpacity } from "react-native";


const styles = StyleSheet.create({
  numTextStyles : {
    color : 'white',
    fontSize : 80,
  },
  rows : {
    flexDirection : 'row',
    flex : 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  optTextStyles : {
    color : 'white',
    fontSize : 45,
  }
});


export default class ButtonLayout extends React.Component{

  render(){



    return (
      <View style = {this.props.styles}>
        <View style = {this.props.numberStyles}>
          <View style = {styles.rows}>
            <TouchableOpacity onPress = {() => this.props.handler('7')} ><Text style = {styles.numTextStyles}>7</Text></TouchableOpacity>
            <TouchableOpacity onPress = {() => this.props.handler('8')} ><Text style = {styles.numTextStyles}>8</Text></TouchableOpacity>
            <TouchableOpacity onPress = {() => this.props.handler('9')} ><Text style = {styles.numTextStyles}>9</Text></TouchableOpacity>
          </View>
          <View style = {styles.rows}>
            <TouchableOpacity onPress = {() => this.props.handler('4')} ><Text style = {styles.numTextStyles}>4</Text></TouchableOpacity>
            <TouchableOpacity onPress = {() => this.props.handler('5')} ><Text style = {styles.numTextStyles}>5</Text></TouchableOpacity>
            <TouchableOpacity onPress = {() => this.props.handler('6')} ><Text style = {styles.numTextStyles}>6</Text></TouchableOpacity>
          </View>
          <View style = {styles.rows}>
            <TouchableOpacity onPress = {() => this.props.handler('1')} ><Text style = {styles.numTextStyles}>1</Text></TouchableOpacity>
            <TouchableOpacity onPress = {() => this.props.handler('2')} ><Text style = {styles.numTextStyles}>2</Text></TouchableOpacity>
            <TouchableOpacity onPress = {() => this.props.handler('3')} ><Text style = {styles.numTextStyles}>3</Text></TouchableOpacity>
          </View>
          <View style = {styles.rows}>
            <TouchableOpacity onPress = {() => this.props.handler('.')} ><Text style = {styles.numTextStyles}>.</Text></TouchableOpacity>
            <TouchableOpacity onPress = {() => this.props.handler('0')} ><Text style = {styles.numTextStyles}>0</Text></TouchableOpacity>
            <TouchableOpacity onPress = {() => this.props.resultHandler()}><Text style = {styles.numTextStyles}>=</Text></TouchableOpacity>
          </View>
        </View>
        <View style = {this.props.optStyles}>
          <View style = {styles.rows}>
            <TouchableOpacity onPress = {() => this.props.optHandler('DEL')}><Text style = {styles.optTextStyles}>DEL</Text></TouchableOpacity>
          </View>
          <View style = {styles.rows}>
            <TouchableOpacity onPress = {() => this.props.optHandler('+')}><Text style = {styles.optTextStyles}>+</Text></TouchableOpacity>
          </View>
          <View style = {styles.rows}>
            <TouchableOpacity onPress = {() => this.props.optHandler('-')}><Text style = {styles.optTextStyles}>-</Text></TouchableOpacity>
          </View>
          <View style = {styles.rows}>
            <TouchableOpacity onPress = {() => this.props.optHandler('/')}><Text style = {styles.optTextStyles}>/</Text></TouchableOpacity>
          </View>
          <View style = {styles.rows}>
            <TouchableOpacity onPress = {() => this.props.optHandler('*')}><Text style = {styles.optTextStyles}>*</Text></TouchableOpacity>
          </View>

        </View>
      </View>
    );
  }


}
