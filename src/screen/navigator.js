import { StackNavigator } from 'react-navigation';

import {Tab} from "./tab/tab";

export const NavigationStack = StackNavigator({
	Tab: {
		screen: Tab
	}
}, {
	initialRouteName: 'Tab'
});
