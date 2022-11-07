import { Idea } from '../components/List';
import { SELECT_VALUES } from '../enums';
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

const someFunc = (array: Idea[], property: keyof Idea) => {
  return [...array].sort((a, b) => {
    if (a[property] > b[property]) {
      return 1;
    } else if (a[property] < b[property]) {
      return -1;
    } else {
      return 0;
    }
  });
};

export const sortByProperty = (
  array: Idea[],
  property: keyof Idea,
  isDesc?: boolean
): Idea[] => {
  // return a sorted array
  return [...array].sort((a, b) => {
    // timestamps. descending. highest number first...
    // ...most recent idea at top of page...
    // if "123" is less than "124"
    // return 1
    // remember, the first expression will only be evaluated if true
    // isDescending is a boolean, we are returning true or false...
    // ie. "is it true that the list is descending?"
    // if a is smaller than b, than the list is getting higher

    // isDesc ..."if isDescending is true, we return true"
    if (a[property] < b[property]) {
      console.log('a[property] :', a[property]);
      console.log('b[property] :', b[property]);
      console.log('a is less than b');
      let isItDesc = isDesc ? 1 : -1;
      console.log('isItDesc: ', isItDesc);
      return isItDesc;
    }
    if (a[property] > b[property]) {
      console.log('a[property] :', a[property]);
      console.log('b[property] :', b[property]);
      console.log('a is greater than b');
      let isItDesc = isDesc ? -1 : 1;
      console.log('isItDesc: ', isItDesc);
      return isItDesc;
    }
    // if (a[property] > b[property]) return isDesc ? -1 : 1;

    return 0;
  });
};
