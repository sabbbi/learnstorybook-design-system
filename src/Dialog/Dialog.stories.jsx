import styled from '@emotion/styled';

// Import the component you want to showcase
import React from 'react';
import { Dialog } from './Dialog'; // Adjust the import path as per your project structure

// Story for your component
export default {
  title: 'Components/Dialog', // Title of your component in Storybook
  component: Dialog, // The component you're showcasing
};

// Your stories
export const Default = () => <Dialog />;

export const WithCustomProps = () => <Dialog prop1='value1' prop2='value2' />;
