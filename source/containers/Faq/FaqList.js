import React from 'react';
import propTypes from 'prop-types';
import Headline from '../../components/Headline';

const FaqList = props => {
  const faqItems = props.data.map((q, i) => (
    <li className="l-faq__item" key={i}>
      <Headline title={q.question} subtitle={q.answer} left medium />
    </li>
  ));

  return <ul className="l-faq__list">{faqItems}</ul>;
};

FaqList.propTypes = {
  data: propTypes.object,
};

export default FaqList;
