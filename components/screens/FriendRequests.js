import React ,{ Component } from 'react';
import { ScrollView, StyleSheet, FlatList, Text, View} from 'react-native';
import FriendRequest from '../common/FriendRequest';
import getToken from '../../functions/getToken';
class FriendRequests extends Component {

    constructor(props){
        super(props)
        this.state = {
            isLoading: true,
            friendData: []
        }
    }

    getFriendData = async () => {
        const token = await getToken();
        return fetch(`http://localhost:3333/api/1.0.0/friendrequests`, {
            headers: {
                "X-AUTHORIZATION": token
            },
            method: 'get'
        })
        .then((response) => {
            if(response.status === 200)
                return response.json();
        })
        .then((responseJson) => {
            this.setState({
                isLoading: false,
                friendData: responseJson})
        })
        .catch((error) => {
            console.log(error);
        })

    }

    componentDidMount(){
        this.getFriendData();
        
    }

    render() {

        if(this.state.isLoading){
            return(<View><Text>LOADNIG</Text></View>)
        }
        return (
            <ScrollView>
                <FlatList data={this.state.friendData} renderItem={({item}) => <FriendRequest firstName={item.first_name} lastName={item.last_name} id={item.user_id}/>}
                keyExtractor={({user_id}, index) => user_id}/>
               
            </ScrollView>
        )
    }
}

export default FriendRequests;