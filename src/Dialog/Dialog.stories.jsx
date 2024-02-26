import styled from '@emotion/styled';

import { Dialog } from './Dialog';
import { StoryLinkWrapper } from '../LinkWrapper';

const CustomDialog = styled.dialog`
  border: 1px solid green;
  background: lightgreen;
  color: rebeccapurple;
  padding: 1em;
  font-size: 1.2em;
`;

function DialogWrapper(props) {
  return <CustomDialog {...props} />;
}

export default {
  title: 'Design System/Dialog',
  component: Dialog,
};
