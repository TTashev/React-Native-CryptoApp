import {View, Text, Image, StatusBar, SafeAreaView , FlatList, StyleSheet} from 'react-native';
import Svg, {Line,Rect} from 'react-native-svg';
import {images} from '../resources';

const BuyBtcMenu = ({navigation}) => {
    return (
        <View
          style={{
            flex : 1,
            backgroundColor : 'black',
          }}>
            <StatusBar
              backgroundColor="blue"
              barStyle="light-content"
            />
            <View
              style={{
                flex : 3,
                backgroundColor : 'green',
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <Text style={{fontSize : 25, paddingTop : '30%', fontWeight: '700', color: '#FFFFFFFF'}}>Buy</Text>
              <Image
                style={{
                  resizeMode: 'contain',
                  paddingTop : '70%',
                }}
                source={images.buyBtc}
              />
              <Text style={{fontSize : 25, paddingTop : '30%', fontWeight: '700', color: '#FFFFFFFF'}}>BTC</Text>
            </View>
            {/* <View
              style={{
                paddingTop : 56,
                flexDirection: 'row',
                justifyContent : "center",
              }}>
              <Text style={{fontSize : 40, fontWeight: '700', color: '#FFFFFFFF'}}>50,00 лв</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                gap : 206,
                paddingTop : 60,
                paddingLeft : 28,
              }}>
              <Text style={{fontSize : 16, fontWeight: '700', color: '#FFFFFFFF'}}>Order type</Text>
              <Text style={{fontSize : 16, fontWeight: '400', color: '#FFFFFFFF'}}>Buy now {`>`}</Text>
            </View> */}
            {/* <View
              style={{
                flexDirection: 'row',
                gap : 158,
                paddingTop : 30,
                paddingLeft : 28,
              }}>
              <Text style={{fontSize : 16, fontWeight: '700', color: '#FFFFFFFF'}}>Pay With</Text>
              <Text style={{fontSize : 16, fontWeight: '400', color: '#FFFFFFFF'}}>balance 07.03 лв {`>`}</Text>
            </View>
            <View
              style={[
                StyleSheet.absoluteFill,
                { paddingTop : 450, alignItems: 'center'},
              ]}>
              <Svg height="50%" width="50%" viewBox="0 20 270 51">
                <Rect
                  rx="25"
                  ry="25"
                  width="270"
                  height="51"
                  stroke="#343434"
                  strokeWidth="1"
                  fill="#0029FF0D"
                />
                <Text style={{textAlign: 'center', fontSize : 25, fontWeight: '700', color: '#FFFFFFFF'}}>Next</Text>
              </Svg>
            </View> */}
            <View
            style={{
              flex : 2,
              backgroundColor : 'red',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent : 'space-between',
                paddingHorizontal : "5%",
              }}>
              <Text style={{fontSize : 22, fontWeight: '700', color: '#FFFFFFFF'}}>20 лв</Text>
              <Text style={{fontSize : 22, fontWeight: '700', color: '#FFFFFFFF'}}>50 лв</Text>
              <Text style={{fontSize : 22, fontWeight: '700', color: '#FFFFFFFF'}}>100 лв</Text>
              <Text style={{fontSize : 22, fontWeight: '700', color: '#FFFFFFFF'}}>MAX</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent : 'space-between',
                paddingTop : "10%",
                paddingVertical : "3%",
                paddingHorizontal : "12%",
              }}>
              <Text style={{fontSize : 30, fontWeight: '700', color: '#FFFFFFFF'}}>1</Text>
              <Text style={{fontSize : 30, fontWeight: '700', color: '#FFFFFFFF'}}>2</Text>
              <Text style={{fontSize : 30, fontWeight: '700', color: '#FFFFFFFF'}}>3</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent : 'space-between',
                paddingVertical : "3%",
                paddingHorizontal : "12%",
              }}>
              <Text style={{fontSize : 30, fontWeight: '700', color: '#FFFFFFFF'}}>4</Text>
              <Text style={{fontSize : 30, fontWeight: '700', color: '#FFFFFFFF'}}>5</Text>
              <Text style={{fontSize : 30, fontWeight: '700', color: '#FFFFFFFF'}}>6</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent : 'space-between',
                paddingVertical : "3%",
                paddingHorizontal : "12%",
              }}>
              <Text style={{fontSize : 30, fontWeight: '700', color: '#FFFFFFFF'}}>7</Text>
              <Text style={{fontSize : 30, fontWeight: '700', color: '#FFFFFFFF'}}>8</Text>
              <Text style={{fontSize : 30, fontWeight: '700', color: '#FFFFFFFF'}}>9</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent : 'space-between',
                paddingVertical : "3%",
                paddingHorizontal : "12%",
              }}>
              <Text style={{fontSize : 30, fontWeight: '700', color: '#FFFFFFFF'}}>.</Text>
              <Text style={{fontSize : 30, paddingLeft : "5%", fontWeight: '700', color: '#FFFFFFFF'}}>0</Text>
              <Text style={{fontSize : 30, fontWeight: '700', color: '#FFFFFFFF'}}>{`<-`}</Text>
            </View>
          </View>
        </View>
    );
  };

  export default BuyBtcMenu