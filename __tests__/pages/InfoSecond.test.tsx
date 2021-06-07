import React from 'react';
import renderer from 'react-test-renderer';
import InfoSecond from '../../components/mainPage/InfoSecond';

test('should correctly render Details page', () => {
  const component = renderer.create(<InfoSecond />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
