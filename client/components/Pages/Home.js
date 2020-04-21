import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {getUsers} from '../../store/redusers/home/actions';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Hello',
    };
  }

  sayHello() {
    return this.state.name;
  }

  componentDidMount() {
    console.log('componentDidMount', this.props.users);
    this.props.getUsers();
  }

  render() {
    const {users} = this.props;

    return (
      <View>
        <Text style={styles.hello}>
          {/* {users.length !== 0 ? users[0].name : 'cxzc'} */}
          lgmfd;
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  hello: {
    textAlign: 'center',
  },
});

const PutPropsToState = state => {
  const users = state.homeReduser.users;
  console.log('PutPropsToState', users);
  return {users};
};

const putActionToProps = {
  getUsers,
};

export default connect(
  PutPropsToState,
  putActionToProps,
)(Home);
