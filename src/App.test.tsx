import { render, screen } from '@testing-library/react';
import App from './App';
import { Idea } from './components/List';
import { stringify } from 'querystring';
import { iterator } from 'core-js/fn/symbol';

import Form from './components/List';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

const idea1 = {
  dateNum: 123,
  title: 'Attic',
  description: 'do homework',
  id: 1,
};

const idea2 = {
  dateNum: 456,
  title: 'Bachelor',
  description: 'do homework',
  id: 2,
};

const idea3 = {
  dateNum: 789,
  title: 'Candor',
  description: 'do homework',
  id: 3,
};

const idea4 = {
  dateNum: 790,
  title: 'Dandy',
  description: 'do homework',
  id: 4,
};

const shuffledArray = [idea3, idea1, idea4, idea2];

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

test('sortByProperty returns an array sorted by most recent date', () => {
  const expected = [idea4, idea3, idea2, idea1];
  const result = sortByProperty(shuffledArray, 'dateNum', true);

  expect(result).toStrictEqual(expected);
});

test('sortByProperty returns an array sorted by oldest date', () => {
  const expected = [idea1, idea2, idea3, idea4];
  const result = sortByProperty(shuffledArray, 'dateNum', false);

  expect(result).toStrictEqual(expected);
});

test('sortByProperty returns an array sorted by alphabet', () => {
  const expected = [idea1, idea2, idea3, idea4];
  const result = sortByProperty(shuffledArray, 'title', false);

  expect(result).toStrictEqual(expected);
});

test('form is focussed on page load', () => {
  const expected = true;
  render(<Form />);
  const input = document.querySelector(
    '#form-input'
  ) as HTMLInputElement | null;
  const activeElement = document.activeElement;
  const result = activeElement === input;

  expect(result).toStrictEqual(expected);
});
