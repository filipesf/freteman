import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Headline.scss';

class Headline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: this.props.type,
      title: this.props.title,
      subtitle: this.props.subtitle
    };
  }

  render() {
    let className = classNames({
      'headline': true,
      'headline--header': true
    });

    const headlineTitle = <h2 className="headline__title">{this.state.title}</h2>;
    const headlineSubTitle = <h3 className="headline__subtitle">{this.state.subtitle}</h3>;

    return (
      <section className={className}>
        {headlineTitle}
        {headlineSubTitle}
      </section>
    );
  }
}

Headline.PropTypes = {
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

export default Headline;
