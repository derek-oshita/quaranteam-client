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

// STATEIMAGE
function StateImage (props) {
        let stateData = {}; 
        return (
            <>
            {/* NAME */}
                {
                    props.data !== undefined ? 
                    (<p className="state">{props.data.state}</p>)
                    : 
                    (<p>No Data...</p>)
        
                }
            {/* NICKNAME */}
                {
                    props.data !== undefined ? 
                    (<p className="nickname">"{props.data.nickname}"</p>)
                    : 
                    (<p>No Data...</p>)
        
                }
            {/* FLAG */}
                {
                    props.data !== undefined ? 
                    (<img className="flag" src={props.data.state_flag_url}></img>)
                    : 
                    (<p>No Data...</p>)
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

// EXPORTS
export default StateImage; 

