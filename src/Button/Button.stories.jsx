import styled from '@emotion/styled';

import { Button } from './Button';

import { Icon } from '../Icon/Icon';

import { StoryLinkWrapper } from '../LinkWrapper';

// When the user clicks a button, it will trigger the `action()`,
// ultimately showing up in Storybook's addon panel.
function ButtonWrapper(props) {
  return <CustomButton {...props} />;
}

export const buttonWrapper = {
  name: 'button wrapper',
  render: () => (
    <div>
      <ButtonWrapper>Original Button Wrapper</ButtonWrapper>
      <br />
      <Button ButtonWrapper={ButtonWrapper} appearance='primary'>
        Primary
      </Button>
      /* Removed for brevity */
    </div>
  ),
};
