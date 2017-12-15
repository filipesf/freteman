import React, { Component } from 'react';
import SVG from 'react-svg-inline';

/* COMPONENTS
   ========================================================================== */
import Headline from '../Headline';



/* ASSETS
   ========================================================================== */
import './assets/showcase.scss';





/* ==========================================================================
   SHOWCASE
   ========================================================================== */
class Showcase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.handleItem = this.handleItem.bind(this);
  }

  componentWillMount() {
    this.setState({
      items: this.props.data
    });
  }

  handleItem(i) {
    const items = this.state.items;
    const item = items[i];
    console.log(item);

    // this.setState({
    //   items: [
    //     i: { active: true }
    //   ]
    // })
  }

  render() {
    const showcaseItems = this.state.items;

    let showcaseDetail = showcaseItems.map((item, index) =>
      <li className="c-showcase__detail" onClick={()=>this.handleItem(index)} key={index}>
        <SVG className="c-showcase__icon" svg={item.icon} />
        <Headline title={item.title} subtitle={item.description} />
      </li>
    );

    let showcaseThumb = showcaseItems.map((item, index) =>
      <li className="c-showcase__thumb" key={index}><img src={item.thumb} alt="" /></li>
    );

    let showcaseBullet = showcaseItems.map((item, index) =>
      <li className="c-bullets__bullet" onClick={()=>this.handleItem(index)} key={index}></li>
    );

    return(
      <div className="c-showcase">
        <ul className="c-showcase__details">
          {showcaseDetail}
        </ul>

        <ul className="c-showcase__thumbnails">
          {showcaseThumb}
        </ul>

         <ul className="c-bullets">
           {showcaseBullet}
         </ul>
      </div>
    );
  }
}

export default Showcase;
