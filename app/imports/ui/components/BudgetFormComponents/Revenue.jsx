import React from 'react';
import { Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Revenue = ({ formData, handleChange }) => (
  <Form.Group widths="equal">
    <Form.Input
      label="5% of the Investment Portfolio"
      name="fivePercent"
      value={formData.fivePercent}
      onChange={handleChange}
      type="number"
    />
    <Form.Input
      label="Revenues"
      name="revenues"
      value={formData.revenues}
      onChange={handleChange}
      type="number"
    />
    <Form.Input
      label="General Fund"
      name="generalFund"
      value={formData.generalFund}
      onChange={handleChange}
      type="number"
    />
    <Form.Input
      label="Core Operating Budget NOT Authorized"
      name="coreOperatingBudget"
      value={formData.coreOperatingBudget}
      onChange={handleChange}
      type="number"
    />
    <Form.Input
      className="dotted-input"
      label="Total Revenue"
      name="totalRevenue"
      value={formData.totalRevenue}
      onChange={handleChange}
      type="number"
      readOnly
    />
  </Form.Group>
);

Revenue.propTypes = {
  formData: PropTypes.shape({
    fivePercent: PropTypes.number,
    revenues: PropTypes.number,
    generalFund: PropTypes.number,
    coreOperatingBudget: PropTypes.number,
    totalRevenue: PropTypes.number,
  }),
  handleChange: PropTypes.func,
};

Revenue.defaultProps = {
  formData: {},
  handleChange: () => {},
};

export default Revenue;