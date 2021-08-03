import React, {useEffect, useState} from "react";
import {
    StyleSheet, Text,
} from "react-native";
import {useSelector} from "react-redux";

export const HistoryScreen = () => {

    const historyData = useSelector(state => state.user.userHistoryOfOrder)
    console.log(historyData)

    return (
        <Text>{historyData}</Text>
    )

}


const styles = StyleSheet.create({

})