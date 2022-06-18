import React, { ComponentType } from 'react';
import { ApolloProvider } from '@apollo/client';

import { client } from './api/client';

export const App: ComponentType = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Search GitHub users</h1>
      </div>
    </ApolloProvider>
  );
};
