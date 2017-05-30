export function getLocaleData() {
  return JSON.parse(localStorage.getItem('REACT_TELE')) || {};
}

export function setLocaleData(data) {
  const oldData = getLocaleData();
  const updatedData = {...oldData, ...data};
  localStorage.setItem('REACT_TELE', JSON.stringify(updatedData));
}
