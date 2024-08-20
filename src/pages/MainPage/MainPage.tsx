import usePostStore from '@/stores/usePostStore';
import * as S from '@/pages/MainPage/style';

export default function MainPage() {
  const { postList } = usePostStore();

  return (
    <S.PostList>
      {postList.map(({ title, createDate }, index) => (
        <S.PostItem key={title + index}>
          <h3>{title}</h3>
          <p>{createDate}</p>
        </S.PostItem>
      ))}
    </S.PostList>
  );
}
