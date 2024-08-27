import usePostStore from '@/stores/usePostStore';
import * as S from '@/pages/MainPage/style';
import { generatePath, useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';

export default function MainPage() {
  const navigate = useNavigate();
  const { postList } = usePostStore();

  return (
    <S.PostList>
      {postList.map(({ title, createDate, id }) => (
        <S.PostItem
          key={id}
          onClick={() =>
            navigate(
              generatePath(ROUTES.POST, {
                postId: id,
              })
            )
          }
        >
          <h3>{title}</h3>
          <p>{createDate}</p>
        </S.PostItem>
      ))}
    </S.PostList>
  );
}
