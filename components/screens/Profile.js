import React, { Component } from 'react';
import { Text, ScrollView, View, StyleSheet, FlatList, ActivityIndicator, SafeAreaView} from 'react-native';
import getId from '../../functions/getId';
import getToken from '../../functions/getToken';
import ProfileHeader from '../common/ProfileHeader'
import getUserData from '../../functions/getUserData'
import Post from '../../components/common/Post'
//import getUserData from '../../functions/getUserData'
class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoading: true,
            postData: [],
            userData: {}
        }
        
    }

    getProfileData = async () => {
        const id  = await getId();
        const data = await getUserData(id);
        this.setState({"userData": data})
    }

    getPostData = async () => {
        const id  = await getId();
        const token = await getToken();
        return fetch(`http://localhost:3333/api/1.0.0/user/${id}/post`,{
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
                postData: responseJson
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }

    componentDidMount() {
        this.getProfileData()
        this.getPostData()
    }

    render() {
        if(this.state.isLoading){
            return(
                <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator/>
                </SafeAreaView>
            )
        }
        else{

        return (
            <SafeAreaView style={{backgroundColor: '#191a2c', flex: 1}}>
            <ScrollView >
                <ProfileHeader firstName={this.state.userData.firstName} lastName={this.state.userData.lastName} friendCount={this.state.userData.friendCount}/>
                <FlatList data={this.state.postData} renderItem={({item}) => 
                    <Post data={item}/>
                    } keyExtractor={({post_id}, index) => post_id}/>
            </ScrollView>
            </SafeAreaView>
        )
        }
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: '#eaedf4',
        alignItems: 'center'
    }
})

export default Profile;