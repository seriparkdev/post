import * as S from '@/components/layout/Content/Content.style';
import { ChildrenProps } from '@/types/common';

export default function Content({ children }: ChildrenProps) {
  return <S.Content>{children}</S.Content>;
}
