import { ButtonHTMLAttributes, ReactNode } from 'react';
import * as S from '@/components/@shared/Button/Button.style';
import { ElementSize } from '@/types/common';

export type ButtonColor = 'light' | 'dark';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: ElementSize;
  color: ButtonColor;
}

export default function Button({ children, size, color, ...props }: Props) {
  return (
    <S.Button size={size} color={color} {...props}>
      {children}
    </S.Button>
  );
}
