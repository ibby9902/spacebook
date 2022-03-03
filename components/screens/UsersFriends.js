import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet, ActivityIndicator, ScrollView, FlatList} from 'react-native'
import getFriends from '../../functions/requests/getFriends';
import Friend from '../common/Friend';
import theme from '../../assets/theme';
const UsersFriends = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        getFriends(props.route.params.id, setIsLoading, setFriends);
        props.navigation.setOptions({title: `${props.route.params.firstName}'s Friends`})
    }, [])


    if(isLoading){
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.DARK_GREY}}>
            <ActivityIndicator color={theme.TEXT_WHITE}/>
            </View>
        )
    }
    else {
        return (
            <ScrollView style={{backgroundColor: theme.DARK_GREY, flex: 1}}>
                <FlatList data={friends} renderItem={({item}) => <Friend firstName={item.user_givenname} lastName={item.user_familyname} id={item.user_id} state_data={friends}
                navigation={props.navigation}/>}
                keyExtractor={({user_id}, index) => user_id}/>
            </ScrollView>
        )
    }
}

export default UsersFriends;