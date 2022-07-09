import styled from 'styled-components';
import pageBg from './pageBg.png';

export const IndexPageStyle = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0px;
  padding: 10px 0 0 0;
  background: url(${pageBg}) center center no-repeat;
  background-size: cover;
`;
export const IndexPageContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
 
`;
export const Center=styled.div`
flex: 1;
`
