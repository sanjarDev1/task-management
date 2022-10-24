export const addTask = (action_type, payload) => {
  return { type: action_type, payload };
};

export const removeCompleted = (payload) => {
  return { type: 'REMOVE_COMPLETED', payload };
};

export const removeProgress = (payload) => {
  return { type: 'REMOVE_PROGRESS', payload };
};

export const removeOpen = (payload) => {
  return { type: 'REMOVE_OPEN', payload };
};
