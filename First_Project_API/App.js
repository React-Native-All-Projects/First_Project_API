import React from "react";

import { View,Text } from "react-native";

const App = () =>{

    //------------------------------------------------------------------------Get ***********************************
    const Get = async () => {
    try {
      let response = await fetch('http://16ac-81-28-126-167.ngrok.io/api/TestAPI/Get');
      let json = await response.json();
          console.log( 'Get');
      console.log(json);
    } catch (error) {
      console.error(error);
    }}

    Get();

    const GetWithURL = async (data) => {
    try {
      let response = await fetch('http://16ac-81-28-126-167.ngrok.io/api/TestAPI/GetWithURL/'+data);
      let json = await response.json();
      console.log( 'Get With URL');
      console.log(json);
    } catch (error) {
      console.error(error);
    }}

     GetWithURL('My Data');



    //------------------------------------------------------------------------Post ****************************************
    const Post = async () => {
        await fetch('http://16ac-81-28-126-167.ngrok.io/api/TestAPI/Put',{
          method:'PUT',
        }).then(async (response) =>{
            let json = await response.json();
              console.log('Post');
            console.log(json);
        })

  };
  Post();

  //------------------------------------------------------------------------Post With Body
    const PostWithBody = async () => {
        await fetch('http://16ac-81-28-126-167.ngrok.io/api/TestAPI/PutWithBody',{
          method:'POST',
            headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
           body: JSON.stringify({
    UserName : 'SuperUser',
    Password :'SuperUser'
      }),
        }).then(async (response) =>{
          let json = await response.json();
            console.log('Post With Body');
          console.log(json);
        })
  };

  PostWithBody();






  //------------------------------------------------------------------------Put ****************************************
    const Put = async () => {
        await fetch('http://16ac-81-28-126-167.ngrok.io/api/TestAPI/Put',{
          method:'PUT',
        }).then(async (response) =>{
            let json = await response.json();
              console.log('Put');
            console.log(json);
        })

  };
  Put();

  //------------------------------------------------------------------------Put With Body
    const PutWithBody = async () => {
        await fetch('http://16ac-81-28-126-167.ngrok.io/api/TestAPI/PutWithBody',{
          method:'PUT',
            headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
           body: JSON.stringify({
    UserName : 'SuperUser',
    Password :'SuperUser'
      }),
        }).then(async (response) =>{
          let json = await response.json();
            console.log('Put With Body');
          console.log(json);
        })
  };

  PutWithBody();


    //------------------------------------------------------------------------Delete *********************************
    const DeleteWithURL = async (Id) => {
        await fetch('http://16ac-81-28-126-167.ngrok.io/api/TestAPI/DeleteWithURL/'+Id,{
          method:'Delete',
        }).then(async (response) =>{
          let json = await response.json();
            console.log('Delete With URL');
          console.log(json);
        })
  };

  DeleteWithURL(1);



  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>App</Text>
    </View>
  )
}

export default App;
