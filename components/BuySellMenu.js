import {Text, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const BuySellMenu = ({navigation}) => {
    return (
      <SafeAreaView
        backgroundColor="blue">
        <View
          style={{
            height : 467,
            backgroundColor : '#000000CC',
            alignItems : 'center',
            flexDirection : 'column',
            gap : 56,
          }}>
          <Text style={{fontSize : 25, fontWeight: '700', color: '#FFFFFFFF'}} onPress={() => navigation.navigate('BuyBtc')}>Buy</Text>
          <Text style={{fontSize : 25, fontWeight: '700', color: '#FFFFFFFF'}}>Sell</Text>
          <Text style={{fontSize : 25, fontWeight: '700', color: '#FFFFFFFF'}} onPress={() => navigation.navigate('Convert')}>Convert</Text>
          <Text style={{fontSize : 25, fontWeight: '700', color: '#FFFFFFFF'}}>Deposite</Text>
          <Text style={{fontSize : 25, fontWeight: '700', color: '#FFFFFFFF'}}>Withdraw</Text>
        </View>
      </SafeAreaView>
    );
  };

  export default BuySellMenu