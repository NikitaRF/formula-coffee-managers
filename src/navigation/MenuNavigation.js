import {createStackNavigator} from '@react-navigation/stack';
import {MenuScreen} from "../screens/MenuScreen";
import React, {useEffect, useState} from "react";
import { SimpleLineIcons } from '@expo/vector-icons';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {THEME} from "../theme";
import {Text, View, StyleSheet} from "react-native";
import {useSelector} from "react-redux";


const Stack = createStackNavigator();

export const MenuNavigation = () =>  {

    const [totalCount, setTotalCount] = useState()

    const basketItems = useSelector(state => state.menu.basket)

    const getBasketItemCount = () => {
        let result = 0
        basketItems.forEach((el) => {
            result += el.count
        })
        setTotalCount(result)
        console.log("totalCount", totalCount)
    }

    useEffect(() => {
        getBasketItemCount()
    }, [basketItems])

    return (
        <Stack.Navigator
            screenOptions={({ navigation }) => ({
                headerLeft: () => (
                    <HeaderButtons HeaderButtonComponent={AppHeaderIcon} >
                        <Item title='Menu'
                              iconName='ios-menu'
                              onPress={() => navigation.toggleDrawer()}/>
                    </HeaderButtons>
                ),
                headerRight: () => (
                    <View style={{marginRight: 20}}>
                        <View style={styles.basketMarkerWrap}>
                            <View style={styles.markerCircle}>
                                <Text style={totalCount != 0 ? styles.basketMarker : {opacity: 0}}>{totalCount}</Text>
                            </View>

                        </View>
                        <SimpleLineIcons
                            name="basket"
                            size={24}
                            color={THEME.COLOR_MAIN_DARK}
                            onPress={() => navigation.navigate('Корзина')}
                        />
                    </View>

                )
            })}
        >
            <Stack.Screen name="Меню" component={MenuScreen} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    basketMarkerWrap: {
        position: 'absolute',
        right: 0,
        top: -12,

    },
    markerCircle: {
        //backgroundColor: THEME.COLOR_MAIN_LIGHT,

    },
    basketMarker: {
        color: THEME.COLOR_MAIN_DARK,
        fontFamily: 'open-bold',
    },
})


