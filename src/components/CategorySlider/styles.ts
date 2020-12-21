import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: {
    justifyContent: 'space-between',
  },
})`
  /* flex-direction: column; */
  /* justify-content: space-between; */
  margin-top: 40px;
`;

export const CategoryContainer = styled.TouchableOpacity`
  background-color: rgba(39, 221, 242, 0.5);
  height: 32px;
  width: 92px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-right: 16px;
`;

export const Text = styled.Text`
  color: #ffffff;
  font-family: 'Poppins-Medium';
  font-size: 18px;
  line-height: 27px;
  max-width: 80px;
  max-height: 26px;
`;
