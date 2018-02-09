import React from 'react';
import { View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export class Home extends React.Component {

	static navigationOptions = {
		header: null,
		tabBarLabel: 'home',
		tabBarIcon: () => {
			return (
				<MaterialIcons size={24} color="white" name="home"/>
			);
		}
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View/>
		);
	}

}
