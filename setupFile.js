// setupFile.js <-- this will run before the tests in jest.
import { setProjectAnnotations } from '@storybook/testing-react';
import * as globalStorybookConfig from './.storybook/preview'; // path of your preview.js file

setProjectAnnotations(globalStorybookConfig);
