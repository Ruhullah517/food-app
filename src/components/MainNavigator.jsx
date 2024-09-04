import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeDrawer from './HomeDrawer';
import MealsDrawer from './MealsDrawer';
import LoginPage from '../screens/LoginPage';
import MealsPage from '../screens/Meals';
import LaunchingTwo from '../screens/LaunchingScreenTwo';
import OnBoarding from '../screens/OnBoarding';
import SetPassword from '../screens/SetPassword';
import SignupPage from '../screens/SignupPage';
import MyOrders from '../screens/MyOrders';
import BottomNav from './BottomNav';
import CancelOrderPage from '../screens/CancelOrder';
import ConfirmationPage from './ConfirmationPage';
import LeaveReviewPage from '../screens/OrderReview';
import MyProfilePage from '../screens/MyProfile';
import DeliveryAddressPage from '../screens/DeliveryAddress';
import AddNewAddressPage from '../screens/AddNewAddress';
import PaymentMethodsPage from '../screens/PaymentMethods';
import AddCardPage from '../screens/AddCard';
import ContactUsPage from '../screens/ContactUs';
import HelpnFAQs from '../screens/Help&FAQs';
import BottomNavigationWrapper from './BottomNavWrapper';
import SettingsPage from '../screens/Settings';
import NotificationSettingPage from '../screens/NotificationSetting';
import PasswordSettingPage from '../screens/PasswordSetting';
import ConfirmOrderPage from '../screens/ConfirmOrder';
import PayNowPage from '../screens/PayNow';
import TrackOrder from '../screens/TrackOrder';
import FilterPage from '../screens/Filter';
import FoodDetailPage from './FoodDetail';
import BestSellerPage from '../screens/BestSellerPage';
import RecommendationPage from '../screens/Recommendations';
import FavoritesPage from '../screens/Favorites';
import HistoryPage from '../screens/History';
import OrderDetailPage from '../screens/OrderDetail';
import LiveTrack from '../screens/LiveTrack';
import HelpPage from '../screens/Help';
import SupportPage from '../screens/Support';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


