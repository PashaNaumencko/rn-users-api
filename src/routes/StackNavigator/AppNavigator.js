import { createAppContainer  } from 'react-navigation';
import { createStackNavigator  } from 'react-navigation-stack';
import UserList from '../../components/UsersList';
import UserPage from '../../components/UserPage';
import colors from '../../config/color.config';

const AppNavigator = createStackNavigator(
  {
    UserList,
    UserPage
  },
  {
    initialRouteName: 'UserList',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.lightblue
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: '600',
        color: '#ffffff'
      }
    }
  }
);

export default createAppContainer(AppNavigator);
