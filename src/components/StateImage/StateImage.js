// IMPORTS
import React from 'react'; 
import './StateImage.css'; 
// ANTDESIGN 
import { Layout, Menu, Breadcrumb } from 'antd';
import { NavLink, Link } from 'react-router-dom'; 
import { Card, Col, Row } from 'antd';
import { Button } from 'antd';
// VARIABLES
const { Header, Content, Footer } = Layout;
const { Meta } = Card;

function StateImage (props) {
        // console.log('stateimage data: ', props.data)
        let stateData = {}; 
        // if (props.data !== undefined) {
        //     stateData = props.data
        //     // stateData = {...props.data}
        //     console.log('stateimage.js ', stateData)
        // } 
        // console.log('state data: ', stateData.nickname)
        return (
            <>
            {/* NAME */}
                {
                    props.data !== undefined ? 
                    (<p className="state">{props.data.state}</p>)
                    : 
                    (<p>Loading...</p>)
        
                }
            {/* NICKNAME */}
                {
                    props.data !== undefined ? 
                    (<p className="nickname">"{props.data.nickname}"</p>)
                    : 
                    (<p>Loading...</p>)
        
                }
            {/* FLAG */}
                {
                    props.data !== undefined ? 
                    (<img className="flag" src={props.data.state_flag_url}></img>)
                    : 
                    (<p>Loading...</p>)
                }
            {/* TABLES */}
                    <div className="site-card-wrapper">
                    <Row gutter={16}>
                {/* POPULATION */}
                    <Col span={8} >
                        <Card title="Population:" bordered={false} className="data-table">
                            {
                                props.data !== undefined ? 
                                ( <strong><p>{props.data.population}</p></strong>)
                                : 
                                (<p>Loading...</p>)
                            }
                        </Card>
                    </Col>
                {/* CAPITAL CITY */}
                    <Col span={8} >
                        <Card title="Capital City:" bordered={false}>
                            {
                                props.data !== undefined ? 
                                ( <strong><p>{props.data.capital_city}</p></strong>)
                                : 
                                (<p>Loading...</p>)
                            }
                        </Card>
                    </Col>
                {/* STATE CODE */}
                    <Col span={8}>
                        <Card title="State Code:" bordered={false}>
                            {
                                props.data !== undefined ? 
                                ( <strong><p>{props.data.code}</p></strong>)
                                : 
                                (<p>Loading...</p>)
                            }
                        </Card>
                    </Col>
                    </Row>
                    </div>
            </>
        )
};

export default StateImage; 

