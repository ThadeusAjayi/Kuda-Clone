import React from 'react';
import {ScrollView, StyleSheet, View, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import RF from '../../shared/utils/RF';
import * as Text from '../../components/AppText/index'
import { Colors } from '../../shared/theme';

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

                    <View style={{ flex: 1, height: Dimensions.get("window").height / 5, backgroundColor: Colors.primary, marginTop: RF(20), borderRadius: RF(8)}}>
                    </View>

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