import Button from '@/components/@shared/Button/Button';
import * as S from '@/components/layout/Header/Header.style';
import { ROUTES } from '@/constants/routes';
import { ChildrenProps } from '@/types/common';
import { useNavigate } from 'react-router-dom';

export default function Header({ children }: ChildrenProps) {
  const navigate = useNavigate();

  return (
    <S.Header>
      <h2>{children}</h2>
      <Button
        size="medium"
        color="light"
        onClick={() => navigate(ROUTES.NEW_POST)}
      >
        작성
      </Button>
    </S.Header>
  );
}
