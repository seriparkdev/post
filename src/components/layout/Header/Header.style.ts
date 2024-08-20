import { COLORS } from '@/constants/colors';
import styled from 'styled-components';

export const Header = styled.header`
  color: ${COLORS.WHITE};
  background-color: ${COLORS.BLUE[100]};
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
`;
