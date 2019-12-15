import React, { Component } from 'react';
import OnVisible from 'react-on-visible';


class LazyBackgroundImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: props.image,
      loaded: false
    };

    this.switchState = this.switchState.bind(this)
  }

  switchState() {
    this.setState({
      loaded: true
    });
  }

  render() {
    return (
      <OnVisible className="my-container" style={{backgroundImage: this.state.loaded ? "url("+this.state.image+")" : ""}} onChange={this.switchState}>
        <p>I'm going in. Here goes nothing. Now lock onto the strongest power source. It should be the power generator. Form up. And stay alert. We could run out of space real fast. Split up and head back to the surface. See if you can get a few of those TIE fighters to follow you. Copy, Gold Leader. That was too close. We've got to give those fighters more time. Concentrate all fire on that Super Star Destroyer.</p>
      </OnVisible>
    );
  }
}

export default LazyBackgroundImage;
