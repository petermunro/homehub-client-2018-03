import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const Hubname = ({data}) => {
  return (
    <span>
      {data.system && data.system.hubname}
      {data.loading && 'Loading...'}
      {data.error && `Error: ${data.error.message}`}
    </span>
)};

const HUBNAME_QUERY = gql`
  {
    system {
      hubname
    }
  }
`;

export default graphql(HUBNAME_QUERY)(Hubname);
