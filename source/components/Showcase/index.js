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
      items: {},
      activeItem: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.setState({
      items: this.props.data,
      activeItem: '1'
    });
  }

  handleChange(item) {
    this.setState({
      activeItem: item
    });
  }

  render() {
    const showcaseItems = Object.keys(this.state.items);

    const showcaseDetailItems = showcaseItems.map(item => (
      <ShowcaseDetail
        key={item}
        currentItem={item}
        data={this.state.items[item]}
        activeItem={this.state.activeItem}
        handleChange={this.handleChange}
      />
    ));

    const showcaseThumbItems = showcaseItems.map(item =>(
      <ShowcaseThumbs
        key={item}
        currentItem={item}
        data={this.state.items[item]}
        activeItem={this.state.activeItem}
      />
    ));

    const showcaseNavItems = showcaseItems.map(item => (
      <ShowcaseNav
        key={item}
        currentItem={item}
        data={this.state.items[item]}
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
  data: propTypes.object.isRequired
};

export default Showcase;
