import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native'

const Home = () => {
    return (
        <View style={styles.page}>
            <Text>Game home page</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    page:{
        flex:1
    }
})
