import {View, Text, Image, StatusBar, SafeAreaView, StyleSheet, Dimensions } from 'react-native';
import Svg, {Line,Rect} from 'react-native-svg';
import NextBtn from "../assets/svg/NextBtn"
const {width,height} = Dimensions.get('window')

const ConvertMenu = ({navigation}) => {
    return (
      <View
        style={{
          flex : 1,
          backgroundColor : 'black',
          flexDirection: 'column',
        }}>
          <StatusBar
            backgroundColor="blue"
            barStyle="light-content"
          />
          <View
            style={{
              flex : 3,
              backgroundColor : 'green',
              flexDirection: 'column',
            }}>
              <Text style={{fontSize : 25, paddingTop : '30%', textAlign: 'center', fontWeight: '700', color: '#FFFFFFFF'}}>Convert</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent : 'space-between',
                  paddingHorizontal : "5%",
                }}>
                  <Text style={{fontSize : 16, paddingTop : '20%', fontWeight: '700', color: '#FFFFFFFF'}}>From</Text>
                  <Text style={{fontSize : 16, paddingTop : '20%', fontWeight: '700', color: '#FFFFFFFF'}}>0.00 лв available</Text>
              </View>
              <View
                style={[
                  StyleSheet.absoluteFill,
                  { paddingTop : "65%"},
                ]}>
                <Svg>
                  <Rect
                    rx="28"
                    ry="28"
                    x ="5%"
                    y = "3%"
                    width="90"
                    height="34"
                    fill="#7000FF"
                  />
                </Svg>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  paddingHorizontal : "5%",
                }}>
                  <Text style={{fontSize : 16, paddingTop : '20%', fontWeight: '700', color: '#FFFFFFFF'}}>To</Text>
              </View>
              <View
                style={[
                  StyleSheet.absoluteFill,
                  { paddingTop : "90%"},
                ]}>
                <Svg>
                  <Rect
                    rx="28"
                    ry="28"
                    x ="5%"
                    y = "3%"
                    width="90"
                    height="34"
                    fill="#F7931A"
                  />
                </Svg>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  paddingTop : "20%",
                }}>
                <NextBtn />
              </View>
          </View>
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

  export default ConvertMenu