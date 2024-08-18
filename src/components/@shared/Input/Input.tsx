import * as S from '@/components/@shared/Input/Input.style';
import { ElementSize } from '@/types/common';
import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  size: ElementSize;
}

export default function Input({ size, ...rest }: Props) {
  return <S.Input size={size} {...rest} />;
}
