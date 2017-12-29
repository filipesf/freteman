import React, { Component } from 'react';
import propTypes from 'prop-types';

import ShowcaseDetail  from './ShowcaseDetail';
import ShowcaseThumbs from './ShowcaseThumbs';
import ShowcaseNav from './ShowcaseNav';

import './assets/showcase.scss';

class Showcase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      activeItem: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.setState({
      items: this.props.data,
      activeItem: 0
    });
  }

  handleChange(item) {
    this.setState({
      activeItem: item
    });
  }

  render() {
    const showcaseItems = this.state.items;

    const showcaseDetailItems = showcaseItems.map((item, index) => (
      <ShowcaseDetail
        key={index}
        currentItem={index}
        data={this.state.items[index]}
        activeItem={this.state.activeItem}
        handleChange={this.handleChange}
      />
    ));

    const showcaseThumbItems = showcaseItems.map((item, index) =>(
      <ShowcaseThumbs
        key={index}
        currentItem={index}
        data={this.state.items[index]}
        activeItem={this.state.activeItem}
      />
    ));

    const showcaseNavItems = showcaseItems.map((item, index) => (
      <ShowcaseNav
        key={index}
        currentItem={index}
        data={this.state.items[index]}
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
}

Showcase.propTypes = {
  data: propTypes.array.isRequired
};

export default Showcase;
