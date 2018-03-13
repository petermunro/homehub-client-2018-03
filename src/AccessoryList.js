import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Accessory from './Accessory';

const AccessoryList = ({data}) => {
  const accessories = data.accessories || [];
  const accessoriesComps = accessories.map(
    acc => <Accessory accessory={acc} key={acc.id} />
  );
  return (
    <div>
      <h2>Accessories</h2>
      {accessoriesComps}
    </div>
  );
};

const ACCESSORIES_QUERY = gql`
  query AccessoriesQuery {
    accessories(offset: 0, limit: 5) {
      id
      name
      ... on Light {
        brightnessLevel
        manufacturer
      }

      ... on Thermostat {
        temperature
      }

      ... on Door {
        isClosed
        isLocked
      }

      ... on Outlet {
        isOn
      }
    }
  }
`;

export default graphql(ACCESSORIES_QUERY)(AccessoryList);
