import React, { Component } from 'react';
import RecursiveComponent from './RecursiveComponent';

// write components here


function One(props) {
  return (
  <div className="box">
    One
    {props.content}
  </div>
  )
}

function Two(props) {
  return (
    <div className="box">
      Two
      {props.content}
    </div>
  )
}

function Three(props) {
  return (
    <div className="box">
      Three
      {props.content}
    </div>
  )
}

// assign components below
const components = [One, Two, Three];

export default class Recursion extends Component {
	render() {
  	return (
    	<div className='App-wrapper'>
        <RecursiveComponent components={components} />
      </div>
    );
  }
};
