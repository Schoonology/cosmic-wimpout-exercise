import React from 'react';
import { style } from 'glamor';

var STYLES = style({
  background: '#eee',
  bottom: '0',
  color: '#0d0d0d',
  left: '0',
  padding: '32px',
  position: 'absolute',
  right: '0',
  top: '0',
});

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className={STYLES}>
        <h1>Cosmic Wimpout</h1>
      </div>
    );
  }
}
