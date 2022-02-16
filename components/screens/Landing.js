import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


class Landing extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <View style={styles.textContainer}><Text style={styles.headerText}>Spacebook</Text></View>
                </View>
                <View style={styles.footerContainer} >
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={styles.loginButton} onPress={() => this.props.navigation.navigate("Login")}><Text style={{color: 'dodgerblue'}}>Log in</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.signupButton} onPress={()=> this.props.navigation.navigate("Signup")}><Text style={{color: 'white'}}>Sign up</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        )

    }

        
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
    headerContainer: {
        width: '100%',
        flex: 1,
        backgroundColor: 'green'
    },
    footerContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: 'blue',
        flexDirection: 'column-reverse',
    },
    headerText: {
        fontSize: 40,
        fontWeight: 'bold',
        marginLeft: 50,
    },
    textContainer: {
        flex: 0.5,
        flexDirection: 'column-reverse',
        backgroundColor: 'yellow',
        width: '100%',
        
    },
    loginButton: {
        flexDirection: 'row',
        width: '80%',
        height: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 20,
        borderRadius: 15,
        
    },
    signupButton: {
        flexDirection: 'row',
        width: '80%',
        height: 50,
        backgroundColor: 'dodgerblue',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'white'
    },
    buttonsContainer: {
        marginBottom: 80,
    }
})


export default Landing;