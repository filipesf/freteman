import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import './assets/button.scss';

const Btn = ({
  block,
  className,
  disabled,
  kind,
  tagName,
  size,
  ...props,
}) => {
  const Tag = tagName || "button";

  const defaultTagProps = {
    a: { role: "button" },
    button: { type: "button" },
    input: { type: "button" },
  };

  const extendedProps = _.extend(
    {},
    defaultTagProps[Tag],
    disabled && tagName !== "a" && { disabled: true },
    props
  );

  const classes = classNames(
    "btn",
    kind && `btn--${kind}`,
    block && "btn--block",
    size && `btn--${size}`,
    disabled && tagName === "a" && "disabled",
    className
  );

  return (
    <Tag {...extendedProps} className={classes} />
  );
};



/**
 * Kind applications
 */
/*const BtnPrimary = props =>
  <Btn {...props} kind="primary" />

const BtnOutline = props =>
  <Btn {...props} kind="outline" />

const BtnAccent = props =>
  <Btn {...props} kind="accent" />

const BtnLink = props =>
  <Btn {...props} kind="link" />*/



/**
 * Type applications
 */
/*const BtnAnchor = props =>
  <Btn {...props} tagName="a" />

const BtnInput = props =>
  <Btn {...props} tagName="input" />

const BtnSubmit = props =>
  <BtnInput {...props} type="submit" />*/



/**
 * Size applications
 */
/*const BtnLarge = props =>
  <Btn {...props} size="lg" />

const BtnSmall = props =>
  <Btn {...props} size="sm" />

const BtnExtraSmall = props =>
  <Btn {...props} size="xs" />*/



/**
 * Display applications
 */
/*const BtnBlock = props =>
  <Btn {...props} block />*/

export default Btn;
