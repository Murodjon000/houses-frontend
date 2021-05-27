import React from 'react';
import renderer from 'react-test-renderer';
import InfoCarousel from '../../components/mainPage/InfoCarousel';

test('should correctly render Details page', () => {
  const component = renderer.create(<InfoCarousel />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
