import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const Uptime = ({data}) => (
<div>
    <p>
      Uptime: <span>{data.system && data.system.uptime}</span>
      {data.loading && 'Loading...'}
      {data.error && `Error: ${data.error.message}`}
    </p>
  </div>
);

const UPTIME_QUERY = gql`
query MyQuery {
  system {
    uptime
  }
}`
;

export default graphql(UPTIME_QUERY)(Uptime);
