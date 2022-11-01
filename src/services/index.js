// sort functions

// by recent...
export const sortByMostRecent = (a, b) => {
  if (a.dateNum < b.dateNum) {
    return 1;
  } else if (a.dateNum > b.dateNum) {
    return -1;
  } else {
    return 0;
  }
};

// by oldest...
export const sortByOldest = (a, b) => {
  if (a.dateNum > b.dateNum) {
    return 1;
  } else if (a.dateNum < b.dateNum) {
    return -1;
  } else {
    return 0;
  }
};

// by alphabet...
export const sortByAlphabet = (a, b) => {
  const A = a.title.toLowerCase();
  const B = b.title.toLowerCase();
  if (A > B) {
    return 1;
  } else if (A < B) {
    return -1;
  } else {
    return 0;
  }
};
