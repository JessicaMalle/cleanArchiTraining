// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import { setupServer } from 'msw/node';
import { handlers } from '@foodsapp/infrastructure/inMemory/server';
import { act } from 'react'; // Import act from react instead of react-dom/test-utils

// Re-export act to ensure it's used instead of the deprecated version
export { act };

// Monkey patch react-dom/test-utils to use the non-deprecated act from React
jest.mock('react-dom/test-utils', () => {
  const originalModule = jest.requireActual('react-dom/test-utils');
  return {
    ...originalModule,
    act: act, // Replace the deprecated act with the one from React
  };
});

// Suppress React Router future flag warning
const originalWarn = console.warn;
console.warn = function(msg) {
  if (msg.includes('React Router Future Flag Warning')) {
    return;
  }
  originalWarn.apply(console, arguments);
};

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
