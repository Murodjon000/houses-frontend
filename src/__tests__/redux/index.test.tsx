import reducers from '../../reducers/index';

test('reducers', () => {
  const state = reducers(
    {
      user: {},
      houses: {
        house: {
          id: '5',
          type: 'houses',
          attributes: {
            name: 'Castle',
            description: 'A castle for the royal feel.',
            price: 1000000,
            image:
              'https://images.unsplash.com/photo-1606854053266-60c43ca22b47?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            'built-date': '1876-03-05',
            'number-of-rooms': 13,
            location: 'Gdansk',
          },
          relationships: {
            favourites: { data: [] },
            favouritors: { data: [] },
          },
        },
      },
    },
    {
      type: 'GET_USER',
      payload: {
        user: {
          user: {
            id: 8,
            email: 'eldor@gmail.com',
            created_at: '2021-05-23T16:29:22.074Z',
            updated_at: '2021-05-23T16:29:22.074Z',
            username: 'Eldor',
          },
          favourites: [
            {
              id: 1,
              name: 'Villa',
              description:
                'A modern style villa located on the peaceful location of Warsaw. Perfect for single family who loves to live away from the hustle and bustle of the capital city.',
              price: 1500000,
              image:
                'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
              location: 'Warsaw',
              built_date: '2005-10-10',
              number_of_rooms: 7,
              created_at: '2021-05-20T10:56:39.126Z',
              updated_at: '2021-05-20T10:56:39.126Z',
            },
          ],
        },
      },
    } // eslint-disable-line
  );
  expect(state).toEqual({
    user: {
      userData: {
        user: {
          id: 8,
          email: 'eldor@gmail.com',
          created_at: '2021-05-23T16:29:22.074Z',
          updated_at: '2021-05-23T16:29:22.074Z',
          username: 'Eldor',
        },
        favourites: [
          {
            id: 1,
            name: 'Villa',
            description:
              'A modern style villa located on the peaceful location of Warsaw. Perfect for single family who loves to live away from the hustle and bustle of the capital city.',
            price: 1500000,
            image:
              'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
            location: 'Warsaw',
            built_date: '2005-10-10',
            number_of_rooms: 7,
            created_at: '2021-05-20T10:56:39.126Z',
            updated_at: '2021-05-20T10:56:39.126Z',
          },
        ],
      },
    },
    houses: {
      house: {
        id: '5',
        type: 'houses',
        attributes: {
          name: 'Castle',
          description: 'A castle for the royal feel.',
          price: 1000000,
          image:
            'https://images.unsplash.com/photo-1606854053266-60c43ca22b47?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
          'built-date': '1876-03-05',
          'number-of-rooms': 13,
          location: 'Gdansk',
        },
        relationships: { favourites: { data: [] }, favouritors: { data: [] } },
      },
    },
  });
});

test('houses details reducer', () => {
  const state = reducers(
    { user: {}, houses: {} },
    {
      type: 'ADD_HOUSES_DETAILS',
      payload: {
        house: {
          id: '5',
          type: 'houses',
          attributes: {
            name: 'Castle',
            description: 'A castle for the royal feel.',
            price: 1000000,
            image:
              'https://images.unsplash.com/photo-1606854053266-60c43ca22b47?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            'built-date': '1876-03-05',
            'number-of-rooms': 13,
            location: 'Gdansk',
          },
          relationships: {
            favourites: { data: [] },
            favouritors: { data: [] },
          },
        },
      },
    } // eslint-disable-line
  );
  expect(state).toEqual({
    user: {},
    houses: {
      house: {
        id: '5',
        type: 'houses',
        attributes: {
          name: 'Castle',
          description: 'A castle for the royal feel.',
          price: 1000000,
          image:
            'https://images.unsplash.com/photo-1606854053266-60c43ca22b47?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
          'built-date': '1876-03-05',
          'number-of-rooms': 13,
          location: 'Gdansk',
        },
        relationships: { favourites: { data: [] }, favouritors: { data: [] } },
      },
    },
  });
});

