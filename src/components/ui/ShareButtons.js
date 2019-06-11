import React, { Fragment } from 'react';
import Facebook from "react-sharingbuttons/dist/buttons/Facebook";
import Twitter from "react-sharingbuttons/dist/buttons/Twitter";
import "react-sharingbuttons/dist/main.css";
import PropTypes from "prop-types";

const ShareButtons = (props) => {
    return (
        <Fragment>
            <Facebook url={props.url} {...props} />
            <Twitter  url={props.url} {...props} />
        </Fragment>
    );
};

ShareButtons.propTypes = {
    url: PropTypes.string.isRequired
}

export default ShareButtons;