import Button from '@/components/@shared/Button/Button';
import Input from '@/components/@shared/Input/Input';
import { ROUTES } from '@/constants/routes';
import useInput from '@/hooks/useInput';
import * as S from '@/pages/EditorPage/style';
import usePostStore from '@/stores/usePostStore';
import { getToday } from '@/utils/date';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export default function EditorPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { postId } = useParams();
  const { registerPost, updatePost, getPost } = usePostStore();

  const EDITOR_TYPE = location.pathname === ROUTES.NEW_POST ? '등록' : '수정';
  const postInfo =
    EDITOR_TYPE === '수정' && postId ? getPost(postId) : undefined;

  const { inputValue: title, handleInputChange: handleTitleChange } = useInput(
    postInfo?.title
  );
  const { inputValue: content, handleInputChange: handleContentChange } =
    useInput(postInfo?.content);

  const handleSubmitPost = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title.length < 10) return alert('제목은 10자 이상 입력해주세요.');

    if (EDITOR_TYPE === '등록') {
      registerPost({
        id: Date.now(),
        title,
        content,
        createDate: getToday(),
      });
    } else if (EDITOR_TYPE === '수정') {
      updatePost({
        id: postInfo?.id,
        title,
        content,
        createDate: getToday(),
      });
    }

    navigate(ROUTES.MAIN);
  };

  return (
    <S.Form onSubmit={handleSubmitPost}>
      <Input
        value={title}
        onChange={handleTitleChange}
        size="full"
        placeholder="제목을 입력해주세요."
      />
      <S.ContentForm
        value={content}
        onChange={handleContentChange}
        placeholder="본문을 입력해주세요."
      />
      <div>
        <Button
          type="submit"
          disabled={!title || !content}
          size="full"
          color="light"
        >
          {EDITOR_TYPE}
        </Button>
      </div>
    </S.Form>
  );
}
