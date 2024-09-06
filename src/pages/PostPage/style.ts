import { COLORS } from '@/constants/colors';
import { styled } from 'styled-components';

export const TitleWrapper = styled.div`
  padding: 0px 15px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

export const Content = styled.div`
  border-top: solid 1px ${COLORS.GREY[20]};
  margin-top: 20px;
  padding: 15px;
`;
