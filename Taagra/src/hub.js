import home from '../src/assets/pages/home'
import dictionary from '../src/assets/pages/wordList'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { fromRight } from 'react-navigation-transitions';

const main = createStackNavigator({
    Home: {
        screen: home
    },
    Dictionary: {
        screen: dictionary
    }
},
    {
        transitionConfig: () => fromRight(),
    }
);


export default createAppContainer(createSwitchNavigator({
    main
}));