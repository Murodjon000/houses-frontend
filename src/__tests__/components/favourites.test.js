import shallowSetup from './mock-data';

test('should render Houses component', () => {
  const { props, favouriteWrapper } = shallowSetup();

  expect(favouriteWrapper.find('.test-name').text()).toBe(
    props.favourites.name // eslint-disable-line
  );
  expect(favouriteWrapper.find('img').hasClass('border-card')).toBe(true);
});
