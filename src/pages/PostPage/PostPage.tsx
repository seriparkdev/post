import Button from '@/components/@shared/Button/Button';
import { ROUTES } from '@/constants/routes';
import usePostStore from '@/stores/usePostStore';
import { useEffect } from 'react';
import { generatePath, useNavigate, useParams } from 'react-router-dom';
import * as S from '@/pages/PostPage/style';

export default function PostPage() {
  const navigate = useNavigate();
  const { postId } = useParams();
  const { getPost, deletePost } = usePostStore();
  const postInfo = postId ? getPost(postId) : '';

  const handlePostDelete = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      if (postId) {
        deletePost(postId);
        alert('삭제 되었습니다.');
        navigate(ROUTES.MAIN);
      }
    }
  };

  useEffect(() => {
    if (!postId) {
      alert('해당 게시글을 조회할 수 없습니다.');
      return navigate(ROUTES.MAIN);
    }
  }, [postId, navigate]);

  if (!postInfo) return <>앗, 해당 게시물을 찾을 수 없습니다</>;

  return (
    <>
      <S.TitleWrapper>
        <S.Title>
          <h3>{postInfo.title}</h3>
          <S.ButtonWrapper>
            <Button
              onClick={() =>
                navigate(
                  generatePath(ROUTES.EDIT_POST, {
                    postId,
                  })
                )
              }
              size="medium"
              color="dark"
            >
              수정
            </Button>
            <Button onClick={handlePostDelete} size="medium" color="light">
              삭제
            </Button>
          </S.ButtonWrapper>
        </S.Title>
        <div>작성일자: {postInfo.createDate}</div>
      </S.TitleWrapper>
      <S.Content>{postInfo.content}</S.Content>
    </>
  );
}
