import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/react';

import CreateBookingPage from './create-booking';
import { MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({});

describe('Create booking screen', () => {
  it('should render correctly', () => {
    render(
      <MantineProvider theme={theme}>
        <CreateBookingPage />
      </MantineProvider>,
    );
  });
});
