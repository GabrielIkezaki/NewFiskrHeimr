import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#7CA1B4',
    alignItems:'center',
    justifyContent: 'center',
  },
});


export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {show : true};

    this.toggleDiv = this.toggleDiv.bind(this)
  }

  toggleDiv = () => {
    const{ show } = this.state;
    this.setState( { show:!show } )
  }

  render(){
    return(
     
      <View style = {styles.container}>
         <Image
         style={{width: 300, height: 300}}
           source={require('./assets/fishGod.jpg')}        
         />

        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
          onClick={ this.toggleDiv}
          style={{margin:10, flex:1, height:60, backgroundColor:'white', justifyContent: 'center'}}>
            <Text style={{color:'black', textAlign:'center', fontSize:16}}>Fish a word from our Lord</Text>
            </TouchableOpacity>
          </View>
        </View>
        

        

    );
  }
    
}

class Box extends Component{
  render(){
    return(
      <View style = {styles.container}>
       <Image
         style={{width: 300, height: 300}}
           source={require('./assets/fishGod.jpg')}        
         />
       </View>
    )
  }
}