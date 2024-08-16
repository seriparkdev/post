import * as S from '@/components/layout/Header/Header.style';
import { ChildrenProps } from '@/types/common';

export default function Header({ children }: ChildrenProps) {
  return <S.Header>{children}</S.Header>;
}
