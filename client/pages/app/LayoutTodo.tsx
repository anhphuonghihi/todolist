import React from 'react'

type Props = {}
import { Layout, Menu } from 'antd';
import TodoList from './TodoList';
const LayoutTodo = (props: Props) => {

    const { Header, Content, Footer, Sider } = Layout;
    return (
        <Layout>
            <Header
             
            >
Header
            </Header>
            <Layout>
                <Sider>left sidebar</Sider>
                <Content><TodoList /></Content>
                <Sider>right sidebar</Sider>
            </Layout>
            <Footer>footer</Footer>
        </Layout>
    )
}

export default LayoutTodo
