import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AddLink = ({ children }) => (
  <Link to="/add" style={{ textDecoration: "none" }}>
    {children}
  </Link>
);

AddLink.propTypes = {
  children: PropTypes.node
};

export default AddLink;
