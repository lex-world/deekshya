import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

export default function Navbar() {
    return (
        <View style={styles.navbar__container}>
            <Text>This is Navbar</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar__container: {
        height: 85,
        width: Dimensions.get("window").width,
        backgroundColor: "#fff",
        position: 'absolute',
        bottom: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        shadowColor: "#3a3a3a",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    }
})
