import React, { Component } from 'react';
 export default class TodoInput extends Component {
   render(){
     return <input type="test" defaultValue={this.props.content}/>
   }
 }