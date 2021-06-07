import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../../src/components/mainPage/Footer';

test('should correctly render Details page', () => {
  const component = renderer.create(<Footer />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
