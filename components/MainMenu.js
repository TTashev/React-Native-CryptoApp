import React, {useEffect, useMemo, useState, useRef } from 'react';
import {Text, TouchableOpacity, View, Image, ScrollView, StyleSheet} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { BlurView } from 'expo-blur';
import BottomSheet, { BottomSheetMethods } from '@devvie/bottom-sheet';
import { debounce } from 'lodash';
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
    const [data, setData]=useState([null]);
  
    const getBTCPriceApiAsync = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ctether%2Cethereum%2Cdogecoin%2Cchainlink%2Cuniswap&vs_currencies=usd&precision=2',
        );
        const json = await response.json();

        setData(json)

        return json;
      } catch (error) {
        setData(error)
        console.error(error);
      }
    }

    const debouncedFetchData = debounce(getBTCPriceApiAsync, 5000);
  
    useEffect(() =>{
      getBTCPriceApiAsync()

      const intervalId = setInterval(() => {
        getBTCPriceApiAsync();
      }, 20000);

      return () => clearInterval(intervalId);
    },[])

    const sheetRef = useRef();
  
    return (
      <View 
        style={{
          flex : 1,
          backgroundColor: "black",
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
            flex : 9,
            alignItems : 'center',
            backgroundColor : 'blue',
          }}>
          <Image 
            source={images.chartGreen}
            resizeMode='contain'
            style={styles.downHeader}
          />
          <ScrollView
            style={{
              flexGrow : 5,
            }}>
            <CryptoCurrency balance={JSON.stringify(data.bitcoin && data.bitcoin.usd) + " USD"} cryptoCurrency={icons.bitcoinLogo} currency="BTC" currencyName="Bitcoin" textColor="#F7931A" />
            <CryptoCurrency balance={JSON.stringify(data.tether && data.tether.usd) + " USD"} cryptoCurrency={icons.tetherLogo} currency="USDT" currencyName="Tether" textColor="#00CDCD" />
            <CryptoCurrency balance={JSON.stringify(data.ethereum && data.ethereum.usd) + " USD"} cryptoCurrency={icons.etheriumLogo} currency="ETH" currencyName="Etherum" textColor="#7000FF" />
            <CryptoCurrency balance={JSON.stringify(data.dogecoin && data.dogecoin.usd) + " USD"} cryptoCurrency={icons.dogeLogo} currency="DOGE" currencyName="Dogecoin" textColor="#FFD200" />
            <CryptoCurrency balance={JSON.stringify(data.chainlink && data.chainlink.usd) + " USD"} cryptoCurrency={icons.chainlinkLogo} currency="LINK" currencyName="Chainlink" textColor="#224DDA" />
            <CryptoCurrency balance={JSON.stringify(data.uniswap && data.uniswap.usd) + " USD"} cryptoCurrency={icons.uniswapLogo} currency="UNI" currencyName="Uniswap" textColor="#FF007A" />
          </ScrollView>
        </View>
        <View
          style={{
            flex : 0.5,
            flexDirection: 'row',
            padding : "5%",
            alignItems : 'center',
            justifyContent: 'space-between',
          }}>
          <Image
            source={icons.home}
            resizeMode='contain'
          />
          <TouchableOpacity onPress={() => sheetRef.current?.open()}>
            <Image 
              source={icons.buySell}
              resizeMode='contain'
            />
          </TouchableOpacity>
          <TouchableOpacity  onPress={() =>  {navigation.navigate('Portfolio');}}>
            <Image
              source={icons.portfolio}
              resizeMode='contain'
            />
          </TouchableOpacity>
        </View>
        <View>
          <BottomSheet style={styles.bottomSheet} ref={sheetRef}>
            <View
              style={{
                alignItems : 'center',
                gap : 46,
              }}>
              <Text style={{fontSize : 25, fontWeight: '700', color: '#FFFFFFFF'}} onPress={() => {navigation.navigate('BuyBtc'); sheetRef.current?.close();}}>Buy</Text>
              <Text style={{fontSize : 25, fontWeight: '700', color: '#FFFFFFFF'}}>Sell</Text>
              <Text style={{fontSize : 25, fontWeight: '700', color: '#FFFFFFFF'}} onPress={() => {navigation.navigate('Convert'); sheetRef.current?.close();}}>Convert</Text>
              <Text style={{fontSize : 25, fontWeight: '700', color: '#FFFFFFFF'}}>Deposite</Text>
              <Text style={{fontSize : 25, fontWeight: '700', color: '#FFFFFFFF'}}>Withdraw</Text>
            </View>
          </BottomSheet>
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
    },
    bottomSheet : {
      height : '50%',
      backgroundColor : '#000000CC',
    },
});