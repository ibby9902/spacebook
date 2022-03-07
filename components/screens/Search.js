import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, CheckBox, FlatList } from 'react-native';
import CustomInput from '../common/CustomInput';
import theme from '../../assets/theme';
import searchUser from '../../functions/requests/searchUsers';
import CustomButton from '../common/CustomButton';
import SearchedUser from '../common/SearchedUser';
import getId from '../../functions/getId';
import getFriends from '../../functions/requests/getFriends';

const Search = (props) => {
  const [query, setQuery] = useState('');
  const [isSelected, setSelection] = useState(false);
  const [limit, setLimit] = useState(1);
  const [offset, setOffset] = useState(0);
  const [users, setUsers] = useState([]);
  const [myID, setMyID] = useState(0);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    getId().then((id) => {
      setMyID(parseInt(id));
      getFriends(id, null, setFriends);
    });
  }, []);

  const handleSearch = () => {
    const searchIn = (isSelected) ? 'friends' : 'all';
    searchUser(query, searchIn, limit, offset, setUsers, users);
  };

  const handleLoadMore = () => {
    console.log('end');
    const newOffset = offset + limit;
    setOffset(offset + limit);
    const searchIn = (isSelected) ? 'friends' : 'all';
    searchUser(query, searchIn, limit, newOffset, setUsers, users);
  };
  const renderUsers = () => {
    return (
      <FlatList
        data={users}
        renderItem={({ item }) => <SearchedUser firstName={item.user_givenname} lastName={item.user_familyname} id={item.user_id} myID={myID} friends={friends} navigation={props.navigation} />}
        keyExtractor={({ user_id }, index) => user_id}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0}
      />
    );
  };

  return (
    <View style={styles.container}>
      <CustomInput placeholder="Search on Spacebook" styles={styles.input} setValue={(val) => setQuery(val)} />
      <CustomButton text="Search" style={styles.button} textStyle={{ color: theme.TEXT_WHITE, fontWeight: 'bold' }} onClick={handleSearch} />
      <View style={{ flexDirection: 'row' }}>
        <CheckBox value={isSelected} onValueChange={setSelection} />
        <Text style={{ color: theme.TEXT_WHITE, marginLeft: 5 }}>Friends Only</Text>
      </View>
      {renderUsers()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.DARK_GREY,
    padding: 10,
  },
  input: {
    width: '100%',
    height: 40,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: theme.YELLOW,
  },
});

export default Search;
