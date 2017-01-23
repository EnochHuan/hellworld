/**
 * 这是第一个demo
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Text,Image,View,StyleSheet,TextInput } from 'react-native';

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

class FixedDimensionsBasics extends  Component{
    render(){
        return(
            <View>
                <View style={{width:50,height:50,backgroundColor:'powderblue'}}></View>
                <View style={{width:100,height:100,backgroundColor:'skyblue'}}></View>
                <View style={{width:150,height:150,backgroundColor:'steelblue'}}></View>
            </View>
        )
    }
}

class FlexDimensionsBasics extends Component{
    render(){
        return(
            <View style={{height:300}}>
                <View style={{flex:1,backgroundColor:'powderblue'}}></View>
                <View style={{flex:2,backgroundColor:'skyblue'}}></View>
                <View style={{flex:3,backgroundColor:'steelblue'}}></View>
            </View>
        );
    }
}

class JustifyContentBasics extends Component{
    render(){
        return(
            <View style={{flex:1,flexDirection:'row',justifyContent:'center'}}>
                <View style={{width:50,height:50,backgroundColor:'powderblue'}}></View>
                <View style={{width:50,height:50,backgroundColor:'skyblue'}}></View>
                <View style={{width:50,height:50,backgroundColor:'steelblue'}}></View>
            </View>
        )
    }
}

class AlignItemsBasics extends Component{
    render(){
        return(
            <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <View style={{width:50,height:50,backgroundColor:'powderblue'}}></View>
                <View style={{width:50,height:50,backgroundColor:'skyblue'}}></View>
                <View style={{width:50,height:50,backgroundColor:'steelblue'}}></View>
            </View>
        )
    }
}

class PizzaTranslater extends Component{
    constructor(props){
        super(props);
        this.state = {text:''};
    }

    render(){
        return(
            <View style={{padding:10}}>
                <TextInput style={{height:40}}
                             placeholder="Type here to translate"
                  onChangeText={(text) => this.setState({text})}></TextInput>
                <Text style={{padding:10,fontSize:42}}>
                    //关于&&----由于对于null 或 false 值，React不会输出任何内容，
                    //因此可以使用一个后面跟随了期望字符串的boolean值来实现条件判断。
                    //如果这个boolean值为true，那么后续的字符串会被使用，反之，则不会被使用
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
            </View>
        );
    }
}

// 注意，这里用引号括起来的'HelloWorldApp'必须和你init创建的项目名一致
//AppRegistry.registerComponent('hellworld', () => HelloWorldApp);

//AppRegistry.registerComponent('hellworld', () => Bananas);

//AppRegistry.registerComponent('hellworld', () => lotsOfGreetings);

//AppRegistry.registerComponent('hellworld', () => BlinkApp);

//AppRegistry.registerComponent('hellworld', () => LotsOfStyles);

//AppRegistry.registerComponent('hellworld', () => FixedDimensionsBasics);

//AppRegistry.registerComponent('hellworld', () => FlexDimensionsBasics);

//AppRegistry.registerComponent('hellworld', () => JustifyContentBasics);

//AppRegistry.registerComponent('hellworld', () => AlignItemsBasics);

AppRegistry.registerComponent('hellworld', () => PizzaTranslater);