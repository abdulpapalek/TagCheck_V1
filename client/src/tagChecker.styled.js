import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Input, Layout, Modal } from 'antd';

const { Header, Content, Footer } = Layout;
const { Search } = Input;

export const SearchWrapper = styled(Search)` 
  minHeight: 280;
  margin: 50px 200px;
  padding-right: 400px;
`;

export const LayoutWrapper = styled(Layout)`
`;
export const HeaderWrapper = styled(Header)`

`;
export const ContentWrapper = styled(Content)`
  margin: auto;
`;
export const FooterWrapper = styled(Footer)`
  text-align: center;
`;

export const ModalWrapper = styled(Modal)`
`;