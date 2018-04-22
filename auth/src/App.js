import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount() {
		firebase.initializeApp({
	    apiKey: "AIzaSyBtUykK8LYHmFPqgdnRXq3S1GEzkxYXRrg",
	    authDomain: "auth-2b53d.firebaseapp.com",
	    databaseURL: "https://auth-2b53d.firebaseio.com",
	    projectId: "auth-2b53d",
	    storageBucket: "auth-2b53d.appspot.com",
	    messagingSenderId: "649641260581"
 	 });

	};
	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				<LoginForm />
			</View>
			);

	}
};

export default App;