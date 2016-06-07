import React from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

var Parse = require('parse/react-native');

import Signin from './components/authentication/signin';

module.exports = React.createClass({
	componentWillMount: function() {
		Parse.initialize('parseid');
		Parse.serverURL = 'http://localhost:1337/parse';
	}, 
	render: function() {
		return (
			<View style={styles.container}>
				<Signin />
			</View>
		);
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});