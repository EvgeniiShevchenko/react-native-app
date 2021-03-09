import React, {FC, useEffect} from 'react';
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

const Home: FC = () => {
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

// class Home extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() {
//     this.props.getUsers();
//   }

//   render() {
//     const {users} = this.props; // Props

//     return (
//       <Container>
//         <ScrollView>
//           <UserList users={users} />
//         </ScrollView>
//       </Container>
//     );
//   }
// }

// const PutPropsToState = state => {
//   const users = state.homeReduser.users;

//   return {users};
// };

// const putActionToProps = {
//   getUsers,
// };

// export default connect(
//   PutPropsToState,
//   putActionToProps,
// )(Home);

export default Home;

const Container = styled(SafeAreaView)`
  flex: 1;
`;
