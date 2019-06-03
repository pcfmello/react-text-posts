import React from "react";
import PropTypes from "prop-types";
import BlockUi from "react-block-ui";
import "react-block-ui/style.css";

const Loading = ({ children, isLoading }) => (
  <BlockUi tag="div" blocking={isLoading}>
    {children}
  </BlockUi>
);

Loading.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.node
};

export default Loading;
