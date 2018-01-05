import React from 'react';
import propTypes from 'prop-types';
import SubNavList from './SubNavList.js';
import './assets/sub-nav.scss';

const SubNav = props => {
  return (
    <section className="c-sub-nav">
      <h5 className="c-sub-nav__title">{props.data.title}</h5>
      <SubNavList data={props.data.list} />
    </section>
  );
};

SubNav.propTypes = {
  data: propTypes.object.isRequired
};

export default SubNav;
