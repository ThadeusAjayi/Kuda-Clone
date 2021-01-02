import React from 'react';
import {ScrollView, StyleSheet, View, Dimensions, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import RF from '../../shared/utils/RF';
import * as Text from '../../components/AppText/index'
import { Colors } from '../../shared/theme';
import Button from '../../components/Button';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import NavigationService from '../../shared/routes/NavigationService';

export default ({}) => {
    return (
        <SafeAreaView style={styles.background}>
            <Text.HeavyText customstyle={{textAlign: 'center'}}>More</Text.HeavyText>
                <View style={{width: "100%", height: 0.4, backgroundColor: "grey", marginVertical: RF(10)}} />
            <ScrollView contentContainerStyle={[styles.body]}>
                <TouchableOpacity activeOpacity={0.7} style={{flexDirection: 'row', padding: RF(20), backgroundColor: Colors.inputBack, borderRadius: RF(4), alignItems:'center', marginBottom: RF(10)}}>
                    <View style={{flex: 1}}>
                        <Text.HeavyText>Statement & Report</Text.HeavyText>
                        <Text.RomanText customstyle={{fontSize: RF(10)}}>Download monthly statements</Text.RomanText>
                    </View>
                    <MaterialIcons name="keyboard-arrow-right" size={40} color={Colors.white} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={{flexDirection: 'row', padding: RF(20), backgroundColor: Colors.inputBack, borderRadius: RF(4), alignItems:'center', marginBottom: RF(10)}}>
                    <View style={{flex: 1}}>
                        <Text.HeavyText>Saved Cards</Text.HeavyText>
                        <Text.RomanText customstyle={{fontSize: RF(10)}}>Manage connected cards</Text.RomanText>
                    </View>
                    <MaterialIcons name="keyboard-arrow-right" size={40} color={Colors.white} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={{flexDirection: 'row', padding: RF(20), backgroundColor: Colors.inputBack, borderRadius: RF(4), alignItems:'center', marginBottom: RF(10)}}>
                    <View style={{flex: 1}}>
                        <Text.HeavyText>Linked Accounts</Text.HeavyText>
                        <Text.RomanText customstyle={{fontSize: RF(10)}}>Manage external accounts</Text.RomanText>
                    </View>
                    <MaterialIcons name="keyboard-arrow-right" size={40} color={Colors.white} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={{flexDirection: 'row', padding: RF(20), backgroundColor: Colors.inputBack, borderRadius: RF(4), alignItems:'center', marginBottom: RF(10)}}>
                    <View style={{flex: 1}}>
                        <Text.HeavyText>Chat With Us</Text.HeavyText>
                        <Text.RomanText customstyle={{fontSize: RF(10)}}>Get support or send feedback</Text.RomanText>
                    </View>
                    <MaterialIcons name="keyboard-arrow-right" size={40} color={Colors.white} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={{flexDirection: 'row', padding: RF(20), backgroundColor: Colors.inputBack, borderRadius: RF(4), alignItems:'center', marginBottom: RF(10)}}>
                    <View style={{flex: 1}}>
                        <Text.HeavyText>Security</Text.HeavyText>
                        <Text.RomanText customstyle={{fontSize: RF(10)}}>Protect yourself from intruders</Text.RomanText>
                    </View>
                    <MaterialIcons name="keyboard-arrow-right" size={40} color={Colors.white} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={{flexDirection: 'row', padding: RF(20), backgroundColor: Colors.inputBack, borderRadius: RF(4), alignItems:'center', marginBottom: RF(10)}}>
                    <View style={{flex: 1}}>
                        <Text.HeavyText>Referrals</Text.HeavyText>
                        <Text.RomanText customstyle={{fontSize: RF(10)}}>Eearn money when your friends join kuda</Text.RomanText>
                    </View>
                    <MaterialIcons name="keyboard-arrow-right" size={40} color={Colors.white} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={{flexDirection: 'row', padding: RF(20), backgroundColor: Colors.inputBack, borderRadius: RF(4), alignItems:'center', marginBottom: RF(10)}}>
                    <View style={{flex: 1}}>
                        <Text.HeavyText>Account Limits</Text.HeavyText>
                        <Text.RomanText customstyle={{fontSize: RF(10)}}>How much you can spend and receive</Text.RomanText>
                    </View>
                    <MaterialIcons name="keyboard-arrow-right" size={40} color={Colors.white} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={{flexDirection: 'row', padding: RF(20), backgroundColor: Colors.inputBack, borderRadius: RF(4), alignItems:'center', marginBottom: RF(10)}}>
                    <View style={{flex: 1}}>
                        <Text.HeavyText>Legal</Text.HeavyText>
                        <Text.RomanText customstyle={{fontSize: RF(10)}}>About our contract with you</Text.RomanText>
                    </View>
                    <MaterialIcons name="keyboard-arrow-right" size={40} color={Colors.white} />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7} onPress={()=> NavigationService.reset("Auth")} style={{marginVertical: RF(20)}}>
                    <Text.HeavyText style={{color: "tomato", textAlign: 'center'}}>Sign Out</Text.HeavyText>
                </TouchableOpacity>
            </ScrollView>
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
    marginTop: RF(15)
}
})