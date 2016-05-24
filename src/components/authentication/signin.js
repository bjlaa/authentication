import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput
} from 'react-native';

module.exports = React.createClass({
	render: function() {
		return(
			<View style={styles.container}>
				<Text>Sign In</Text>
			</View>
		)
	}
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});