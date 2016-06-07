import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput
} from 'react-native';

import Parse from 'parse/react-native';


import Button from '../common/button';

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			errorMessage: '',	
		};
	}
	componentDidMount() {
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
				<Text style={styles.label}>{this.state.errorMessage}</Text>
				<Button text={'Sign In'} onPress={this.onPress.bind(this)} />
			</View>
		)
	}

	onPress() {
		Parse.User.logIn(this.state.username, this.state.password, {
			success: (user) => {console.log(user);},
			error: (data, error) => {this.setState({errorMessage: error.message}); }
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