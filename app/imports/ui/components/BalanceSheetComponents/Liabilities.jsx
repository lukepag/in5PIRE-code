import React from 'react';
import { Form, Segment, Tab } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import LongTermLiabilitiesForm from './LongTermLiabilitiesForm';

/**
 * Component for Liabilities form for Balance Input Sheet
 */
const Liabilities = ({ formData, handleChange }) => {
  const panes = [
    {
      menuItem: 'Long-term Liabilities - due within one year',
      render: () => (
        <Tab.Pane>
          <LongTermLiabilitiesForm
            netWording="Long-term liabilities - due within one year"
          />
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Long-term Liabilities - due after one year',
      render: () => (
        <Tab.Pane>
          <LongTermLiabilitiesForm
            netWording="Long-term liabilities - due after one year"
          />
        </Tab.Pane>
      ),
    },
  ];

  return (
    <>
      <Form.Group widths="equal">
        <Form.Input
          label="Accounts Payable and Accrued Liabilities"
          name="accountsPayable"
          value={formData.accountsPayable}
          onChange={handleChange}
          type="number"
        />
        <Form.Input
          label="Due to Fund"
          name="dueToFund"
          value={formData.dueToFund}
          onChange={handleChange}
          type="number"
        />
        <Form.Input
          label="Due to Other Funds"
          name="dueToOtherFunds"
          value={formData.dueToOtherFunds}
          onChange={handleChange}
          type="number"
        />
      </Form.Group>

      <Segment>
        <Tab panes={panes} />
      </Segment>

      <Form.Group widths={4} className="total-fields">
        <Form.Input
          className="dotted-input"
          label="Total Liabilities"
          name="totalLiabilities"
          value={formData.totalLiabilities}
          onChange={handleChange}
          type="number"
          readOnly
        />
      </Form.Group>

      <Form.Group widths="equal">
        <Form.Input
          label="Deferred inflows of resources related to pensions"
          name="deferredInflowsPensions"
          value={formData.deferredInflowsPensions}
          onChange={handleChange}
          type="number"
        />
        <Form.Input
          label="Deferred inflows of resources related to OPEB"
          name="deferredInflowsOPEB"
          value={formData.deferredInflowsOPEB}
          onChange={handleChange}
          type="number"
        />
        <Form.Input
          className="dotted-input"
          label="Net liabilities & deferred inflows of resources"
          name="netLiabilitiesDeferredInflows"
          value={formData.netLiabilitiesDeferredInflows}
          onChange={handleChange}
          type="number"
          readOnly
        />
      </Form.Group>
    </>
  );
};

Liabilities.propTypes = {
  formData: PropTypes.shape({
    accountsPayable: PropTypes.number,
    dueToFund: PropTypes.number,
    dueToOtherFunds: PropTypes.number,
    totalLiabilities: PropTypes.number,
    deferredInflowsPensions: PropTypes.number,
    deferredInflowsOPEB: PropTypes.number,
    netLiabilitiesDeferredInflows: PropTypes.number,
  }),
  handleChange: PropTypes.func,
};

Liabilities.defaultProps = {
  formData: {},
  handleChange: () => {},
};

export default Liabilities;