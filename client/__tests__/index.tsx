import React from 'react';
import {render} from '@testing-library/react-native';
// components
import UserList from '../components/Modules/UserList';
import UserItem from '../components/Modules/UserItem';
// mocks
import usersList from '../mocks/user.json';

describe('test user', () => {
  it('test render', () => {
    const {getByText} = render(<UserList users={usersList} />);
    const userName = 'Bob';

    const exitItem = getByText(userName);

    expect(exitItem).toBe(userName);

    // console.log(
    //   '🚀 ~ file: index-test.tsx ~ line 9 ~ it ~ findAllByText',
    //   findAllByText,
    // );
  });

  it('user exist', () => {
    const {getByText} = render(<UserItem item={usersList} id="25" />);
  });
});
