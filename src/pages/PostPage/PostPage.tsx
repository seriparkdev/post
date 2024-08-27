import Button from '@/components/@shared/Button/Button';
import { ROUTES } from '@/constants/routes';
import usePostStore from '@/stores/usePostStore';
import { useEffect } from 'react';
import { generatePath, useNavigate, useParams } from 'react-router-dom';

export default function PostPage() {
  const navigate = useNavigate();
  const { postId } = useParams();
  const { getPost } = usePostStore();
  const postInfo = postId ? getPost(postId) : '';

  useEffect(() => {
    if (!postId) {
      alert('해당 게시글을 조회할 수 없습니다.');
      return navigate(ROUTES.MAIN);
    }
  }, [postId, navigate]);

  if (!postInfo) return <>앗, 해당 게시물을 찾을 수 없습니다</>;

  return (
    <>
      <div>제목: {postInfo.title}</div>
      <div>작성 일자: {postInfo.createDate}</div>
      <div>본문: {postInfo.content}</div>
      <Button
        onClick={() =>
          navigate(
            generatePath(ROUTES.EDIT_POST, {
              postId,
            })
          )
        }
        size="full"
        color="light"
      >
        수정
      </Button>
    </>
  );
}
