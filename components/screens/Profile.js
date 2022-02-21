import React, { Component } from 'react';
import { Text, ScrollView, View, StyleSheet, FlatList} from 'react-native';
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
            postData: []
        }
        
    }

    getProfileData = async () => {
        const id  = await getId();
        const data = await getUserData(id);
        this.setState(data)
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
            return(<View><Text>LOADNIG</Text></View>)
        }
        else{

        return (
            <ScrollView >
                <ProfileHeader firstName={this.state.firstName} lastName={this.state.lastName} friendCount={this.state.friendCount}/>
                <View style={styles.content}>
                </View>
                <FlatList data={this.state.postData} renderItem={({item}) => 
                    <Post data={item}/>
                    } keyExtractor={({post_id}, index) => post_id}/>
                
            </ScrollView>
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