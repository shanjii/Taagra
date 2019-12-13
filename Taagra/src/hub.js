import home from '../src/assets/pages/home'
import dictionary from '../src/assets/pages/wordList'
import translate from '../src/assets/pages/translate'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { fromRight, fromLeft, fromTop } from 'react-navigation-transitions';

const main = createStackNavigator({
    Home: {
        screen: home
    },
    Dictionary: {
        screen: dictionary
    },
    Translate : {
        screen: translate
    }
},
    {
        transitionConfig: () => fromRight(),
    }
);


export default createAppContainer(createSwitchNavigator({
    main
}));