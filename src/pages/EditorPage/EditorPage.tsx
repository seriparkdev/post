import Input from '@/components/@shared/Input/Input';
import * as S from '@/pages/EditorPage/style';

export default function EditorPage() {
  return (
    <>
      <Input size="full" placeholder="제목을 입력해주세요." />
      <S.ContentForm placeholder="본문을 입력해주세요." />
    </>
  );
}
