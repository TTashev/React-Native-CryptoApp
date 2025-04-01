import React, { useRef } from 'react';
import {Dimensions , TouchableHighlight, TouchableOpacity, Text, View, Image} from 'react-native';
import BottomSheet, { BottomSheetMethods } from '@devvie/bottom-sheet';
import {icons, images } from '../resources';
import Svg, {Circle, Path } from 'react-native-svg';

const Portfolio = ({navigation}) => {
  const colors = ['#F7931A', '#00CDCD', '#FF5733', '#33FF57', '#5733FF', '#FFFF00'];
  const strokeWidth = 20;
  const windowWidth = Dimensions.get('window').width - 50;
  const radius = windowWidth / 2 - strokeWidth;
  const diameter = radius * 2;

  const angles = [60, 120, 180, 240, 300, 360]; // Angles for each color section
  const paths = angles.map((angle, index) => {
    const startAngle = (angle * Math.PI) / 180;
    const endAngle = ((angle + 60) * Math.PI) / 180;
    const x1 = radius + Math.cos(startAngle) * radius;
    const y1 = radius + Math.sin(startAngle) * radius;
    const x2 = radius + Math.cos(endAngle) * radius;
    const y2 = radius + Math.sin(endAngle) * radius;
    return (
      <Path
        key={index}
        d={`M${radius},${radius} L${x1},${y1} A${radius},${radius} 0 0,1 ${x2},${y2} Z`}
        fill={colors[index]}
      />
    );
  });

  const sheetRef = useRef();

    return (
        <View
          style={{
            flex : 1,
            backgroundColor : 'black',
          }}>
          <View
            style={{
              flex : 2,
              backgroundColor : 'green',
            }}>
            <Text style={{fontSize : 18, top: "20%", textAlign: 'center', fontWeight: '700', color: '#6AF25F'}}>Total Wealth</Text>
            <View
              style={{
                position: 'absolute',
                left: "5%",
                top: "20%",
              }}>
              <Text style={{fontSize : 20, textAlign: 'left', fontWeight: '700', color: '#FFFFFF'}}>@Dinko</Text>
            </View>
            <View
              style={{
                alignItems : "flex-end",
                position: 'absolute',
                right: "5%",
                top: "20%",
              }}>
              <Image
                source={icons.Bell}
                resizeMode='contain'
              />
            </View>
          </View>
          <View
            style={{
              flex : 5,
              alignItems : 'center',
              justifyContent: "center",
              backgroundColor : 'black',
            }}>
            <Svg width={diameter} height={diameter}>
              {paths}
              <Circle cx={radius} cy={radius} r={radius - strokeWidth} fill="black" />
            </Svg>
          </View>
          <View
            style={{
              flex : 5,
              backgroundColor : 'pink',
            }}>

          </View>
          <View
            style={{
              flex : 0.5,
              flexDirection: 'row',
              padding : "5%",
              alignItems : 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('Main', {name: 'Main'})}>
              <Image
                source={icons.home}
                resizeMode='contain'
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => sheetRef.current?.open()}>
              <Image 
                source={icons.buySell}
                resizeMode='contain'
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Portfolio', {name: 'Portfolio'})}>
              <Image
                source={icons.portfolio}
                resizeMode='contain'
              />
            </TouchableOpacity>
          </View>
        </View>
    );
};

export default Portfolio