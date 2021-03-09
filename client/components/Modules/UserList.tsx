import React, {FC} from 'react';
import {Button, View} from 'react-native';
import styled from 'styled-components';
// components
import UserItem from './UserItem';
// types
import {User} from '../../types';

interface Props {
  users: User[];
}

const Userlist: FC<Props> = ({users}) => {
  const sayHello = () => {
    console.log('hello', users);
  };

  const usersList = users.map((item, index) => {
    return <UserItem key={'user' + index} id={'user' + index} item={item} />;
  });

  return (
    <>
      <Container>
        {usersList}
        <ButtonWrapper>
          <AddUserBtn title="Create new user" onPress={sayHello} />
        </ButtonWrapper>
      </Container>
    </>
  );
};

// class UserList extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   sayHello = () => {
//     console.log('hello', this.props);
//   };

//   render() {
//     const usersList = this.props.users.map((item, index) => {
//       return <UserItem key={'user' + index} id={'user' + index} item={item} />;
//     });

//     return (
//       <>
//         <Container>
//           {usersList}
//           <ButtonWrapper>
//             <AddUserBtn title="Create new user" onPress={this.sayHello} />
//           </ButtonWrapper>
//         </Container>
//       </>
//     );
//   }
// }

export default Userlist;

const Container = styled(View)`
  padding-bottom: 10px;
`;

const ButtonWrapper = styled(View)`
  margin: 0 auto;
  margin-top: 10px;

  width: 200px;
`;

const AddUserBtn = styled(Button)`
  width: 100px;
`;
