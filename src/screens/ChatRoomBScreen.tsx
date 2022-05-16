import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useCallback, useLayoutEffect, useState } from 'react';
import { Text, TouchableOpacity, } from 'react-native';
import { RootStackParamList } from '../../App';
import { auth, db } from "../database/firebase";
import styles from '../styles/Style';
import { FontAwesome } from '@expo/vector-icons';
import { GiftedChat } from 'react-native-gifted-chat'
import { addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore';

const ChatRoomBScreen = () => {        
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    const [messages, setMessages] = useState([]);
    
    useLayoutEffect(() => {        
        const unsubscribe = onSnapshot(query(collection(db, "chatB"), orderBy("createdAt", "desc")), (snapshot =>
            setMessages(snapshot.docs.map(doc => ({
                _id: doc.data()._id,
                text: doc.data().text,
                createdAt: doc.data().createdAt.toDate(),
                user: doc.data().user
            })))
        ))
        return unsubscribe;
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, messages))
        const {
            _id,
            createdAt,
            text,
            user } = messages[0]
        addDoc(collection(db, "chatB"), {
            _id,
            createdAt,
            text,
            user
        });
    }, []);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={handlerSingOut}>
                    <FontAwesome name="power-off" size={24} color="#a5d1f1" />
                </TouchableOpacity>
            ),
            headerLeft: () => (
                <TouchableOpacity onPress={handlerBack}>
                    <FontAwesome name="step-backward" size={24} color="#a5d1f1" />
                </TouchableOpacity>
            ),
            headerTitle: () => (  

                <Text style={styles.textUserB}>{auth?.currentUser?.displayName}</Text>                             
            ),
            headerBackVisible: false,
            headerBackButtonMenuEnabled: false,
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: '#3770b6',  
            }
        });
    }, []);

    async function handlerSingOut() {
        await auth
            .signOut()
            .then(() => { navigation.replace('Index') })
            .catch((error: any) => alert(error.message))
    }
    function handlerBack() {
        navigation.replace('Home');
    }
    return (        
            <GiftedChat
                messagesContainerStyle={{ backgroundColor: '#3770b6' }}
                optionTintColor='#optionTintColor'
                textInputProps={{                      
                    borderColor: '#222', 
                    placeholder:"Escribe un mensaje aquí...",                     
                     }}               
                
                messages={messages}
                onSend={messages => onSend(messages)}
                renderUsernameOnMessage={true}
                renderAvatarOnTop={true}
                maxInputLength={21}
                user={{
                    _id: auth?.currentUser?.email || 1,
                    name: auth?.currentUser?.displayName || '',
                }}
            />
    );
}

export default ChatRoomBScreen;


