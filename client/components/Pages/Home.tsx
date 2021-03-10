import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';
import {SafeAreaView, ScrollView} from 'react-native';
import {getUsers} from '../../store/redusers/home/actions';
import UserList from '../Modules/UserList';

type state = {
  homeReduser: {
    users: any;
  };
};

export default () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state as state);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <Container>
      <ScrollView>
        <UserList users={users.homeReduser.users} />
      </ScrollView>
    </Container>
  );
};

const Container = styled(SafeAreaView)`
  flex: 1;
`;
