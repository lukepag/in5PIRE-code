import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../stuff/StuffCollection';
import { AdminProfiles } from '../user/AdminProfileCollection';
import { UserProfiles } from '../user/UserProfileCollection';
import { FinancialProfiles } from '../FinancialProfiles/FinancialProfilesCollection';
import { BalanceSheetInputs } from '../BalanceSheetInput/BalanceSheetInputCollection';
import { StaticFinancials } from '../financial/StaticFinancialsCollection';
import { BudgetFormInput } from '../BudgetFormInput/BudgetFormInputCollection';
import { FinancialStatementInput } from '../FinancialStatementInput/FinancialStatementInputCollection';
import { InvestmentStaticPercentages } from '../Investment/InvestmentStaticPercentagesCollection';

class MATPClass {
  collections;

  collectionLoadSequence;

  collectionAssociation;

  constructor() {
    // list of all the MATPCollections collections
    this.collections = [
      AdminProfiles,
      Stuffs,
      UserProfiles,
      FinancialProfiles,
      BalanceSheetInputs,
      StaticFinancials,
      BudgetFormInput,
      FinancialStatementInput,
      InvestmentStaticPercentages,
    ];
    /*
     * A list of collection class instances in the order required for them to be sequentially loaded from a file.
     */
    this.collectionLoadSequence = [
      AdminProfiles,
      UserProfiles,
      Stuffs,
      FinancialProfiles,
      BalanceSheetInputs,
      StaticFinancials,
      BudgetFormInput,
      FinancialStatementInput,
      InvestmentStaticPercentages,
    ];

    /*
     * An object with keys equal to the collection name and values the associated collection instance.
     */
    this.collectionAssociation = {};
    this.collections.forEach((collection) => {
      this.collectionAssociation[collection.getCollectionName()] = collection;
    });

  }

  /**
   * Return the collection class instance given its name.
   * @param collectionName The name of the collection.
   * @returns The collection class instance.
   * @throws { Meteor.Error } If collectionName does not name a collection.
   */
  getCollection(collectionName) {
    // console.log('MATPCollections', collectionName, this.collectionAssociation);
    const collection = this.collectionAssociation[collectionName];
    if (!collection) {
      throw new Meteor.Error(`Called MARTPCollections.getCollection with unknown collection name: ${collectionName}`);
    }
    return collection;
  }
}

export const MATPCollections = new MATPClass();
