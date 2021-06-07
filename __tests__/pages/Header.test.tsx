import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../../components/mainPage/Header';

test('should correctly render Details page', () => {
  const component = renderer.create(<Header />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
