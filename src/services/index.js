export const newest = (a, b) => {
  let dateA = a.dateNum;
  console.log('a.dateNum: ', a.dateNum);
  let dateB = b.dateNum;
  console.log('b.dateNum: ', b.dateNum);
  if (dateA < dateB) {
    return 1;
  } else if (dateA > dateB) {
    return -1;
  } else {
    return 0;
  }
};

export const compare = (a, b) => {
  return a.dateNum - b.dateNum;
};

export const oldest = (a, b) => {
  let dateA = a.dateNum;
  console.log('a.dateNum: ', a.dateNum);
  let dateB = b.dateNum;
  console.log('b.dateNum: ', b.dateNum);
  if (dateA > dateB) {
    return 1;
  } else if (dateA < dateB) {
    return -1;
  } else {
    return 0;
  }
};
