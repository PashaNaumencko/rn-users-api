import React, { useState, useEffect } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import UsersItem from '../UserItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUsers } from '../../routines';
import colors from '../../config/color.config';

import {
  Container,
  Spinner
} from './styles';

const UsersList = ({ getUsers, users, navigation, loading }) => {
  const [page, setPage] = useState(1);
  const itemCountPerPage = 10;

  const navigationOptions = {
    title: 'Gallery'
  };

  useEffect(() => {
    onLoad();
  }, [users]);

  const onLoad = () => {
    getUsers({ page, limit: itemCountPerPage });
  };

  const fetchMore = () => {
    setPage(
      (prevState) => ({
        page: prevState.page + 1
      }),
      onLoad
    );
  }

  const onUsersPress = (user) => () => {
    navigation.push('UsersPage', { userInfo: user });
  };

  onRefresh = () => {
    setPage(1);
    onLoad();
  }

  // getRenderItem = ({ item }) => {
  //   const { urls: { regular: imgUrl }, user: { username, profile_image: { medium: avatarUrl } }, description } = item;

  //   const title = description || 'Untitled';

  //   return
  // };

  const getKeyExtractor = item => item.id;

  if(loading) {
    return <ActivityIndicator size="large" color={colors.black} />
  }

  // const firstLoading = loading && page === 1;
  // const moreLoading = loading && page > 1;

  return (
    <Container>
      <UsersItem avatarUrl="https://randomuser.me/api/portraits/thumb/women/67.jpg" />
      {/* <FlatList
        refreshing={firstLoading}
        onRefresh={onRefresh}
        data={users}
        // horizontal={false}
        numColumns={1}
        keyExtractor={getKeyExtractor}
        renderItem={this.getRenderItem}
        onEndReached={this.fetchMore}
        onEndReachedThreshold={0}
        initialNumToRender={6}
      /> */}
      {/* {moreLoading && <ActivityIndicator style={styles.loader} size="large" color={colors.blue} />} */}
    </Container>
  );
}

UsersList.propTypes = {
  navigation: PropTypes.object,
  users: PropTypes.object,
  loading: PropTypes.bool,
  getUsers: PropTypes.func.isRequired
};

const mapStateToProps = ({ usersReducer: { users, loading } }) => ({
  users,
  loading
});

const mapDispatchToProps = {
  getUsers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList);
