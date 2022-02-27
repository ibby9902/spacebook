import React ,{ useState, useEffect } from 'react';
import { ScrollView, StyleSheet, FlatList, Text, View, ActivityIndicator} from 'react-native';
import FriendRequest from '../common/FriendRequest';
import getFriendRequests from '../../functions/requests/getFriendRequests';
import theme from '../../assets/theme';
const FriendRequests = (props) => {

    const [isLoading, setIsLoading] = useState(true);
    const [friendRequests, setFriendRequests] = useState([]);
    const [emptyRequests, setEmptyRequests] = useState(true);

    useEffect(() => {
        getFriendRequests(setIsLoading, setFriendRequests, setEmptyRequests)
    }, [])

    if(isLoading){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.DARK_GREY}}>
                <ActivityIndicator color={theme.TEXT_WHITE}/>
            </View>
        )
    }
    else if(emptyRequests)
    {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.DARK_GREY}}>
                <Text style={{fontWeight: 'bold', color: theme.TEXT_WHITE}}>No New Requests</Text>
                <Text style={{color: theme.TEXT_LESS_WHITE}}>When people send you friend requests, they'll appear here.</Text>
            </View>
        )
    }
    else {
        return (
            <ScrollView style={{flex: 1, backgroundColor: theme.DARK_GREY, }}>
                
                    <FlatList data={friendRequests} renderItem={({item}) => <FriendRequest firstName={item.first_name} lastName={item.last_name} id={item.user_id} data={friendRequests}/>}
                    keyExtractor={({user_id}, index) => user_id}/>

                
            </ScrollView>
        ) 

    }
}
export default FriendRequests;