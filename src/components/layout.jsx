import React from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
const { Content, Footer } = Layout;
const items = new Array(15).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));
const PageLayout = ({children}) => {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout className='latoutPage' >
   
      <Content
        style={{
          padding: '0 48px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
        
        </Breadcrumb>
        <div
        className='contentStyle'
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}

        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Todo-App ©{new Date().getFullYear()} Created by Noman Pervaiz
      </Footer>
    </Layout>
  );
};
export default PageLayout;