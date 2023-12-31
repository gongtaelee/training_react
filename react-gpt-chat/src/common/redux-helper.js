import produce from 'immer';

export function createReducer(initialState, handlerMap) {
  return function(state = initialState, action) {
    return produce(state, draft => {
      const handler = handlerMap[action.type];
      if (handler) {
        handler(draft, action);
      }
    });
  };
}

// 값을 할당하는 구조에서 간편히 사용할 수 있음
export function createSetValueAction(type){
    return (key, value) => ({type, key, value});
}
export function setValueReducer(state, action){
    state[action.key] = action.value;
}