import { COLORS } from '@/constants/colors';
import styled from 'styled-components';

export const Header = styled.header`
  color: ${COLORS.WHITE};
  background-color: ${COLORS.BLUE[100]};
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
