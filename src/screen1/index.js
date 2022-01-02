import React from "react"
import { TouchableOpacity, View, Text } from "react-native"

const Screen1 = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'red' }}>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Screen5')
            }}>
                <Text>press</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Screen1