import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { RootStackParamList } from '../../App';
import { auth } from "../database/firebase";
import styles from '../styles/Style';

const HomeScreen = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    async function handlerSingOut() {
        await auth
            .signOut()
            .then(() => { navigation.replace('Index') })
            .catch((error: any) => alert(error.message))
    }
    function handlerRoomA() {
        navigation.replace('ChatA');
    }
    function handlerRoomB() {
        navigation.replace('ChatB');
    }

    return (
        <View style={styles.container}> 
            <View style={styles.buttonContainer} > 
                <TouchableOpacity
                    onPress={handlerRoomA}
                    style={[styles.buttonHome, styles.buttonOutline]}
                >
                    <Image
                        source={require('../assets/4a.png')}
                        resizeMode="contain"
                        style={styles.logoHome}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handlerRoomB}
                    style={[styles.buttonHome, styles.buttonOutlineRole]}

                >
                    <Image
                        source={require('../assets/4b.png')}
                        resizeMode="contain"
                        style={styles.logoHome}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handlerSingOut}
                    style={[styles.button, styles.buttonOutline]}>
                    <View>
                        <Text style={styles.buttonOutlineText}>
                            Cerrar Sesión</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default HomeScreen;
