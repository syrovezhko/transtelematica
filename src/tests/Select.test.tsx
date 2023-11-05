import { cleanup, fireEvent, getByTestId, render } from '@testing-library/react';
import 'jasmine';
import 'jest';
import '@types/jest';
import App from './../App';
// import "@testing-library/jest-dom";
import { screen } from '@testing-library/dom';

import { beforeEach, describe } from 'node:test';
import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';

describe('Тестирование селекта', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
  afterEach(cleanup);

  test('Селект пустой', () => {
    expect(screen.getByTestId('select').innerHTML).toBeNull();
  });

  test('Селект открылся', () => {
    fireEvent.change(
      screen.getByTestId('container'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    );
    expect(screen.getByTestId('options').classList.contains('show')).toBe(true);
  });

  test('Селект закрылся', () => {
    fireEvent.keyDown(screen.getByTestId('container'), {
      key: 'Escape',
      code: 'Escape',
      keyCode: 27,
      charCode: 27
    });
    expect(screen.getByTestId('options').classList.contains('show')).toBe(false);
  });
});
