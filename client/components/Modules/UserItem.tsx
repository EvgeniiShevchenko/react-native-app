import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BoxShadow} from 'react-native-shadow';
import {View, Text} from 'react-native';
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
// import {faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components/native';
// import {connect} from 'react-redux';
// types
import {User} from '../../types';

const shadowOpt = {
  width: 30,
  height: 27,
  color: '#000000',
  border: 3,
  radius: 13,
  opacity: 0.3,
  x: 0,
  y: 2,
  style: {width: 30, height: 30},
};

interface Props {
  id: string;
  item: User;
}

const UserItem: FC<Props> = ({id, item}) => {
  // const sayHello = () => {
  //   console.log('hello');
  // };

  const deleteItems = () => {
    console.log('delete item');
  };

  // const changeItems = () => {
  //   console.log('change item');
  // };

  return (
    <Container id={id}>
      <Row>
        <Title>name:</Title>
        <Description>{`${item.name}`}</Description>
      </Row>
      <Row>
        <Title>surname:</Title>
        <Description>{`${item.surname}`}</Description>
      </Row>
      <Row>
        <Title>birth date:</Title>
        <Description>{`${item.bornDate}`}</Description>
      </Row>
      <Row>
        <Title accessibilityRole="link">phone:</Title>
        <Description>{`${item.phone}`}</Description>
      </Row>
      <Row>
        <Title>email:</Title>
        <Description
          accessibilityHint="kclmdslvkml"
          accessibilityRole="link"
          numberOfLines={1}
          dataDetectorType="link"
          ellipsizeMode="tail">{`${item.email}`}</Description>
      </Row>
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}>
        <ButtonContainer>
          <ButtonWrapper>
            <BoxShadow setting={shadowOpt}>
              <Gradient colors={['#4c669f', '#3b5998', '#192f6a']}>
                <ChangeBtn onPress={deleteItems}>
                  {/* <ChangeBtnIcon icon={faEdit} /> */}
                </ChangeBtn>
              </Gradient>
            </BoxShadow>
            <BoxShadow setting={shadowOpt}>
              <Gradient colors={['#4c669f', '#3b5998', '#192f6a']}>
                <ChangeBtn onPress={deleteItems}>
                  {/* <DeleteBtnIcon icon={faTrash} /> */}
                </ChangeBtn>
              </Gradient>
            </BoxShadow>
          </ButtonWrapper>
        </ButtonContainer>
      </LinearGradient>
    </Container>
  );
};

export default UserItem;

// class UserItem extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   sayHello() {
//     console.log('hello');
//   }

//   deleteItems = () => {
//     console.log('delete item');
//   };

//   changeItems = () => {
//     console.log('change item');
//   };

//   render() {
//     const {item, id} = this.props;

//     return (
//       <Container id={id}>
//         <Row>
//           <Title>name:</Title>
//           <Description>{`${item.name}`}</Description>
//         </Row>
//         <Row>
//           <Title>surname:</Title>
//           <Description>{`${item.surname}`}</Description>
//         </Row>
//         <Row>
//           <Title>birth date:</Title>
//           <Description>{`${item.bornDate}`}</Description>
//         </Row>
//         <Row>
//           <Title accessibilityRole="link">phone:</Title>
//           <Description>{`${item.phone}`}</Description>
//         </Row>
//         <Row>
//           <Title>email:</Title>
//           <Description
//             accessibilityHint="kclmdslvkml"
//             accessibilityRole="link"
//             numberOfLines={1}
//             dataDetectorType="link"
//             ellipsizeMode="tail">{`${item.email}`}</Description>
//         </Row>
//         <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}>
//           <ButtonContainer>
//             <ButtonWrapper>
//               <BoxShadow setting={shadowOpt}>
//                 <Gradient colors={['#4c669f', '#3b5998', '#192f6a']}>
//                   <ChangeBtn title="#" onPress={this.deleteItems}>
//                     {/* <ChangeBtnIcon icon={faEdit} /> */}
//                   </ChangeBtn>
//                 </Gradient>
//               </BoxShadow>
//               <BoxShadow setting={shadowOpt}>
//                 <Gradient colors={['#4c669f', '#3b5998', '#192f6a']}>
//                   <ChangeBtn title="#" onPress={this.deleteItems}>
//                     {/* <DeleteBtnIcon icon={faTrash} /> */}
//                   </ChangeBtn>
//                 </Gradient>
//               </BoxShadow>
//             </ButtonWrapper>
//           </ButtonContainer>
//         </LinearGradient>
//       </Container>
//     );
//   }
// }

// export default connect()(UserItem);

const Container = styled.View``;

const Row = styled(View)`
  flex-direction: row;
  padding: 3px 0;

  border-bottom-width: 1px;
`;

const Title = styled(Text)`
  width: 50%;
  padding-left: 20px;
`;

const Description = styled(Text)`
  width: 50%;
  padding-right: 20px;
`;

const ButtonContainer = styled(View)`
  flex-direction: row;
  justify-content: flex-end;

  padding: 0 20px;
`;

const ButtonWrapper = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 40px;
  width: 70px;
`;

const Gradient = styled(LinearGradient)`
  border-radius: 15px;
`;

const ChangeBtn = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 30px;
  height: 30px;
`;

// const ChangeBtnIcon = styled(FontAwesomeIcon)`
//   color: white;
// `;

// const DeleteBtnIcon = styled(FontAwesomeIcon)`
//   color: red;
// `;
