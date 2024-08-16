import { ButtonHTMLAttributes, ReactNode } from 'react';
import * as S from '@/components/shared/Button/Button.style';
import { ChildrenProps } from '@/types/common';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonColor = 'light' | 'dark';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: ButtonSize;
  color: ButtonColor;
}

export default function Button({ children, size, color, ...props }: Props) {
  return (
    <S.Button size={size} color={color} {...props}>
      {children}
    </S.Button>
  );
}
