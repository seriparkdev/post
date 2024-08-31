import styled from 'styled-components';
const HEADER_HEIGHT = 69;
export const Content = styled.main`
  height: calc(100dvh - ${HEADER_HEIGHT}px);
  display: flex;
  flex-direction: column;
`;
