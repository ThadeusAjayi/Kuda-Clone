import React from 'react';
import {ScrollView, StyleSheet, View, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import RF from '../../shared/utils/RF';
import * as Text from '../../components/AppText/index'
import { Colors } from '../../shared/theme';
import Button from '../../components/Button';

export default ({}) => {
    return (
        <SafeAreaView style={styles.background}>
            <ScrollView style={[styles.body]}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View>
                        <Text.MediumText>Hi, Thad</Text.MediumText>
                    </View>
                    <View>
                        <Text.MediumText>Add Money</Text.MediumText>
                    </View> 
                </View>

                    <View style={{ flex: 1, height: Dimensions.get("window").height / 5, backgroundColor: Colors.primary, marginTop: RF(20), borderRadius: RF(8), padding: RF(20), alignItems: 'center',}}>
                        <Text.MediumText>Bank Balance</Text.MediumText>
                        <Text.HeavyText customstyle={{fontSize: RF(30), marginVertical: RF(15)}}>N 0.00</Text.HeavyText>
                        <View style={{justifyContent: "center", flexDirection: 'row'}}>
                            <Text.BookText customstyle={{marginRight: RF(10)}}>Spend</Text.BookText>
                            <Text.BookText customstyle={{marginRight: RF(10)}}>Save</Text.BookText>
                            <Text.BookText>Borrow</Text.BookText>
                        </View>
                    </View>

                    <Text.HeavyText customstyle={{textAlign: 'center', marginVertical: RF(40), fontSize: RF(25)}}>Welcome to Kuda!</Text.HeavyText>
                    <Text.BookText customstyle={{textAlign: 'center', fontSize: RF(12)}}>Your Kuda account number is 20093939399. Your account is limited to a balance of N300,000 and you can receive a maximum deposit of N50,000 at a time.</Text.BookText>
                    

                    <Button buttonStyle={{marginTop: RF(50)}}>Add Money</Button>

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
    paddingHorizontal: RF(20)
}
})