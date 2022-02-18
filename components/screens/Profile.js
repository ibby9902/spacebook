import React, { Component } from 'react';
import { Text, ScrollView, View, StyleSheet, FlatList} from 'react-native';
import getId from '../../functions/getId';
import getToken from '../../functions/getToken';
import ProfileHeader from '../common/ProfileHeader'
//import getUserData from '../../functions/getUserData'
class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            friendCount: 0,
        }
        
    }

    getUserData = async () => {
        const id = await getId();
        const token = await getToken();
        return fetch(`http://localhost:3333/api/1.0.0/user/${id}`, {
                headers: {
                    "X-AUTHORIZATION": token,
                },
                method: 'get'
            })
            .then((response) => {
                if(response.status === 200)
                    return response.json();
            })
            .then((responseJson) => {
                this.setState({firstName: responseJson.first_name})
                this.setState({lastName: responseJson.last_name})
                this.setState({friendCount: responseJson.friend_count})
            } )
            .catch((error) => {
                console.log(error)
            })
    }

    componentDidMount() {
        this.getUserData();
    }

    render() {
        return (
            <ScrollView>
                <ProfileHeader firstName={this.state.firstName} lastName={this.state.lastName} friendCount={this.state.friendCount}/>
                {/* <FlatList style={styles.content}/> */}
                
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    content: {

    }
})

export default Profile;