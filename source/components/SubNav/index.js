import React from 'react';
import propTypes from 'prop-types';
import SubnavList from './SubnavList';
import './assets/subnav.scss';

const SubNav = props => {
  const s = props.data;

  return (
    <section className="c-subnav">
      <h5 className="c-subnav__title">{s.title}</h5>
      <SubnavList data={s.list} />
    </section>
  );
};

SubNav.propTypes = {
  data: propTypes.object.isRequired
};

export default SubNav;
