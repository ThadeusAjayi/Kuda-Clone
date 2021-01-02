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
            <Text.HeavyText customstyle={{textAlign: 'center'}}>Budget</Text.HeavyText>
                <View style={{width: "100%", height: 0.4, backgroundColor: "grey", marginVertical: RF(10)}} />
            <View style={[styles.body]}>
                
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