test('houses reducer', () => {
  const state = reducers(
    {
      user: {
        userData: {
          user: {
            id: 8,
            email: 'eldor@gmail.com',
            created_at: '2021-05-23T16:29:22.074Z',
            updated_at: '2021-05-23T16:29:22.074Z',
            username: 'Eldor',
          },
          favourites: [
            {
              id: 1,
              name: 'Villa',
              description:
                'A modern style villa located on the peaceful location of Warsaw. Perfect for single family who loves to live away from the hustle and bustle of the capital city.',
              price: 1500000,
              image:
                'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
              location: 'Warsaw',
              built_date: '2005-10-10',
              number_of_rooms: 7,
              created_at: '2021-05-20T10:56:39.126Z',
              updated_at: '2021-05-20T10:56:39.126Z',
            },
          ],
        },
      },
      houses: {
        house: {
          id: '5',
          type: 'houses',
          attributes: {
            name: 'Castle',
            description: 'A castle for the royal feel.',
            price: 1000000,
            image:
              'https://images.unsplash.com/photo-1606854053266-60c43ca22b47?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            'built-date': '1876-03-05',
            'number-of-rooms': 13,
            location: 'Gdansk',
          },
          relationships: {
            favourites: { data: [] },
            favouritors: { data: [] },
          },
        },
        houses: [
          {
            id: '1',
            type: 'houses',
            attributes: {
              name: 'Villa',
              description:
                'A modern style villa located on the peaceful location of Warsaw. Perfect for single family who loves to live away from the hustle and bustle of the capital city.',
              price: 1500000,
              image:
                'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
              'built-date': '2005-10-10',
              'number-of-rooms': 7,
              location: 'Warsaw',
            },
            relationships: {
              favourites: { data: [{ id: '35', type: 'favourites' }] },
              favouritors: { data: [{ id: '8', type: 'users' }] },
            },
          },
        ],
      },
    },
    {
      type: 'GET_USER',
      payload: {
        user: {
          user: {
            id: 8,
            email: 'eldor@gmail.com',
            created_at: '2021-05-23T16:29:22.074Z',
            updated_at: '2021-05-23T16:29:22.074Z',
            username: 'Eldor',
          },
          favourites: [
            {
              id: 1,
              name: 'Villa',
              description:
                'A modern style villa located on the peaceful location of Warsaw. Perfect for single family who loves to live away from the hustle and bustle of the capital city.',
              price: 1500000,
              image:
                'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
              location: 'Warsaw',
              built_date: '2005-10-10',
              number_of_rooms: 7,
              created_at: '2021-05-20T10:56:39.126Z',
              updated_at: '2021-05-20T10:56:39.126Z',
            },
          ],
        },
      },
    } //eslint-disable-line
  );
  expect(state).toEqual({
    user: {
      userData: {
        user: {
          id: 8,
          email: 'eldor@gmail.com',
          created_at: '2021-05-23T16:29:22.074Z',
          updated_at: '2021-05-23T16:29:22.074Z',
          username: 'Eldor',
        },
        favourites: [
          {
            id: 1,
            name: 'Villa',
            description:
              'A modern style villa located on the peaceful location of Warsaw. Perfect for single family who loves to live away from the hustle and bustle of the capital city.',
            price: 1500000,
            image:
              'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
            location: 'Warsaw',
            built_date: '2005-10-10',
            number_of_rooms: 7,
            created_at: '2021-05-20T10:56:39.126Z',
            updated_at: '2021-05-20T10:56:39.126Z',
          },
        ],
      },
    },
    houses: {
      house: {
        id: '5',
        type: 'houses',
        attributes: {
          name: 'Castle',
          description: 'A castle for the royal feel.',
          price: 1000000,
          image:
            'https://images.unsplash.com/photo-1606854053266-60c43ca22b47?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
          'built-date': '1876-03-05',
          'number-of-rooms': 13,
          location: 'Gdansk',
        },
        relationships: { favourites: { data: [] }, favouritors: { data: [] } },
      },
      houses: [
        {
          id: '1',
          type: 'houses',
          attributes: {
            name: 'Villa',
            description:
              'A modern style villa located on the peaceful location of Warsaw. Perfect for single family who loves to live away from the hustle and bustle of the capital city.',
            price: 1500000,
            image:
              'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
            'built-date': '2005-10-10',
            'number-of-rooms': 7,
            location: 'Warsaw',
          },
          relationships: {
            favourites: { data: [{ id: '35', type: 'favourites' }] },
            favouritors: { data: [{ id: '8', type: 'users' }] },
          },
        },
      ],
    },
  });
});
