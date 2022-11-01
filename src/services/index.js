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
  if (a.title.charAt(0) > b.title.charAt(0)) {
    return 1;
  } else if (a.title.charAt(0) < b.title.charAt(0)) {
    return -1;
  } else {
    return 0;
  }
};
