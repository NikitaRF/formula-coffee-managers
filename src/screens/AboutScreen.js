import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";


export const AboutScreen = ({}) => {
    return (
        <View style={styles.center}>
            <Text>Приложение для личных заметок</Text>
            <Text>Версия приложения <Text style={styles.version}>1.0</Text></Text>
        </View>
    )
}

AboutScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: 'О приложении',
    headerLeft: (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon} >
            <Item title='Menu'
                  iconName='ios-menu'
                  onPress={() => navigation.toggleDrawer()}/>
        </HeaderButtons>
    ),
})

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    version: {
        fontFamily: 'open-bold'
    }
})