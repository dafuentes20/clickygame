import React from "react";
import "./Wrapper.css";

const Wrapper = props => <main role="main" className="wrapper">{props.children}</main>;

export default Wrapper;