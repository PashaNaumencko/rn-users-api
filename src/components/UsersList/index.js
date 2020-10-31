import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import UsersItem from '../UserItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUsers } from '../../routines';
import { resetUsers } from './actions';
import colors from '../../config/color.config';

import {
  Container,
  Spinner
} from './styles';

const UsersList = ({ getUsers, resetUsers, users, navigation, loading }) => {
  const [page, setPage] = useState(1);
  const itemCountPerPage = 10;
  const maxPageNum = 4;

  useEffect(() => {
    onLoad();
  }, []);

  const onLoad = () => {
    getUsers({ page, results: itemCountPerPage });
  };

  const fetchMore = () => {
    if (page < maxPageNum) {
      setPage(prevPage => prevPage + 1);
      onLoad();
    }
  };

  const onUsersPress = (user) => () => {
    navigation.push('UserPage', { user });
  };

  const onRefresh = () => {
    resetUsers();
    setPage(1);
    onLoad();
  }

  const getKeyExtractor = item => item.phone;

  const firstLoading = loading && page === 1;
  const moreLoading = loading && page > 1;


  if(firstLoading) {
    return <Spinner size="large" color={colors.blue}/>
  }

  return (
    <Container>
      <FlatList
        refreshing={firstLoading}
        onRefresh={onRefresh}
        data={users}
        numColumns={1}
        keyExtractor={getKeyExtractor}
        renderItem={({ item: user }) => <UsersItem {...user} onUserPress={onUsersPress(user)} />}
        onEndReached={fetchMore}
        onEndReachedThreshold={0}
        initialNumToRender={10}
      />
      {moreLoading && <Spinner size="large" color={colors.blue} />}
    </Container>
  );
}

UsersList.propTypes = {
  navigation: PropTypes.object,
  users: PropTypes.array,
  loading: PropTypes.bool,
  getUsers: PropTypes.func.isRequired
};

UsersList.navigationOptions = {
  title: 'Users'
};

const mapStateToProps = ({ usersReducer: { users, loading } }) => ({
  users,
  loading
});

const mapDispatchToProps = {
  getUsers,
  resetUsers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList);
