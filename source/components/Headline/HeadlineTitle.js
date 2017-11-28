import React from 'react';
import PropTypes from 'prop-types';

const HeadlineTitle = (props) =>
  <h2 className="headline__title">{props.text}</h2>

HeadlineTitle.PropTypes = {
  text: PropTypes.string.isRequired,
}

export default HeadlineTitle;
