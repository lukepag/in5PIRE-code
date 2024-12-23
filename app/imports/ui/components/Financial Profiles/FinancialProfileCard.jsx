import React, { useEffect } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Card, Image, Button, Header, Grid, Icon } from 'semantic-ui-react';
import { FinancialProfiles } from '../../../api/FinancialProfiles/FinancialProfilesCollection';
import MemberListDropdown from './ListMembers';

const FinancialProfileCard = ({
  title,
  imgSrc,
  profileType,
  description,
  createdDate,
  editedDate,
  userRole,
  profileId,
}) => {
  const navigate = useNavigate();
  const { members } = useTracker(() => {
    const profile = FinancialProfiles.findOne(profileId);
    return { members: profile ? profile.members : [] };
  });

  const handleEditProfile = () => {
    navigate(`/edit-financial-profile/${profileId}`);
  };

  const handleEditBalanceSheet = () => {
    navigate(`/balance-sheet/${profileId}`);
  };

  const handleEditBudgetForm = () => {
    navigate(`/budget-form/${profileId}`);
  };

  const handleEditFinancialStatement = () => {
    navigate(`/audited-fs/${profileId}`);
  };

  const handleViewProfileDashboard = () => {
    navigate(`/profiledashboard/${profileId}`);
  };

  useEffect(() => {
    // Subscribe to userEmails to get access to users' emails
    const userEmailSubscription = Meteor.subscribe('userEmails');
    return () => {
      userEmailSubscription.stop(); // Clean up on unmount
    };
  }, []);

  return (
    <Card fluid>
      <Image src={imgSrc || '/images/GraphPlaceholder.png'} />
      <Card.Content>
        <Header as="h1" textAlign="center" style={{ marginBottom: '20px' }}>
          {title}
        </Header>
        <Grid textAlign="center">
          <Grid.Row>
            <p><strong>Profile Type: </strong>{profileType}</p>
          </Grid.Row>
          <Grid.Row>
            <p>{description}</p>
          </Grid.Row>
          <Grid.Row>
            <p style={{ fontSize: '0.8em', color: 'gray' }}>Created: {createdDate}</p>
            <p style={{ fontSize: '0.8em', color: 'gray' }}>Last Edited: {editedDate}</p>
          </Grid.Row>
        </Grid>
      </Card.Content>
      <Card.Content extra>
        <Grid columns={1}>
          {userRole === 'admin' && (
            <Grid.Column>
              <Button className="mb-2" fluid color="grey" onClick={handleEditProfile}>
                <Icon name="edit" /> Edit Scenario
              </Button>

              <Button className="mb-2" fluid color="blue" onClick={handleEditBalanceSheet}>
                <Icon name="edit" /> Edit Balance Sheet
              </Button>

              <Button className="mb-2" fluid color="blue" onClick={handleEditBudgetForm}>
                <Icon name="edit" /> Edit Budget Form
              </Button>

              <Button className="mb-2" fluid color="blue" onClick={handleEditFinancialStatement}>
                <Icon name="edit" /> Edit Audited Financial Statement
              </Button>
            </Grid.Column>

          )}
          <Grid.Column>
            <Button fluid color="teal" onClick={handleViewProfileDashboard}>
              <Icon name="dashboard" /> View Profile Dashboard
            </Button>
          </Grid.Column>
        </Grid>
      </Card.Content>
      <Card.Content extra>
        {/* Members Dropdown */}
        <MemberListDropdown members={members} />
      </Card.Content>
      {userRole !== 'admin' && (
        <Card.Content extra>
          <Button
            color="red"
            fluid
            onClick={() => {
              swal({
                title: 'Are you sure?',
                text: 'You will be removed from this profile!',
                icon: 'warning',
                buttons: true,
                dangerMode: true,
              }).then((willDelete) => {
                if (willDelete) {
                  Meteor.call('FinancialProfiles.removeMember', profileId, Meteor.userId(), (error) => {
                    if (error) {
                      swal('Error', error.message, 'error');
                    } else {
                      swal('Success', 'You have been removed from the profile', 'success');
                      navigate('/financial-profiles');
                    }
                  });
                }
              });
            }}
          >
            Leave Profile
          </Button>
        </Card.Content>
      )}
    </Card>
  );
};

// PropTypes for validation
FinancialProfileCard.propTypes = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  profileType: PropTypes.string,
  description: PropTypes.string,
  createdDate: PropTypes.string,
  editedDate: PropTypes.string,
  userRole: PropTypes.string.isRequired,
  profileId: PropTypes.string.isRequired,
};

// Default props for optional fields
FinancialProfileCard.defaultProps = {
  profileType: 'Unknown',
  description: 'No description available.',
  createdDate: 'Not available',
  editedDate: 'Not available',
};

export default FinancialProfileCard;
