import React from "react";
import { NavLink } from "react-router-dom";
import { Breadcrumb } from "antd";

const BreadcrumbNav = (props) => {
  const { stateCode } = props;
  return (
    <>
      <Breadcrumb style={{ margin: "10px 0" }}>
        <Breadcrumb.Item>
          <NavLink className="nav-link" exact to="/">
            Home
          </NavLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <NavLink className="nav-link" exact to="/states">
            State Data
          </NavLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{stateCode}</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
};

export default BreadcrumbNav;
