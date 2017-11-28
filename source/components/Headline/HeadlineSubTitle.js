import React from 'react';
import PropTypes from 'prop-types';

const HeadlineSubTitle = (props) =>
  <h3 className="headline__subtitle">{props.text}</h3>

HeadlineSubTitle.PropTypes = {
  text: PropTypes.string.isRequired,
}

export default HeadlineSubTitle;
