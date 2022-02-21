import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, FlatList} from 'react-native';
import getToken from '../../functions/getToken';
import getId from '../../functions/getId'
import CustomButton from '../common/CustomButton';
import Friend from '../common/Friend';
class Friends extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            friendData: []
        }
        
    }

    getFriendData = async (id) => {
        const token =  await getToken();
        return fetch(`http://localhost:3333/api/1.0.0/user/${id}/friends`,{
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
            console.log(error)
        })
    }

    componentDidMount() {
        getId().then((id) => this.getFriendData(id))
    }

    render(){
        return (
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <CustomButton text="Friend Requests" style={styles.button} onClick={() => this.props.navigation.navigate("Friend Requests")} />
                </View>
                <FlatList data={this.state.friendData} renderItem={({item}) => <Friend firstName={item.user_givenname} lastName={item.user_familyname} id={item.user_id} state_data={this.state.friendData}/>}
                keyExtractor={({user_id}, index) => user_id}/>
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