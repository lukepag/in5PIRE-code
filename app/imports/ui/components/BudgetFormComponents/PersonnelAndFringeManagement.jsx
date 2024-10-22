import React from 'react';
import { Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const PersonnelAndFringeManagement = ({ formData, handleChange }) => (
  <>
    <Form.Input
      width={4}
      label="Salary"
      name="salaryManagement"
      value={formData.salaryManagement ?? ''}
      onChange={handleChange}
      type="number"
    />
    <h3>Fringe Benefits</h3>
    <Form.Group widths="equal">
      <Form.Input
        label="Pension Accumulation"
        name="pensionAccumulationManagement"
        value={formData.pensionAccumulationManagement ?? ''}
        onChange={handleChange}
        type="number"
      />
      <Form.Input
        label="Retiree Health Insurance"
        name="retireeHealthInsuranceManagement"
        value={formData.retireeHealthInsuranceManagement ?? ''}
        onChange={handleChange}
        type="number"
      />
      <Form.Input
        label="Other Post-Employment Benefits"
        name="postEmploymentBenefitsManagement"
        value={formData.postEmploymentBenefitsManagement ?? ''}
        onChange={handleChange}
        type="number"
      />
      <Form.Input
        label="Employees Health Fund"
        name="employeesHealthFundManagement"
        value={formData.employeesHealthFundManagement ?? ''}
        onChange={handleChange}
        type="number"
      />
    </Form.Group>
    <Form.Group widths="equal">
      <Form.Input
        label="Social Security"
        name="socialSecurityManagement"
        value={formData.socialSecurityManagement ?? ''}
        onChange={handleChange}
        type="number"
      />
      <Form.Input
        label="Medicare"
        name="medicareManagement"
        value={formData.medicareManagement ?? ''}
        onChange={handleChange}
        type="number"
      />
      <Form.Input
        label="Workers Compensation"
        name="workersCompensationManagement"
        value={formData.workersCompensationManagement ?? ''}
        onChange={handleChange}
        type="number"
      />
      <Form.Input
        label="Unemployment Compensation"
        name="unemploymentCompensationManagement"
        value={formData.unemploymentCompensationManagement ?? ''}
        onChange={handleChange}
        type="number"
      />
      <Form.Input
        label="Pension Administration"
        name="pensionAdministrationManagement"
        value={formData.pensionAdministrationManagement ?? ''}
        onChange={handleChange}
        type="number"
      />
    </Form.Group>
  </>
);

PersonnelAndFringeManagement.propTypes = {
  formData: PropTypes.shape({
    salaryManagement: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    pensionAccumulationManagement: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    retireeHealthInsuranceManagement: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    postEmploymentBenefitsManagement: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    employeesHealthFundManagement: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    socialSecurityManagement: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    medicareManagement: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    workersCompensationManagement: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    unemploymentCompensationManagement: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    pensionAdministrationManagement: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),
  handleChange: PropTypes.func,
};

PersonnelAndFringeManagement.defaultProps = {
  formData: {},
  handleChange: () => {},
};

export default PersonnelAndFringeManagement;
