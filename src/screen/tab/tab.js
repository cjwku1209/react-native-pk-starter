import { TabNavigator } from 'react-navigation';
import { NavigationComponent } from 'react-native-material-bottom-navigation';

import { Home } from "./home/home";

export const Tab = TabNavigator({
	Home: {
		screen: Home
	}
}, {
	tabBarComponent: NavigationComponent,
	tabBarPosition: 'bottom',
	tabBarOptions: {
		bottomNavigationOptions: {
			labelColor: 'white',
			rippleColor: 'white',
			tabs: {
				Home: {
					barBackgroundColor: '#37474F'
				}
			}
		}
	}
});
