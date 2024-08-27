import { getToday } from '@/utils/date';
import { create } from 'zustand';

interface StoreState {
  postList: PostInfo[];
  registerPost: (newPost: PostInfo) => void;
  updatePost: (updatedPost: PostInfo) => void;
  getPost: (postId: string) => PostInfo | undefined;
  deletePost: (postId: string) => void;
}

interface PostInfo {
  id?: number;
  title: string;
  content: string;
  createDate: string;
}

const usePostStore = create<StoreState>((set, get) => ({
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
  updatePost: (updatedPost: PostInfo) =>
    set((state) => ({
      postList: state.postList.map((postInfo) =>
        postInfo.id === updatedPost.id
          ? { ...postInfo, ...updatedPost }
          : postInfo
      ),
    })),
  getPost: (postId: string) =>
    get().postList.find((postInfo) => postInfo.id === Number(postId)),
  deletePost: (postId: string) =>
    set((state) => ({
      postList: state.postList.filter(
        (postInfo) => postInfo.id !== Number(postId)
      ),
    })),
}));

export default usePostStore;
