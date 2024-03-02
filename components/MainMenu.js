import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View, Image, ScrollView, StyleSheet} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {icons, images } from '../resources';

const CryptoCurrency = ({ balance, cryptoCurrency, currency, currencyName, textColor }) => {
    return (
      <View
      style={{
        width: 403,
        height: 98,
        paddingLeft: 14,
        alignItems:'center',
        flexDirection:'row',
      }}>
        <Image 
          source={cryptoCurrency}
          resizeMode='contain'
          style={styles.crypto}
        />
        <Text style={{fontWeight: '700', fontSize: 16, paddingTop: 3, paddingLeft: 7, color: '#FFFFFFFF'}}>{currencyName}</Text>
        <Text style={{fontWeight: '700', paddingTop: 3, paddingLeft: 5, color: textColor}}>{currency}</Text>
        <Text style={{fontWeight: '700', fontSize: 18, paddingTop: 6, paddingLeft: 80, color: '#FFFFFFFF'}}>{balance}</Text>
      </View>
    );
  };

const MainMenu = ({navigation}) => {
    const [data, setData]=useState([]);
  
    const getBTCPriceApiAsync = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&precision=2',
        );
        const json = await response.json();
        if(json.bitcoin != undefined) {
           setData(json.bitcoin.usd)
        }
        return json.bitcoin;
      } catch (error) {
        setData(error)
        console.error(error);
      }
    }
  
    useEffect(() =>{
      getBTCPriceApiAsync()
    },[data])
  
    return (
      <View 
        style={{
          width : "100%",
          height : "100%",
          backgroundColor: "black",
      }}>
        <View
          style={{
            paddingTop : 74,
            flexDirection : 'row',
          }}>
          <Text style={{fontSize : 20, paddingLeft : 21,  fontWeight: '700', color: '#FFFFFF'}}>@Dinko</Text>
          <Text style={{fontSize : 18, paddingLeft : 40, fontWeight: '700', color: '#6AF25F'}}>Total Wealth</Text>
          <Image
            style={{paddingLeft : 180}}
            source={icons.Bell}
            resizeMode='contain'
          />
        </View>
        <View
          style={{
            paddingTop : 3,
            alignItems : 'center',
          }}>
          <Text style={{fontSize : 25, fontWeight: '700', color: '#FFFFFF'}}>5 712,32 лв</Text>
        </View>
        <View
          style={{
            alignItems : 'center',
          }}>
          <Image 
            source={images.chartGreen}
            resizeMode='contain'
            style={styles.downHeader}
          />
        </View>
        <ScrollView>
          <CryptoCurrency balance={JSON.stringify(data) + " USD"} cryptoCurrency={icons.bitcoinLogo} currency="BTC" currencyName="Bitcoin" textColor="#F7931A" />
          <CryptoCurrency balance="1.85 лв" cryptoCurrency={icons.tetherLogo} currency="USDT" currencyName="Tether" textColor="#00CDCD" />
          <CryptoCurrency balance="4 045.12 лв" cryptoCurrency={icons.etheriumLogo} currency="ETH" currencyName="Etherum" textColor="#7000FF" />
          <CryptoCurrency balance="0.22 лв" cryptoCurrency={icons.dogeLogo} currency="DOGE" currencyName="Dogecoin" textColor="#FFD200" />
          <CryptoCurrency balance="12.49 лв" cryptoCurrency={icons.chainlinkLogo} currency="LINK" currencyName="Chainlink" textColor="#224DDA" />
          <CryptoCurrency balance="5.51 лв" cryptoCurrency={icons.uniswapLogo} currency="UNI" currencyName="Uniswap" textColor="#FF007A" />
        </ScrollView>
        <View
          style={{
            width : "100%",
            height : 102,
            flexDirection: 'row',
            padding : 20,
            alignItems : 'center',
            justifyContent: 'space-between',
            backgroundColor: "#000000",
          }}>
          <Image
            source={icons.home}
            resizeMode='contain'
          />
          <TouchableOpacity onPress={() => navigation.navigate('BuySell')}>
            <Image 
              source={icons.buySell}
              resizeMode='contain'
            />
          </TouchableOpacity>
          <Image 
            source={icons.portfolio}
            resizeMode='contain'
          />
        </View>
      </View>
    );
  };

export default MainMenu

const styles = StyleSheet.create({
    crypto: {
      paddingTop: 5,
      paddingLeft: 5,
      alignItems: 'flex-start',
    },
    downHeader: {
      alignItems: 'center',
      padding: 30,
    },
});