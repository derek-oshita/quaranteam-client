// IMPORTS
import React from 'react'; 
import StateName from '../../components/StateName/StateName'; 
import StateImages from '../StateImages/StateImages'; 
import './StateContainer.less'; 
// ANTDESIGN
import { Layout, Menu, Breadcrumb } from 'antd';
import { NavLink } from 'react-router-dom'; 
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card, Col, Row } from 'antd';
// VARIABLES
const { Header, Content, Footer } = Layout;
const { Meta } = Card;

// STATE CONTAINER
class StateContainer extends React.Component {
    state = {
        state: {}, 
        collapsed: false,
        
    };  
    componentDidMount() {
        fetch(`https://api.covidtracking.com/v1/states/${this.props.match.params.state}/current.json`)
            .then((response) => (response.json()))
            .then((data) => {
                this.setState({
                    state: data
                })
            })
            .catch((err) => console.log(err))
    }; 
    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
      };
    render() {
        const stateInfo = this.state.state; 
        // function formatDate (updatedAt) {
        //     let updatedAt = stateInfo.lastUpdateEt; 
        // }
        return(
            <Layout className="layout">
                {/* CONTENT */}
                <Content style={{ padding: '0 50px' }}>
                {/* BREADCUMB LINKS */}
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item><NavLink className="nav-link" exact to='/'>Home</NavLink></Breadcrumb.Item>
                    <Breadcrumb.Item><NavLink className="nav-link" exact to='/states'>State Data</NavLink></Breadcrumb.Item>
                    <Breadcrumb.Item><StateName abbrev={stateInfo.state}/></Breadcrumb.Item>
                </Breadcrumb>
                {/* DATA CARDS */}
                <div className="site-layout-content">
                {/* <StateName abbrev={stateInfo.state} className="state-name"/>  */}
                {/* STATEIMAGES WILL GO HERE */}
                    <StateImages abbrev={stateInfo.state}/>

                    {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_California.svg/1200px-Flag_of_California.svg.png"></img> */}
                    <div className="site-card-wrapper">
                    <Row gutter={16}>
                    <Col span={8}>
                        <Card title="Data Quality:" bordered={false}>
                        <strong>{stateInfo.dataQualityGrade}</strong>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Last Updated:" bordered={false}>
                        <strong>{stateInfo.lastUpdateEt}</strong>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Total Deaths:" bordered={false}>
                        <strong>{stateInfo.death}</strong>
                        </Card>
                    </Col>

                    <Col span={8}>
                        <Card title="Positive Cases:" bordered={false}>
                        <strong>{stateInfo.positive}</strong>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Negative Cases:" bordered={false}>
                        <strong>{stateInfo.negative}</strong>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Total Test Results:" bordered={false}>
                        <strong>{stateInfo.negative}</strong>
                        </Card>
                    </Col>
                    </Row>
                    </div>

                </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        )
    }
}; 

export default StateContainer; 