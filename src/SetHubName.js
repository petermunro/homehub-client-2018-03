import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const HUBNAME_QUERY = gql`
  {
    system {
      hubname
    }
  }
`;


class SetHubName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}

        />
        <button onClick={this.handleClick}>Set</button>
      </div>
    )
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleClick = event => {
    this.props.mutate({
      variables: {
        newHubname: this.state.name
      },
      update: (proxy, { data: { setHubname }}) => {
        proxy.writeQuery({
          query: HUBNAME_QUERY,
          data: {
            system: {
              hubname: this.state.name,
              __typename: 'System',
            }
          }
        });
      }
    });
  }
}

const SET_HUBNAME = gql`
  mutation SetHubname($newHubname: String!) {
    setHubname(name: $newHubname) {
      hubname
    }
  }
`;

export default graphql(SET_HUBNAME)(SetHubName);
