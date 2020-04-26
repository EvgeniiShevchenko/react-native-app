import React from 'react';
import styled from 'styled-components';
import UserItem from '../../components/Modules/UserItem';

class UserList extends React.Component {
  constructor(props) {
    super(props);
  }

  sayHello = () => {
    console.log('hello', this.props);
  };

  render() {
    const usersList = this.props.users.map((item, index) => {
      return <UserItem key={'user' + index} id={'user' + index} item={item} />;
    });

    return (
      <>
        <Container>
          {usersList}
          <ButtonWrapper>
            <AddUserBtn title="Create new user" onPress={this.sayHello} />
          </ButtonWrapper>
        </Container>
      </>
    );
  }
}

export default UserList;

const Container = styled.View`
  padding-bottom: 10px;
`;

const ButtonWrapper = styled.View`
  margin: 0 auto;
  margin-top: 10px;

  width: 200px;
`;

const AddUserBtn = styled.Button`
  width: 100px;
`;
