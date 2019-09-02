import React, { useState } from 'react';
import * as apiCall from './tagChecker.api';
import * as Styled from './tagChecker.styled';

export default () => {
  const [result, setResult] = useState(null);
  const [visible, setVisible] = useState(false);
  const handleOnsearch = async (word) => {
    const response = await apiCall.checkTag(word);
    console.log();
    setResult(response.data);
    setVisible(true);
  };

  const handleOnOk = () => {
    setVisible(false);
  };

  return (
  <Styled.LayoutWrapper>
    <Styled.HeaderWrapper>
    </Styled.HeaderWrapper>
    <Styled.ContentWrapper>
      <Styled.SearchWrapper
        placeholder="Search word"
        enterButton="Check"
        size="large"
        onSearch={async value => handleOnsearch(value)}
      />
      <Styled.ModalWrapper
        visible={visible}
        onOk={() => handleOnOk()}
        onCancel={() => handleOnOk()}
      >
        {result}
      </Styled.ModalWrapper>
    </Styled.ContentWrapper>
    <Styled.FooterWrapper>Ant Design ©2018 Created by Ant UED</Styled.FooterWrapper>
  </Styled.LayoutWrapper>);
}