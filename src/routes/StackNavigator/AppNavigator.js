import { createAppContainer  } from 'react-navigation';
import { createStackNavigator  } from 'react-navigation-stack';
import UserList from '../../components/UsersList';
import UserPage from '../../components/UserPage';

const AppNavigator = createStackNavigator(
  {
    UserList,
    UserPage
  },
  {
    initialRouteName: 'UserList',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#fff'
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: '600'
      }
    }
  }
);

export default createAppContainer(AppNavigator);