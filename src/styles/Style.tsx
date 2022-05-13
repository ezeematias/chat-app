import { StyleSheet } from "react-native";

const primaryColor = '#5a5a5a';
const secondaryColor = '#3770b6';
const tertiaryColor = '#a5d1f1';
const fourthColor = '#ffffff';
const buttonBorderRadius = 8;

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonHome: {
        backgroundColor: fourthColor,
        width: '100%',
        height: '45%',
        padding: 5,
        borderRadius: buttonBorderRadius,
        alignItems: 'center',
        justifyContent: 'center',        
    },
        buttonContainerHome: {
        width: '99%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    back: {
        flex: 1,
        justifyContent: 'center',
    },
    logo: {
        width: '100%',
        height: '50%',
        marginBottom: '50%',
    },
    logoHome: {
        width: 200,
        height: 200,       
    },
    inputContainer: {
        width: '80%',
        marginTop: 10,
    },
    input: {
        backgroundColor: tertiaryColor,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: buttonBorderRadius,
        marginTop: '5%',
    },
    buttonContainer: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%',
    },
    buttonAccessContainer: {
        flexDirection: 'row',
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',  
        marginTop: '10%', 
    },
    button: {
        backgroundColor: secondaryColor,
        width: '100%',
        padding: 10,
        borderRadius: buttonBorderRadius,
        alignItems: 'center',
    },
    buttonRole: {
        backgroundColor: tertiaryColor,
        width: '100%',
        padding: 5,
        borderRadius: buttonBorderRadius,
        alignItems: 'center',
        margin: '5%',
    },
    buttonError: {
        backgroundColor: secondaryColor,
        width: '100%',
        padding: 15,
        borderRadius: buttonBorderRadius,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: tertiaryColor,
        marginTop: 5, 
    },
    buttonOutlineRole: {
        backgroundColor: secondaryColor,
        marginTop: 5,
        borderColor: secondaryColor,
        borderWidth: 2,
    },
    buttonText: {
        color: fourthColor,
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: fourthColor,
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineTextRole: {
        color: fourthColor,
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineTextRoom: {
        color: fourthColor,
        fontWeight: '700',
        fontSize: 16,
        height: 350,
        width: 30,
    },
    spinnerTextStyle: {
        color: 'white',
    },
    spinContainer: {
        position: 'absolute',
        display: 'flex',
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        height: '100%',
        width: '100%',
        zIndex: 100,
    },
    textHome:{
        fontSize: 60,
        marginTop: 40, 
        color: secondaryColor,
        fontWeight: 'bold',        
    },    
    textUser:{
        fontSize: 20,  
        color: tertiaryColor,
        fontWeight: 'bold',               
    },
    textDescription:{
        fontSize: 20,
        marginTop: '10%', 
        color: secondaryColor,
        fontWeight: 'bold',  
        textAlign: 'center',
        margin: 5,
    },   

    
})