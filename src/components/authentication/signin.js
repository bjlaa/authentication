import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput
} from 'react-native';

import Button from '../common/button';

import Firebase from 'firebase';

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''	
		};
		//var myFirebaseRef = new Firebase('https://authreactnativeudemy.firebaseio.com/');
		var state = this.state;
		console.log(Firebase('https://authreactnativeudemy.firebaseio.com/'));

	}
	render() {
		return(
			<View style={styles.container}>
				<Text>Sign In</Text>
				<Text style={styles.label}>Username:</Text>
				<TextInput 
				value={this.state.username}
				onChangeText={ (text) => this.setState({username: text}) }
				style={styles.input}
				/>
				<Text style={styles.label}>Password:</Text>
				<TextInput 
				value={this.state.password}
				onChangeText={(text) => this.setState({password: text})}
				secureTextEntry={true} 
				style={styles.input}
				/>
				<Button text={'Sign In'} onPress={this.onPress} />
			</View>
		)
	}
	onPress() {
		// log the user in
		this.setState({
			password: ''
		});

	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	input: {
		padding: 4,
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		borderRadius: 5,
		margin: 5,
		width: 200,
		alignSelf: 'center'
	},
	label: {
		fontSize: 18,
	}
});

export default SignIn;