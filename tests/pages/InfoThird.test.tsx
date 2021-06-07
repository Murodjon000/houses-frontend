import React from 'react';
import renderer from 'react-test-renderer';
import InfoThird from '../../src/components/mainPage/InfoThird';

test('should correctly render Details page', () => {
  const component = renderer.create(<InfoThird />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
