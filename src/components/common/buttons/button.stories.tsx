// src/components/Button/Button.stories.js

import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './button.component';

// Stories for the Button component
storiesOf('Button', module)
  .add('Default', () => <Button text="Click me" />)
  .add('Primary', () => <Button text="Primary Button" variant="contained" color="primary" />)
  .add('Secondary', () => <Button text="Secondary Button" variant="contained" color="secondary" />)
  .add('Outlined', () => <Button text="Outlined Button" variant="outlined" />)
  .add('Custom Size', () => <Button text="Custom Size Button" width={200} height={60} />);
