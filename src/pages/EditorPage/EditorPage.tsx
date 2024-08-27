import Button from '@/components/@shared/Button/Button';
import Input from '@/components/@shared/Input/Input';
import { ROUTES } from '@/constants/routes';
import useInput from '@/hooks/useInput';
import * as S from '@/pages/EditorPage/style';
import usePostStore from '@/stores/usePostStore';
import { getToday } from '@/utils/date';
import { useNavigate } from 'react-router-dom';

export default function EditorPage() {
  const navigate = useNavigate();
  const { inputValue: title, handleInputChange: handleTitleChange } =
    useInput();
  const { inputValue: content, handleInputChange: handleContentChange } =
    useInput();
  const { registerPost } = usePostStore();

  const handleRegisterPost = () => {
    if (title.length < 10) return alert('제목은 10자 이상 입력해주세요.');

    registerPost({
      id: Date.now(),
      title,
      content,
      createDate: getToday(),
    });

    alert('게시글이 등록되었습니다.');
    navigate(ROUTES.MAIN);
  };

  return (
    <>
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
      <Button onClick={handleRegisterPost} size="full" color="light">
        등록
      </Button>
    </>
  );
}
