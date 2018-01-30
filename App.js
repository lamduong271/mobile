import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      num1:"",
      num2:"",
      result:null
    }
  }
  
  increase=()=>{
    this.setState({
      result:Number(this.state.num1)+Number(this.state.num2),
      num1:0,
      num2:0
    })
  }
  decrease=()=>{ 
    this.setState({
      result:Number(this.state.num1)-Number(this.state.num2),
      num1:0,
      num2:0
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Result {this.state.result}</Text>
        <TextInput keyboardType="numeric" style={styles.textInput} value={this.state.num1} onChangeText={(text)=>this.setState({num1:text})}></TextInput>
        <TextInput keyboardType="numeric" style={styles.textInput} value={this.state.num2} onChangeText={(text)=>this.setState({num2:text})}></TextInput>
        <View flexDirection="row">
        {/* <Button color="red"  title="+" onPress={this.increase}></Button>
        <Button style={styles.buttonStyle} title="-" onPress={this.decrease}></Button> */}
        <View style={styles.buttonStyle}>

          <Button       
          title="-"
          color="red"
          onPress={this.decrease}
        />   

      </View>

      <View style={styles.buttonStyle}>

          <Button       
          title="+"
          color="red"
          onPress={this.increase}
        />   

      </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle:{
    backgroundColor:"green",
    width:50,
    height:50,
    justifyContent:"center",
    margin:6,
    borderRadius:5
  },
  textInput:{
  width:250,
  height:50,
  borderColor:"gray",
  borderWidth:1,
  margin:5
  }
});
