import { create } from 'zustand';

interface StoreState {
  postList: {
    id: number;
    title: string;
    content: string;
    createDate: string;
  }[];
}

const usePostStore = create<StoreState>(() => ({
  postList: [
    {
      id: 1,
      title: '게시물을 작성해보세요!',
      content: '본문 컨텐츠✏️',
      createDate: new Date().toISOString().split('T')[0],
    },
    {
      id: 2,
      title: '게시판 만들기',
      content: '본문 컨텐츠✏️',
      createDate: new Date().toISOString().split('T')[0],
    },
    {
      id: 3,
      title: 'Reat Framework Study',
      content: '본문 컨텐츠✏️',
      createDate: new Date().toISOString().split('T')[0],
    },
  ],
}));

export default usePostStore;
