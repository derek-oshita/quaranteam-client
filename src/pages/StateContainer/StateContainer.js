// IMPORTS
import React from 'react'; 
import StateName from '../../components/StateName/StateName'; 
import StateMeta from '../StateMeta/StateMeta'; 
import Comment from '../../components/Comment/Comment'; 
import CommentList from '../../components/CommentList/CommentList'; 
import CommentListContainer from '../CommentListContainer/CommentListContainer'; 
import './StateContainer.less'; 
// ANTDESIGN
import { Layout, Menu, Breadcrumb } from 'antd';
import { NavLink, Link } from 'react-router-dom'; 
import { Card, Col, Row } from 'antd';
import { Button } from 'antd';
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
        const stateCode = this.state.state.state; 
        const currentUser = this.props.currentUser; 
        return(
            <Layout className="layout">
            {/* CONTENT */}
                <Content style={{ padding: '0 50px' }}>
            {/* BREADCUMB LINKS */}
                <Breadcrumb style={{ margin: '10px 0' }}>
                    <Breadcrumb.Item><NavLink className="nav-link" exact to='/'>Home</NavLink></Breadcrumb.Item>
                    <Breadcrumb.Item><NavLink className="nav-link" exact to='/states'>State Data</NavLink></Breadcrumb.Item>
                    <Breadcrumb.Item><StateName abbrev={stateInfo.state}/></Breadcrumb.Item>
                </Breadcrumb>
            {/* DATA CARDS */}
                <div className="site-layout-content">
                {/* STATEMETA */}
                    <StateMeta abbrev={stateInfo.state}/>
                {/* DATA CARDS */}
                    <div className="site-card-wrapper">
                    <Row gutter={16}>
                    <Col span={8} className="data-table">
                        <Card title="Data Quality:" bordered={false}>
                        <strong>{stateInfo.dataQualityGrade}</strong>
                        </Card>
                    </Col>
                    <Col span={8} className="data-table">
                        <Card title="Last Updated:" bordered={false}>
                        <strong>{stateInfo.lastUpdateEt}</strong>
                        </Card>
                    </Col>
                    <Col span={8} className="data-table">
                        <Card title="Total Deaths:" bordered={false}>
                        <strong>{stateInfo.death}</strong>
                        </Card>
                    </Col>

                    <Col span={8} className="data-table">
                        <Card title="Positive Cases:" bordered={false}>
                        <strong>{stateInfo.positive}</strong>
                        </Card>
                    </Col>
                    <Col span={8} className="data-table">
                        <Card title="Negative Cases:" bordered={false}>
                        <strong>{stateInfo.negative}</strong>
                        </Card>
                    </Col>
                    <Col span={8} className="data-table">
                        <Card title="Total Test Results:" bordered={false}>
                        <strong>{stateInfo.negative}</strong>
                        </Card>
                    </Col>
                    </Row>
                    </div>
                {/* BUTTON */}
                    <div>
                    <Link className="nav-link"  to={`/states/${stateInfo.state}/comment`}>
                    <Button type="primary">Add Comment</Button>
                    </Link>
                    </div>
                </div>
                </Content>
            {/* COMMENTS */}
                <CommentListContainer stateCode={stateCode} currentUser={currentUser}/>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        )
    }
}; 

export default StateContainer; 
