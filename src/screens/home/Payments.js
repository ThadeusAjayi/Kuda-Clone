import React from 'react';
import {ScrollView, StyleSheet, View, Dimensions, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import RF from '../../shared/utils/RF';
import * as Text from '../../components/AppText/index'
import { Colors } from '../../shared/theme';
import Button from '../../components/Button';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default ({}) => {
    return (
        <SafeAreaView style={styles.background}>
            <Text.HeavyText customstyle={{textAlign: 'center'}}>Payments</Text.HeavyText>
                <View style={{width: "100%", height: 0.4, backgroundColor: "grey", marginVertical: RF(10)}} />
            <View style={[styles.body]}>
                <TouchableOpacity activeOpacity={0.7} style={{flexDirection: 'row', padding: RF(20), backgroundColor: Colors.inputBack, borderRadius: RF(4), alignItems:'center', marginBottom: RF(10)}}>
                    <View style={{flex: 1}}>
                        <Text.HeavyText>Send Money</Text.HeavyText>
                        <Text.RomanText customstyle={{fontSize: RF(10)}}>Free transfers to all banks.</Text.RomanText>
                    </View>
                    <MaterialIcons name="keyboard-arrow-right" size={40} color={Colors.white} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={{flexDirection: 'row', padding: RF(20), backgroundColor: Colors.inputBack, borderRadius: RF(4), alignItems:'center', marginBottom: RF(10)}}>
                    <View style={{flex: 1}}>
                        <Text.HeavyText>Buy Airtime</Text.HeavyText>
                        <Text.RomanText customstyle={{fontSize: RF(10)}}>Recharge any phone easily.</Text.RomanText>
                    </View>
                    <MaterialIcons name="keyboard-arrow-right" size={40} color={Colors.white} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={{flexDirection: 'row', padding: RF(20), backgroundColor: Colors.inputBack, borderRadius: RF(4), alignItems:'center', marginBottom: RF(10)}}>
                    <View style={{flex: 1}}>
                        <Text.HeavyText>Pay A Bill</Text.HeavyText>
                        <Text.RomanText customstyle={{fontSize: RF(10)}}>Take care of your essentials.</Text.RomanText>
                    </View>
                    <MaterialIcons name="keyboard-arrow-right" size={40} color={Colors.white} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={{flexDirection: 'row', padding: RF(20), backgroundColor: Colors.inputBack, borderRadius: RF(4), alignItems:'center', marginBottom: RF(10)}}>
                    <View style={{flex: 1}}>
                        <Text.HeavyText>Web Payment</Text.HeavyText>
                        <Text.RomanText customstyle={{fontSize: RF(10)}}>Pay online without yout card.</Text.RomanText>
                    </View>
                    <MaterialIcons name="keyboard-arrow-right" size={40} color={Colors.white} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    background: {
        backgroundColor: Colors.black,
        flex: 1
    },
body: {
    paddingHorizontal: RF(20),
    paddingTop: RF(15)
}
})