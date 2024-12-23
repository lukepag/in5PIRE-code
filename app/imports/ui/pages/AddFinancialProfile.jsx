import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, SubmitField, TextField, SelectField, LongTextField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { FinancialProfiles } from '../../api/FinancialProfiles/FinancialProfilesCollection';
import { defineMethod } from '../../api/base/BaseCollection.methods';
import { PAGE_IDS } from '../utilities/PageIDs';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  title: String,
  type: {
    type: String,
    allowedValues: ['Personal', 'Business'],
    defaultValue: 'Personal',
  },
  description: {
    type: String,
    optional: true,
  },
  image: {
    type: String,
    optional: true,
  },
  members: {
    type: Array,
    optional: true,
  },
  'members.$': {
    type: Object,
  },
  'members.$.username': {
    type: String,
    label: 'Invite User by Username',
  },
  'members.$.role': {
    type: String,
    allowedValues: ['admin', 'viewer'],
    defaultValue: 'viewer',
  },
});

const bridge = new SimpleSchema2Bridge(formSchema);

/* Renders the AddFinancialProfile page for adding a new financial profile. */
const AddFinancialProfile = () => {
  const navigate = useNavigate();

  const submit = (data, formRef) => {
    const { title, type, description, image, members = [] } = data;
    const ownerId = Meteor.userId();

    // Automatically assign the profile creator as an admin
    const fullMembers = [{ userId: ownerId, role: 'admin' }];

    members.forEach((member) => {
      const user = Meteor.users.findOne({ username: member.username });
      if (user) {
        fullMembers.push({ userId: user._id, role: member.role });
      } else {
        console.warn(`User with username ${member.username} not found.`);
      }
    });

    const collectionName = FinancialProfiles.getCollectionName();
    const definitionData = { title, type, description, image, owner: ownerId, members: fullMembers };

    defineMethod.callPromise({ collectionName, definitionData })
      .then(() => {
        swal('Success', 'Financial profile added successfully', 'success');
        formRef.reset();
        navigate('/financial-profiles');
      })
      .catch(error => swal('Error', error.message, 'error'));
  };

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  let fRef = null;
  return (
    <Container id={PAGE_IDS.ADD_FINANCIAL_PROFILE} className="py-3">
      <br />
      {/* Go back to financial Profile Page */}
      <Row>
        <Col xs="auto" className="px-3">
          <Button variant="secondary" onClick={() => navigate('/financial-profiles')}>
            Back to Financial Profiles
          </Button>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center"><h2>Add Financial Profile</h2></Col>
          <hr />
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Card>
              <Card.Body>
                <TextField name="title" />
                <SelectField name="type" />
                <LongTextField name="description" placeholder="Enter scenerio description (optional)" />
                <LongTextField name="image" placeholder="Enter image URL (optional)" />
                <SubmitField value="Submit" />
                <Row>
                  <Col className="pt-1">
                    <Button variant="secondary" onClick={() => navigate('/financial-profiles')}>
                      Back to Financial Profiles
                    </Button>
                  </Col>
                </Row>
                <ErrorsField />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

export default AddFinancialProfile;
