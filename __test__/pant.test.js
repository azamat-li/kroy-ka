import React from 'react';
import renderer from 'react-test-renderer';
import Pant from '../components/Pant.tsx';

test('Pant changes the class when hovered', () => {
  const component = renderer.create(
    <Pant pant="{id: 78, title: so, measurements: { hipsCircum: 80 }}"></Pant>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
