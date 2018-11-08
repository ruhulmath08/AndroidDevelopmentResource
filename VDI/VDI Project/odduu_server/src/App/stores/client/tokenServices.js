import {assoc} from 'mori';


export const addClientList = (state, clientList)=> {
  return assoc(state, 'clientList', clientList);
}

export const tokenGenSuccess = (state, newClient)=> {
  alert(newClient.orgName+' CLient Generated Successfully');
  return state;
}

export const tokenGenFailure = (state, oldClient)=> {
  alert(oldClient.orgName+' Already exist');
  return state;
}

export const removeClientSuccess = (state, removed)=> {
  alert(removed.orgName +' Client Removed');
  return state;
}

export const removeClientFailure = (state, id) => {
  alert('Client Not Removed ');
  return state;
}
