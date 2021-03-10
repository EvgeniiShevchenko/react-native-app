import React from 'react';
import {render} from '@testing-library/react-native';
// components
import UserItem from '../components/Modules/UserItem';
// mocks
import usersList from '../mocks/user.json';

describe('Client manager', () => {
  it('client exist', () => {
    const {getByText} = render(<UserItem item={usersList[0]} id="25" />);
    const userName = 'Bob';
    const exitItem = getByText(userName);

    expect(exitItem).toBeTruthy();
  });
});
