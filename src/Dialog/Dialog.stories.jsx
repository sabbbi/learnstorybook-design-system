import styled from '@emotion/styled';

import { Dialog } from './Dialog';
import { StoryLinkWrapper } from '../LinkWrapper';

function DialogWrapper(props) {
  return <CustomDialog {...props} />;
}

export default {
  title: 'Design System/DialogComponent',
  component: Dialog,
};
