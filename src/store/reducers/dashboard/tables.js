export const tablesReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_TABLES_DATA': {
      console.log(
        `aCtion here::${JSON.stringify([...state, ...action.payload])}`
      );
      return [...state, ...action.payload];
    }
    case 'REMOVE_DATA': {
      const newstate = state.filter(
        (item) => !action.payload.includes(item.id.toString())
      );
      console.log('NEW STTE::', newstate);
      return newstate;
    }
    default: {
      return state;
    }
  }
};
