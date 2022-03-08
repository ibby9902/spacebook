import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, FlatList } from 'react-native';
import theme from '../../assets/theme';
import getDrafts from '../../functions/getDrafts';
import Draft from '../common/Draft';

const Drafts = (props) => {
  const [drafts, setDrafts] = useState([]);
  const [draftDeleted, setDraftDeleted] = useState(false);
  useEffect(() => {
    getDrafts().then((res) => setDrafts(res));
  }, []);

  useEffect(() => {
    getDrafts().then((res) => setDrafts(res));
    setDraftDeleted(false);
  }, [draftDeleted]);

  return (
    <View style={styles.container}>
      <FlatList
        data={drafts}
        renderItem={({ item, index }) => <Draft text={item.post} index={index} setDraftDeleted={setDraftDeleted} id={props.route.params.id} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.DARK_GREY,
    padding: 10,
  },
});

export default Drafts;
