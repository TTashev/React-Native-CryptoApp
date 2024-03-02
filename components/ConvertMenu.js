import {Text, View} from 'react-native';

const ConvertMenu = ({navigation}) => {
    return (
    <View
      style={{
        width : '100%',
        height : '100%',
        backgroundColor : 'black',
      }}>
        <View
          style={{
            alignItems: 'center',
            marginTop : 163,
            backgroundColor : 'black',
          }}>
            <Text style={{fontSize : 30, fontWeight: '700', color: '#FFFFFFFF'}}>Convert</Text>
        </View>
    </View>
    );
  };

  export default ConvertMenu