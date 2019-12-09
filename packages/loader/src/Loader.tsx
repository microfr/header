import React from "react";
import PropTypes from "prop-types";
import Loader from '@microfr/loader'

interface Props {
  token?: string;
  [key: string]: any
}

const _HeaderLoader: React.FunctionComponent<Props> = ({ token, ...props }) => {
  return (
    <Loader uri="http://localhost:8083" namespace="Header" {...props}/>
  );
};
_HeaderLoader.displayName = "HeaderLoader";

_HeaderLoader.propTypes = {
  token: PropTypes.string
};

export default React.memo(_HeaderLoader);
