/**
 * 这是第一个demo
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Text,Image,View,StyleSheet } from 'react-native';

class HelloWorldApp extends Component {
  render() {
    return (
        <Text>Hello world!</Text>
    );
  }
}

class Bananas extends Component{
  render(){
    let pic = {
      uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return(
        <Image source={pic} style={{width:193,height:110}} />
    );
  }
}

class Greeting extends Component{
  render(){
    return(<Text>Hello {this.props.name}!</Text>)
  }
}

class lotsOfGreetings extends  Component{
  render(){
    let pic = {
      uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return(
        <View style={{alignItems:'center'}}>
          <Greeting name='Rexxar'/>
          <Greeting name='Jaina'/>
          <Greeting name='Valeera'/>
          <Image source={pic} style={{width:193,height:110}} />
        </View>
    )
  }
}

class Blink extends Component{
  constructor(props) {
    super(props);
    this.state = {showText: true};

    //每10000毫秒对showText的状态做一次取反操作
    setInterval(function () {
      this.setState({showText: !this.state.showText});
    }, 1000);
  }

  render(){
    //根据当前showText的值决定是否显示text内容
    let display = this.state.showText ? this.props.text : ' ';
    return (<Text>{display}</Text>)
  }
}

class BlinkApp extends Component{
  render(){
    return(
        <View>
          <Blink text="I love to blink"/>
          <Blink text='Yes blinking is so great' />
          <Blink text='Why did they ever take this out of HTML' />
          <Blink text='Look at me look at me look at me' />
        </View>
    )
  }
}

class LotsOfStyles extends  Component{
  render(){
    return(
        <View>
          <Text style={styles.red}>just red</Text>
          <Text style={styles.bigblue}>just bigblue</Text>
          <Text style={[styles.bigblue,styles.red]}>bigblue, then red</Text>
          <Text style={[styles.red,styles.bigblue]}>red, then bigblue</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  bigblue:{
    color:'blue',
    fontWeight:'bold',
    fontSize:30
  },
  red:{
    color:'red'
  }
})

// 注意，这里用引号括起来的'HelloWorldApp'必须和你init创建的项目名一致
//AppRegistry.registerComponent('hellworld', () => HelloWorldApp);

//AppRegistry.registerComponent('hellworld', () => Bananas);

//AppRegistry.registerComponent('hellworld', () => lotsOfGreetings);

//AppRegistry.registerComponent('hellworld', () => BlinkApp);

AppRegistry.registerComponent('hellworld', () => LotsOfStyles);