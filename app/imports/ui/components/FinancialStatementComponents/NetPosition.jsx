import React from 'react';
import { Tab } from 'semantic-ui-react';
import CashAndCashEquivalents from './CashAndCashEquivalentsFS';
import OtherAssets from './OtherAssetsFS';
import Liabilities from './LiabilitiesFS';
import NetAssets from './NetAssets';
import PropTypes from 'prop-types';

const NetPosition = ({ formData, handleChange }) => {
  const panes = [
    {
      menuItem: 'Cash and Cash Equivalents',
      render: () => (
        <Tab.Pane>
          <CashAndCashEquivalents formData={formData} handleChange={handleChange} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Other Assets',
      render: () => (
        <Tab.Pane>
          <OtherAssets formData={formData} handleChange={handleChange} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Liabilities',
      render: () => (
        <Tab.Pane>
          <Liabilities formData={formData} handleChange={handleChange} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Net Assets',
      render: () => (
        <Tab.Pane>
          <NetAssets formData={formData} handleChange={handleChange} />
        </Tab.Pane>
      ),
    },
  ];
  return (
    <Tab panes={panes} />
  );
};

NetPosition.defaultProps = {
  formData: [],
  handleChange: PropTypes.func,
};

export default NetPosition;