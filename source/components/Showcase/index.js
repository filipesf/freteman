import React, { Component } from 'react';
import propTypes from 'prop-types';

import ShowcaseDetail  from './ShowcaseDetail';
import ShowcaseThumbs  from './ShowcaseThumbs';
import ShowcaseNav     from './ShowcaseNav';

import './assets/showcase.scss';

class Showcase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      activeItem: 1
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.setState({
      items: this.props.data
    });
  }

  handleChange(item) {
    this.setState({
      activeItem: item
    });
  }

  render() {
    const showcaseItems = this.state.items;

    const showcaseDetailItems = showcaseItems.map(item => (
      <ShowcaseDetail
        data={item}
        key={item.id}
        currentItem={item.id}
        activeItem={this.state.activeItem}
        handleChange={this.handleChange}
      />
    ));

    const showcaseThumbItems = showcaseItems.map(item =>(
      <ShowcaseThumbs
        data={item}
        key={item.id}
        currentItem={item.id}
        activeItem={this.state.activeItem}
      />
    ));

    const showcaseNavItems = showcaseItems.map(item => (
      <ShowcaseNav
        data={item}
        key={item.id}
        currentItem={item.id}
        activeItem={this.state.activeItem}
        handleChange={this.handleChange}
      />
    ));

    return (
      <div className="c-showcase">
        <ul className="c-showcase__details">{showcaseDetailItems}</ul>
        <ul className="c-showcase__thumbs">{showcaseThumbItems}</ul>
        <ul className="c-showcase__nav">{showcaseNavItems}</ul>
      </div>
    );
  }
};

Showcase.propTypes = {
  data: propTypes.array.isRequired
};

export default Showcase;
