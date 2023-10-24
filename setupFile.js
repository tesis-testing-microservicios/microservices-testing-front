// this will run before the tests in jest.
import { setProjectAnnotations } from '@storybook/testing-react';
import * as globalStorybookConfig from './.storybook/preview';

setProjectAnnotations(globalStorybookConfig);