export default function CommonStackNavigator({ initialRoute }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={initialRoute}>
      <Stack.Screen name="HomePage" component={HomeDrawer} />
      <Stack.Screen name="MealsPage" component={MealsDrawer} />
      <Stack.Screen name="Login"  >
        {(props) => <BottomNavigationWrapper>
          <LoginPage {...props} />
        </BottomNavigationWrapper>
        }
      </Stack.Screen>
      <Stack.Screen name="SetPassword" >
        {(props) => <BottomNavigationWrapper>
          <SetPassword {...props} />
        </BottomNavigationWrapper>
        }
      </Stack.Screen>
      <Stack.Screen name="SignUp">
        {(props) => <BottomNavigationWrapper>
          <SignupPage {...props} />
        </BottomNavigationWrapper>
        }
      </Stack.Screen>
      <Stack.Screen name="MyOrders">
        {(props) => <BottomNavigationWrapper>
          <MyOrders {...props} />
        </BottomNavigationWrapper>
        }
      </Stack.Screen>
      <Stack.Screen name="CancelOrder" >
        {(props) => <BottomNavigationWrapper>
          <CancelOrderPage {...props} />
        </BottomNavigationWrapper>
        }
      </Stack.Screen>
      <Stack.Screen name="ConfirmationPage">
        {(props) => <BottomNavigationWrapper>
          <ConfirmationPage {...props} />
        </BottomNavigationWrapper>
        }
      </Stack.Screen>
      <Stack.Screen name="LeaveReview">
        {(props) => <BottomNavigationWrapper>
          <LeaveReviewPage {...props} />
        </BottomNavigationWrapper>
        }
      </Stack.Screen>
      <Stack.Screen name="MyProfile">
        {(props) => <BottomNavigationWrapper>
          <MyProfilePage {...props} />
        </BottomNavigationWrapper>
        }
      </Stack.Screen>
      <Stack.Screen name="DeliveryAddress">
        {(props) => <BottomNavigationWrapper>
          <DeliveryAddressPage {...props} />
        </BottomNavigationWrapper>
        }
      </Stack.Screen>
      <Stack.Screen name="AddNewAddress">
        {(props) => <BottomNavigationWrapper>
          <AddNewAddressPage {...props} />
        </BottomNavigationWrapper>
        }
      </Stack.Screen>
      <Stack.Screen name="PaymentMethods">
        {(props) => <BottomNavigationWrapper>
          <PaymentMethodsPage {...props} />
        </BottomNavigationWrapper>
        }
      </Stack.Screen>
      <Stack.Screen name="AddCard">
        {(props) => <BottomNavigationWrapper>
          <AddCardPage {...props} />
        </BottomNavigationWrapper>
        }
      </Stack.Screen>
      <Stack.Screen name="ContactUs">
        {(props) => <BottomNavigationWrapper>
          <ContactUsPage {...props} />
        </BottomNavigationWrapper>
        }
      </Stack.Screen>
      <Stack.Screen name="Help&FAQs">
        {(props) => <BottomNavigationWrapper>
          <HelpnFAQs {...props} />
        </BottomNavigationWrapper>
        }
      </Stack.Screen>
      <Stack.Screen name="Settings">
        {(props) => <BottomNavigationWrapper>
          <SettingsPage {...props} />
        </BottomNavigationWrapper>
        }
      </Stack.Screen>
      <Stack.Screen name="NotificationSetting">
        {(props) => <BottomNavigationWrapper>
          <NotificationSettingPage {...props} />
        </BottomNavigationWrapper>
        }
      </Stack.Screen>
      <Stack.Screen name="PasswordSetting">
        {(props) => <BottomNavigationWrapper>
          <PasswordSettingPage {...props} />
        </BottomNavigationWrapper>
        }
      </Stack.Screen>
      <Stack.Screen name="ConfirmOrder">
        {(props) => <BottomNavigationWrapper>
          <ConfirmOrderPage {...props} />
        </BottomNavigationWrapper>
        }
      </Stack.Screen>
      <Stack.Screen name="Payment">
        {(props) => <BottomNavigationWrapper>
          <PayNowPage {...props} />
        </BottomNavigationWrapper>
        }
      </Stack.Screen>
      <Stack.Screen name="TrackOrder">
        {(props) => <BottomNavigationWrapper>
          <TrackOrder {...props} />
        </BottomNavigationWrapper>
        }
      </Stack.Screen>
      <Stack.Screen name="Filter">
        {(props) => <BottomNavigationWrapper>
          <FilterPage {...props} />
        </BottomNavigationWrapper>
        }
      </Stack.Screen>
      <Stack.Screen name="FoodDetail">
        {(props) => <BottomNavigationWrapper>
          <FoodDetailPage {...props} />
        </BottomNavigationWrapper>
        }
      </Stack.Screen>
      <Stack.Screen name="BestSeller">
        {(props) => <BottomNavigationWrapper>
          <BestSellerPage {...props} />
        </BottomNavigationWrapper>
        }
      </Stack.Screen>
      <Stack.Screen name="Recommendations">
        {(props) => <BottomNavigationWrapper>
          <RecommendationPage {...props} />
        </BottomNavigationWrapper>
        }
      </Stack.Screen>
      <Stack.Screen name="FavouritesPage">
        {(props) => <BottomNavigationWrapper>
          <FavoritesPage {...props} />
        </BottomNavigationWrapper>
        }
      </Stack.Screen>
      <Stack.Screen name="History">
        {(props) => <BottomNavigationWrapper>
          <HistoryPage {...props} />
        </BottomNavigationWrapper>
        }
      </Stack.Screen>
      <Stack.Screen name="OrderDetails">
        {(props) => <BottomNavigationWrapper>
          <OrderDetailPage {...props} />
        </BottomNavigationWrapper>
        }
      </Stack.Screen>
      <Stack.Screen name="LiveTracker">
        {(props) => <BottomNavigationWrapper>
          <LiveTrack {...props} />
        </BottomNavigationWrapper>
        }
      </Stack.Screen>
      <Stack.Screen name="Help">
        {(props) => <BottomNavigationWrapper>
          <HelpPage {...props} />
        </BottomNavigationWrapper>
        }
      </Stack.Screen>
      <Stack.Screen name="Support">
        {(props) => <BottomNavigationWrapper>
          <SupportPage {...props} />
        </BottomNavigationWrapper>
        }
      </Stack.Screen>
    </Stack.Navigator>
  );
};


// export default function BottomTabs() {
//   return (
//     <Tab.Navigator tabBar={(props) => <BottomNav {...props} />}>
//       <Tab.Screen
//         name="Home"
//         children={() => <CommonStackNavigator initialRoute="HomePage" />}
//         options={{ headerShown: false }}

//       />
//       <Tab.Screen
//         name="Meals"
//         children={() => <CommonStackNavigator initialRoute="MealsPage" />}
//         options={{ headerShown: false }}
//       />
//     </Tab.Navigator>
//   );
// };