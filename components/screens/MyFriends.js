import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, FlatList, ActivityIndicator, Text} from 'react-native';
import CustomButton from '../common/CustomButton';
import Friend from '../common/Friend';
import getFriends from '../../functions/requests/getFriends';
import theme from '../../assets/theme';
const MyFriends = (props) => {

    const [isLoading, setIsLoading] = useState(true);
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        getFriends(props.route.params.id, setIsLoading, setFriends);
    }, [])
    
    

    if(isLoading)
    {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.DARK_GREY}}>
            <ActivityIndicator color={theme.TEXT_WHITE}/>
            </View>
        )
    }
    else 
    {
        return (
        
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.contentContainer}>
                        <Text style={{color: theme.TEXT_WHITE, fontWeight: 'bold', fontSize: 25}}>Friends</Text>
                    <CustomButton text="Requests" textStyle={styles.btnText} style={styles.button} onClick={() => props.navigation.navigate("Friend Requests")} />
                    </View>
                </View>
                <FlatList data={friends} renderItem={({item}) => <Friend firstName={item.user_givenname} lastName={item.user_familyname} id={item.user_id} state_data={friends}
                navigation={props.navigation}/>}
                keyExtractor={({user_id}, index) => user_id}/>
            </ScrollView>
        )
    }
     
        
    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.DARK_GREY
    },
    header: {
        height: 150,
    },
    contentContainer: {
        marginTop: 50,
        marginHorizontal: 15,
        borderBottomWidth: 1,
        borderColor: theme.TEXT_LESS_WHITE,
        paddingBottom: 10
    },
    button: {
        marginTop: 10,
        width: '25%',
        height: 30,
        backgroundColor: theme.BUTTON_DARK_BLUE,
        borderRadius: 25,
    },
    btnText: {
        color: theme.TEXT_WHITE,
        fontWeight: 'bold'
    }
})

export default MyFriends;