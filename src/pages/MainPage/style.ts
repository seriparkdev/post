import { COLORS } from '@/constants/colors';
import styled from 'styled-components';

export const PostItem = styled.li`
  padding: 0px 15px;
  border-bottom: solid 1px ${COLORS.GREY[20]};
  cursor: pointer;
`;

export const PostList = styled.ul`
  width: 100%;
`;
