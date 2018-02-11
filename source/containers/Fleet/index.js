import React from 'react';
import data from '../../constants/dataFleet';
import Page from '../Layout/Page';
import Thumbnail from '../../components/Thumbnail';
import Headline from '../../components/Headline';
import './assets/fleet.scss';

const Fleet = () => {
  return (
    <Page id="Fleet" className="l-fleet" title="Frotas">
      <ul className="l-fleet__list">{data.map((v, i) => (
        <li className="l-fleet__item" key={i}>
          <Thumbnail src={v.img} />
          <article className="l-fleet__detail">
            <Headline title={v.name} medium left />
            <small>{v.size}</small>
            <p>{v.desc}</p>
          </article>
        </li>
      ))}</ul>
    </Page>
  );
};

export default Fleet;
