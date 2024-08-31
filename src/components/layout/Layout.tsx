import { Link, Outlet, useNavigate } from 'react-router-dom';
import * as S from '@/components/Layout/Layout.style';
import Button from '@/components/@shared/Button/Button';
import { ROUTES } from '@/constants/routes';

export default function Layout() {
  const navigate = useNavigate();

  return (
    <>
      <S.Header>
        <Link to={ROUTES.MAIN}>
          <h2>게시판</h2>
        </Link>
        <Button
          size="medium"
          color="light"
          onClick={() => navigate(ROUTES.NEW_POST)}
        >
          작성
        </Button>
      </S.Header>
      <S.Content>
        <Outlet />
      </S.Content>
    </>
  );
}
