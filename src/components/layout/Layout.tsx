import Content from './Content/Content';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <main>
      <Header>게시판</Header>
      <Content>
        <Outlet />
      </Content>
    </main>
  );
}