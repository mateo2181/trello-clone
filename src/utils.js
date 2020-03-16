export const uuid = () => {
  return Math.floor(Math.random() * 100) * Math.floor(Math.random() * 100);
};

export function saveStatePlugin (store) {
  store.subscribe(
    (mutation, state) => { localStorage.setItem('board', JSON.stringify(state.board)); }
  );
};
