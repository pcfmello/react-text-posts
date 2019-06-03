import React from "react";
import PropTypes from "prop-types";
import BlockUi from "react-block-ui";

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
