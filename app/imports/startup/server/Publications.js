import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { check } from 'meteor/check';
import { MATPCollections } from '../../api/matp/MATPCollections';
import { StaticFinancials } from '../../api/financial/StaticFinancialsCollection';
import { BalanceSheetInputs } from '../../api/BalanceSheetInput/BalanceSheetInputCollection';
import { BudgetFormInput } from '../../api/BudgetFormInput/BudgetFormInputCollection';
import { FinancialStatementInput } from '../../api/FinancialStatementInput/FinancialStatementInputCollection';
import { InvestmentStaticPercentages } from '../../api/Investment/InvestmentStaticPercentagesCollection';
// Call publish for all the collections.
MATPCollections.collections.forEach(c => c.publish());

// alanning:roles publication
// Recommended code to publish roles for each user.
// eslint-disable-next-line consistent-return
Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  this.ready();
});

// Publish StaticFinancials for regular users
Meteor.publish('staticFinancials', function publishStaticFinancials() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return StaticFinancials._collection.find({ owner: username });
  }
  return this.ready();
});

// Publish StaticFinancials for profile-specific data
Meteor.publish('staticFinancialsForProfile', function publishStaticFinancialsForProfile(profileId) {
  check(profileId, String);
  if (this.userId) {
    return StaticFinancials.find({ profileId });
  }
  return this.ready();
});

// publish emails
Meteor.publish('userEmails', function publishUserEmails() {
  if (this.userId) {
    return Meteor.users.find({}, { fields: { emails: 1 } }); // Publish only emails field
  }
  return this.ready();
});

// Publish StaticFinancials for admin users
Meteor.publish('staticFinancialsAdmin', function publishStaticFinancialsAdmin() {
  if (this.userId && Roles.userIsInRole(this.userId, 'ADMIN')) {
    return StaticFinancials._collection.find();
  }
  return this.ready();
});

Meteor.publish('defaultBalanceSheetData', function publishBalanceSheet(profileId) {
  if (!this.userId) {
    return this.ready();
  }

  check(profileId, String);
  if (!profileId) {
    throw new Meteor.Error('profileId-required', 'A profileId is required to publish balance sheet inputs.');
  }

  return BalanceSheetInputs.find({ profileId });
});

Meteor.publish('defaultBudgetFormInput', function publishBudgetForm(profileId) {
  if (!this.userId) {
    return this.ready();
  }

  check(profileId, String);

  if (!profileId) {
    throw new Meteor.Error('profileId-required', 'A profileId is required to publish budget form inputs.');
  }

  return BudgetFormInput.find({ profileId });
});

Meteor.publish('defaultFinancialStatementData', function publishBudgetForm(profileId) {
  if (!this.userId) {
    return this.ready();
  }

  check(profileId, String);

  if (!profileId) {
    throw new Meteor.Error('profileId-required', 'A profileId is required to publish audited financial inputs.');
  }

  return FinancialStatementInput.find({ profileId });
});

Meteor.publish('investmentStaticPercentages', function publishInvestmentStaticPercentages() {
  return InvestmentStaticPercentages.find();
});
