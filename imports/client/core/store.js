import { createStore } from 'easy-peasy';

const store = createStore({
  abc: {
    xyz: ['foo', 'bar', 'baz', 'qux'],
    add: (state, payload) => {
      state.xyz.push(payload);
    },
  },
});

export default store;
