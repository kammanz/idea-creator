const customSort = (a, b) => {
  const dateA = a.date.currentDate;
  const dateB = b.date.currentDate;
  if (dateA < dateB) {
    return 1;
  } else if (dateA > dateB) {
    return -1;
  } else {
    return 0;
  }
};
