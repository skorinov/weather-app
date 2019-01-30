import moment from 'moment';

export const loadState = () => {
  try {

    const serializedState = localStorage.getItem('state');
    if(serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState, function(key, value) {
      if (key == 'date') return moment(value);
      return value
    })

  }catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {

  }
};