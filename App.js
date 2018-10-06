import React from 'react';
import {Alert , Platform, StyleSheet, Text, View} from 'react-native';

import OperationScreen from "./components/OperationScreen";
import ResultScreen from './components/ResultScreen';
import ButtonLayout from './components/ButtonLayout'


const styles = StyleSheet.create({
  container : {
    flex : 1,
  },
  result : {
    flex : 1,
    backgroundColor : '#F0FFFF',
  },
  calculation : {
    flex : 1,
    backgroundColor : '#F0FFFF',
  },
  buttons : {
    flexGrow:3,
    flexDirection : 'row',
    backgroundColor: 'black',

  },
  numbers : {
    flex : 3,
    backgroundColor : '#504e4d',
  },
  operations : {
    flex:1,
    backgroundColor: '#706d6b',
  },

});


export default class App extends React.Component{

  constructor(props)
  {
    super(props);
    this.state = {
      optText : "",
      resText: "",
      arg1 : null,
      arg2 : null,
      arg2Holder : "",
      opt : null
    };
    this.changeOptText = this.changeOptText.bind(this)
    this.assignOpt = this.assignOpt.bind(this)
    this.changeResText = this.changeResText.bind(this)
  }

  changeOptText(text)
  {
    if(!this.state.opt)
      this.setState({optText : this.state.optText + text , arg1:Number(this.state.optText + text)});
    else
      this.setState({optText : this.state.optText + text ,arg2Holder : this.state.arg2Holder + text, arg2:Number(this.state.arg2Holder + text)});
  }
  assignOpt(opt)
  {
    if(opt == "DEL")
        this.setState({optText: ""  , arg1 : null , arg2:null , arg2Holder:"" , opt:null});
    else
        this.setState({optText: this.state.optText + opt  , opt : opt});
  }
  changeResText()

  {
    if(this.state.arg1 && this.state.arg2)
    {
      if(this.state.opt == "+")
        this.setState({resText: (this.state.arg1 + this.state.arg2).toString() , arg1:null,arg2:null,opt:null,arg2Holder:""});
      if(this.state.opt == "-")
        this.setState({resText: (this.state.arg1 - this.state.arg2).toString() , arg1:null,arg2:null,opt:null,arg2Holder:""});
      if(this.state.opt == "/")
        this.setState({resText: (this.state.arg1 / this.state.arg2).toString() , arg1:null,arg2:null,opt:null,arg2Holder:""});
      if(this.state.opt == "*")
        this.setState({resText: (this.state.arg1 * this.state.arg2).toString() , arg1:null,arg2:null,opt:null,arg2Holder:""});
    }
  }



  render(){
    return (
      <View style = {styles.container}>
        <OperationScreen styles = {styles.calculation} text = {this.state.optText}/>
        <ResultScreen styles = {styles.result} text = {this.state.resText}/>
        <ButtonLayout resultHandler = {() => this.changeResText()}
          optHandler = {(opt) => this.assignOpt(opt)} handler = {(text) => this.changeOptText(text)}
          styles = {styles.buttons} numberStyles = {styles.numbers} optStyles = {styles.operations} />
      </View>

    );
  }


}
