import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

const idea1 = {
  dateNum: 123,
  title: 'attic',
  id: 1,
};

const idea2 = {
  dateNum: 456,
  title: 'Bachelor',
  id: 2,
};

const idea3 = {
  dateNum: 789,
  title: 'candor',
  id: 3,
};

const idea4 = {
  dateNum: 718,
  title: 'dandy',
  id: 4,
};

const shuffledArray = [idea3, idea1, idea4, idea2];

// sort functions

// by recent...
const sortByMostRecent = (a, b) => {
  if (a.dateNum < b.dateNum) {
    return 1;
  } else if (a.dateNum > b.dateNum) {
    return -1;
  } else {
    return 0;
  }
};

// by oldest...
const sortByOldest = (a, b) => {
  if (a.dateNum > b.dateNum) {
    return 1;
  } else if (a.dateNum < b.dateNum) {
    return -1;
  } else {
    return 0;
  }
};

// by alphabet...
const sortByAlphabet = (a, b) => {
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

// test('sortByMostRecent returns an array sorted by most recent date', () => {
//   const expected = [idea3, idea2, idea1];

//   const result = [...shuffledArray].sort(sortByMostRecent);

//   expect(result).toStrictEqual(expected);
// });

// test('sortByOldest returns an array sorted by oldest date', () => {
//   const expected = [idea1, idea2, idea3];

//   const result = [...shuffledArray].sort(sortByOldest);

//   expect(result).toStrictEqual(expected);
// });

test('sortByAlphabet returns an arry sorted from a to z', () => {
  const expected = [idea1, idea2, idea3, idea4];

  const result = [...shuffledArray].sort(sortByAlphabet);

  expect(result).toStrictEqual(expected);
});
