import { Idea } from '../components/List';
// sort functions

export const sortByProperty = (
  array: Idea[],
  property: keyof Idea,
  isDesc?: boolean
): Idea[] => {
  return [...array].sort((a, b) => {
    if (a[property] < b[property]) {
      let isItDesc = isDesc ? 1 : -1;
      return isItDesc;
    }
    if (a[property] > b[property]) {
      let isItDesc = isDesc ? -1 : 1;
      return isItDesc;
    }
    return 0;
  });
};
