import React, { Component } from 'react';
import { View, ScrollView, StyleSheet} from 'react-native';
import CustomButton from '../common/CustomButton';
import Friend from '../common/Friend';
class Friends extends Component {
    constructor(props){
        super(props);
        
    }

    

    render(){
        return (
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <CustomButton text="Friend Requests" style={styles.button} onClick={() => this.props.navigation.navigate("Friend Requests")} />
                </View>
                <Friend/>
                {/* List of Friend Components */}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eaedf4'
    },
    header: {
        height: 200,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'

    },
    button: {
        width: '20%',
        backgroundColor: 'red'
    }
})

export default Friends;