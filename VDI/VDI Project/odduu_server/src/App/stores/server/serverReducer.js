export default function serverReducer(state={}, action) {
  switch (action.type) {
  case 'SET_ENTRIES':
    return '';
    break;
  default:
    return state;
}
return state;
}
