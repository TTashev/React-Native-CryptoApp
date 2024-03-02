import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomSheet from '@gorhom/bottom-sheet';
import MainMenu from '../cryptoWallet/components/MainMenu'
import ConvertMenu from '../cryptoWallet/components/ConvertMenu'
import BuySellMenu from '../cryptoWallet/components/BuySellMenu'
import BuyBtcMenu from '../cryptoWallet/components/BuyBtcMenu'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown : false}}>
        <Stack.Screen name="Main" component={MainMenu} options={{title: 'Welcome'}} />
        <Stack.Screen name="BuySell" component={BuySellMenu} />
        <Stack.Screen name="BuyBtc" component={BuyBtcMenu} />
        <Stack.Screen name="Convert" component={ConvertMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
