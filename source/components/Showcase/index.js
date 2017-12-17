import React, { Component } from 'react';

import ShowcaseDetail  from './ShowcaseDetail';
import ShowcaseThumbs  from './ShowcaseThumbs';
import ShowcaseNav     from './ShowcaseNav';

import './assets/showcase.scss';

class Showcase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      active: 'destination'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.setState({
      items: this.props.data
    });
  }

  handleChange(item) {
    let newItems = Object.assign({}, this.state.items);
    item.active = !item.active;

    this.setState({ newItems })
    console.log(newItems);
  }

  render() {
    // console.log(this.props.data.order);
    // console.log(this.props.data.meet);
    // console.log(this.props.data.destination);

    return (
      <div className="c-showcase">

        <ul className="c-showcase__details">
          <ShowcaseDetail
            info={this.props.data[this.state.active]}
            handleChange={this.handleChange}
          />
        </ul>

        <ul className="c-showcase__thumbs">
          <ShowcaseThumbs info={this.props.data[this.state.active]} />
        </ul>

        <ul className="c-showcase__nav">
          <ShowcaseNav
            x={this.props.data[this.state.active]}
            handleChange={this.handleChange}
          />
        </ul>
      </div>
    );
  }
}

export default Showcase;
