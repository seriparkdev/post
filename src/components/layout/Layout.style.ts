import styled from 'styled-components';
import { COLORS } from '@/constants/colors';

const HEADER_HEIGHT = 69;

export const Header = styled.header`
  color: ${COLORS.WHITE};
  background-color: ${COLORS.BLUE[100]};
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.main`
  height: calc(100dvh - ${HEADER_HEIGHT}px);
  display: flex;
  flex-direction: column;
`;
