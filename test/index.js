import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import IndexPage from '../pages/index.js';

test('index', t => {
  var wrapper = shallow(<IndexPage />);

  t.is(wrapper.contains(<h1>Cosmic Wimpout</h1>), true);
});
