import React from 'react';
import propTypes from 'prop-types';
import assets from '../../constants/assets';
import Field from '../Form/Field';
import Thumbnail from '../Thumbnail';
import './assets/star.scss';

const FavStar = props => {
  return (
    <Field>
      <input id={props.id} type="checkbox" name={props.name} value={props.value} />
      <label className="c-star" htmlFor={props.id}>
        <Thumbnail src={assets.icon.star} />
      </label>
    </Field>
  );
};

FavStar.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
};

export default FavStar;
