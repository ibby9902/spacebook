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
            firstName: '',
            lastName: '',
            friendCount: 0,
        }
        
    }

    getProfileData = async () => {
        const id  = await getId();
        const data = await getUserData(id);
        this.setState(data)
    }

    componentDidMount() {
        this.getProfileData()
    }

    render() {
        return (
            <ScrollView >
                <ProfileHeader firstName={this.state.firstName} lastName={this.state.lastName} friendCount={this.state.friendCount}/>
                <View style={styles.content}>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </View>
                {/* <FlatList style={styles.content}/> */}
                
            </ScrollView>
        )
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