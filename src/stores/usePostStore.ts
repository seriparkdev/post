import { getToday } from '@/utils/date';
import { create } from 'zustand';

interface StoreState {
  postList: PostInfo[];
  registerPost: (newPost: PostInfo) => void;
}

interface PostInfo {
  id: number;
  title: string;
  content: string;
  createDate: string;
}

const usePostStore = create<StoreState>((set) => ({
  postList: [
    {
      id: Date.now() + 1,
      title: '게시물을 작성해보세요!',
      content: '본문 컨텐츠✏️',
      createDate: getToday(),
    },
    {
      id: Date.now() + 2,
      title: '게시판 만들기',
      content: '본문 컨텐츠✏️',
      createDate: getToday(),
    },
    {
      id: Date.now() + 3,
      title: 'Reat Framework Study',
      content: '본문 컨텐츠✏️',
      createDate: getToday(),
    },
  ],
  registerPost: (newPost: PostInfo) =>
    set((state) => ({
      postList: [newPost, ...state.postList],
    })),
}));

export default usePostStore;
