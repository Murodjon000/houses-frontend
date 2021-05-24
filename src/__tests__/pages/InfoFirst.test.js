import React from 'react';
import renderer from 'react-test-renderer';
import InfoFirst from '../../components/mainPage/InfoFirst';

test('should correctly render Details page', () => {
  const component = renderer.create(<InfoFirst />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
