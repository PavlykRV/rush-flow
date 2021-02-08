// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
// }

import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Layout from '../src/components/Layout/Layout';

addDecorator((storyFn) => <Layout>{storyFn()}</Layout>);
addDecorator(
  withInfo({
    inline: true,
    styles: (base) => ({
      ...base,
      infoBody: {
        ...base.infoBody,
        backgroundColor: '#303030',
        color: 'white',
      },
      source: {
        h1: {
          margin: '20px 0',
          padding: '0 0 5px 0',
          fontSize: '25px',
          borderBottom: '1px solid #EEE',
        },
      },
    }),
    propTablesExclude: [Layout],
  }),
);