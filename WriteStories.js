import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import db from './config';



export default class WriteStories extends React.Component {
    constructor(){
        super();
        this.state={
            title:'',
            author:'',
            story:''

        }
    }

    submitStory=()=>{
       
        db.collection("Story").doc("tas").update({
            'title':this.state.title,
            'author':this.state.author,
            'story':this.state.story

        })

        this.setState({
            title:'',
            author:'',
            story:''
        })
        return alert("Story added")
    }
   
    

  render(){
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',marginTop:50 }}>
            <TextInput
            placeholder="title" 
            style={{borderWidth:2,marginTop:50 }} 
            value ={this.state.title}
            onChangeText ={text => this.setState({title:text})}/>

            <TextInput
            placeholder="author"
            style={{borderWidth:2,marginTop:50 }}
            value ={this.state.author}
            onChangeText ={text => this.setState({author:text})}/>

            <TextInput
            placeholder="story"
            style={{borderWidth:2,marginTop:50 }}
            value ={this.state.story}
            onChangeText ={text => this.setState({story:text})}/>


            <TouchableOpacity
             style={{borderWidth:2, color:'green',marginTop:50 }}
             onPress={()=>{this.submitStory}}>
                <Text  style={{fontWeight:"bold"}}>Submit</Text>
            </TouchableOpacity>

           
            

        </View>

    );
}
}