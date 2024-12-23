import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

const GeneralRevenues = ({ formData, handleChange }) => (
  <>
    <Form.Group widths="equal">
      <Form.Input
        label="Appropriations, net of lapses"
        name="appropriationsNetLapses"
        value={formData.appropriationsNetLapses}
        onChange={handleChange}
        type="number"
      />
      <Form.Input
        label="Trust"
        name="trust"
        value={formData.trust}
        onChange={handleChange}
        type="number"
      />
      <Form.Input
        label="Interest and Investment (losses) Earnings"
        name="interestAndInvestmentLosses"
        value={formData.interestAndInvestmentLosses}
        onChange={handleChange}
        type="number"
      />
      <Form.Input
        label="Newspaper Ads"
        name="newspaperAds"
        value={formData.newspaperAds}
        onChange={handleChange}
        type="number"
      />
    </Form.Group>
    <Form.Group widths="equal">
      <Form.Input
        label="Donations and Other"
        name="donationsAndOther"
        value={formData.donationsAndOther}
        onChange={handleChange}
        type="number"
      />
      <Form.Input
        label="Non-Imposed Fringe Benefits"
        name="nonImposedFringeBenefits"
        value={formData.nonImposedFringeBenefits}
        onChange={handleChange}
        type="number"
      />
      <Form.Input
        label="Limited Liability Company B"
        name="llcBRevenues"
        value={formData.llcBRevenues}
        onChange={handleChange}
        type="number"
      />
      <Form.Input
        className="dotted-input"
        label="Total General Revenues"
        name="totalGeneralRevenues"
        value={formData.totalGeneralRevenues}
        onChange={handleChange}
        type="number"
        readOnly
      />
    </Form.Group>
    <Form.Group className="total-fields">
      <Form.Input
        width={4}
        className="dotted-input"
        label="Total Revenues"
        name="totalRevenues"
        value={formData.totalRevenues}
        onChange={handleChange}
        type="number"
        readOnly
      />
    </Form.Group>
  </>
);

GeneralRevenues.propTypes = {
  formData: PropTypes.shape({
    appropriationsNetLapses: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    trust: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    interestAndInvestmentLosses: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    newspaperAds: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    donationsAndOther: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    nonImposedFringeBenefits: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    llcBRevenues: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    totalGeneralRevenues: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    totalRevenues: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),
  handleChange: PropTypes.func,
};

GeneralRevenues.defaultProps = {
  formData: [],
  handleChange: () => {},
};

export default GeneralRevenues;
