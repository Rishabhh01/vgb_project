import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaUser, FaEdit, FaCheck, FaTimes } from 'react-icons/fa';
import AuthContext from '../context/AuthContext';

const ProfilePage = () => {
  const { user, loading, error, updateProfile } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    profession: '',
    location: '',
    phone: '',
  });
  const [formError, setFormError] = useState('');
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const navigate = useNavigate();

  // Redirect if user is not logged in
  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
    
    // Initialize form data with user data when available
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        company: user.company || '',
        profession: user.profession || '',
        location: user.location || '',
        phone: user.phone || '',
      });
    }
  }, [user, loading, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    setUpdateSuccess(false);

    try {
      const result = await updateProfile(formData);
      if (result.success) {
        setUpdateSuccess(true);
        setIsEditing(false);
        // Reset success message after 3 seconds
        setTimeout(() => {
          setUpdateSuccess(false);
        }, 3000);
      } else {
        setFormError(result.message || 'Failed to update profile');
      }
    } catch (err) {
      setFormError('An unexpected error occurred');
      console.error('Profile update error:', err);
    }
  };

  if (loading) {
    return (
      <ProfileContainer>
        <div className="container">
          <LoadingMessage>Loading profile...</LoadingMessage>
        </div>
      </ProfileContainer>
    );
  }

  return (
    <ProfileContainer>
      <div className="container">
        <ProfileCard>
          <ProfileHeader>
            <ProfileTitle>My Profile</ProfileTitle>
            {!isEditing && (
              <EditButton onClick={() => setIsEditing(true)}>
                <FaEdit /> Edit Profile
              </EditButton>
            )}
          </ProfileHeader>

          {updateSuccess && (
            <SuccessMessage>
              <FaCheck /> Profile updated successfully!
            </SuccessMessage>
          )}

          {formError && (
            <ErrorMessage>
              <FaTimes /> {formError}
            </ErrorMessage>
          )}

          {isEditing ? (
            <ProfileForm onSubmit={handleSubmit}>
              <FormRow>
                <FormGroup>
                  <FormLabel htmlFor="name">Full Name</FormLabel>
                  <FormInput
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <FormInput
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    readOnly
                  />
                </FormGroup>
              </FormRow>

              <FormRow>
                <FormGroup>
                  <FormLabel htmlFor="company">Company</FormLabel>
                  <FormInput
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <FormLabel htmlFor="profession">Profession</FormLabel>
                  <FormInput
                    type="text"
                    id="profession"
                    name="profession"
                    value={formData.profession}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </FormRow>

              <FormRow>
                <FormGroup>
                  <FormLabel htmlFor="location">Location</FormLabel>
                  <FormInput
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </FormGroup>

                <FormGroup>
                  <FormLabel htmlFor="phone">Phone Number</FormLabel>
                  <FormInput
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </FormGroup>
              </FormRow>

              <FormActions>
                <CancelButton type="button" onClick={() => setIsEditing(false)}>
                  Cancel
                </CancelButton>
                <SaveButton type="submit">Save Changes</SaveButton>
              </FormActions>
            </ProfileForm>
          ) : (
            <ProfileDetails>
              <ProfileAvatar>
                <FaUser />
              </ProfileAvatar>
              
              <ProfileInfo>
                <ProfileName>{user?.name}</ProfileName>
                <ProfileEmail>{user?.email}</ProfileEmail>
                
                <ProfileDetailsSection>
                  <ProfileDetailTitle>Business Information</ProfileDetailTitle>
                  <ProfileDetailItem>
                    <DetailLabel>Company:</DetailLabel>
                    <DetailValue>{user?.company || 'Not specified'}</DetailValue>
                  </ProfileDetailItem>
                  <ProfileDetailItem>
                    <DetailLabel>Profession:</DetailLabel>
                    <DetailValue>{user?.profession || 'Not specified'}</DetailValue>
                  </ProfileDetailItem>
                </ProfileDetailsSection>
                
                <ProfileDetailsSection>
                  <ProfileDetailTitle>Contact Information</ProfileDetailTitle>
                  <ProfileDetailItem>
                    <DetailLabel>Location:</DetailLabel>
                    <DetailValue>{user?.location || 'Not specified'}</DetailValue>
                  </ProfileDetailItem>
                  <ProfileDetailItem>
                    <DetailLabel>Phone:</DetailLabel>
                    <DetailValue>{user?.phone || 'Not specified'}</DetailValue>
                  </ProfileDetailItem>
                </ProfileDetailsSection>
                
                <MembershipSection>
                  <SectionTitle>Membership Status</SectionTitle>
                  {user.membershipStatus === 'active' ? (
                    <>
                      <StatusBadge active>Active</StatusBadge>
                      <MembershipDetails>
                        <DetailRow>
                          <DetailLabel>Type:</DetailLabel>
                          <DetailValue>{user.membershipType || 'Standard'}</DetailValue>
                        </DetailRow>
                        {user.membershipStartDate && (
                          <DetailRow>
                            <DetailLabel>Since:</DetailLabel>
                            <DetailValue>
                              {new Date(user.membershipStartDate).toLocaleDateString()}
                            </DetailValue>
                          </DetailRow>
                        )}
                        {user.membershipEndDate && (
                          <DetailRow>
                            <DetailLabel>Valid until:</DetailLabel>
                            <DetailValue>
                              {new Date(user.membershipEndDate).toLocaleDateString()}
                            </DetailValue>
                          </DetailRow>
                        )}
                      </MembershipDetails>
                      <RedirectButton onClick={() => navigate('/membership-details')}>
                        View Membership Details
                      </RedirectButton>
                    </>
                  ) : (
                    <>
                      <StatusRow>
                        <StatusBadge>Pending</StatusBadge>
                        <MembershipMessage>
                          Complete your membership to access all features
                        </MembershipMessage>
                      </StatusRow>
                      <MembershipButton onClick={() => navigate('/membership')}>
                        Become a Member
                      </MembershipButton>
                      <RedirectButton onClick={() => navigate('/membership-details')}>
                        View Membership Details
                      </RedirectButton>
                    </>
                  )}
                </MembershipSection>
              </ProfileInfo>
            </ProfileDetails>
          )}
        </ProfileCard>
      </div>
    </ProfileContainer>
  );
};

export default ProfilePage;

const ProfileContainer = styled.div`
  padding: 60px 0;
  background-color: #f8f8f8;
`;

const LoadingMessage = styled.div`
  text-align: center;
  font-size: 1.2rem;
  padding: 40px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const ProfileCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding: 30px;
  max-width: 1000px;
  margin: 0 auto;
`;

const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  border-bottom: 1px solid #eee;
  padding-bottom: 15px;
`;

const ProfileTitle = styled.h1`
  color: var(--secondary-color);
  font-size: 1.8rem;
  margin: 0;
`;

const EditButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 15px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #b01c26;
  }
  
  svg {
    font-size: 14px;
  }
`;

const SuccessMessage = styled.div`
  background-color: #d4edda;
  color: #155724;
  padding: 12px 15px;
  border-radius: 5px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  
  svg {
    color: #28a745;
  }
`;

const ErrorMessage = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  padding: 12px 15px;
  border-radius: 5px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  
  svg {
    color: #dc3545;
  }
`;

const ProfileForm = styled.form`
  margin-top: 20px;
`;

const FormRow = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;

const FormGroup = styled.div`
  flex: 1;
  
  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: var(--secondary-color);
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s;
  
  &:focus {
    border-color: var(--primary-color);
    outline: none;
  }
  
  &:read-only {
    background-color: #f9f9f9;
    cursor: not-allowed;
  }
`;

const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-top: 20px;
`;

const CancelButton = styled.button`
  background-color: #f1f1f1;
  color: #333;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #e1e1e1;
  }
`;

const SaveButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #b01c26;
  }
`;

const ProfileDetails = styled.div`
  display: flex;
  gap: 30px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const ProfileAvatar = styled.div`
  width: 120px;
  height: 120px;
  background-color: #f1f1f1;
  border-radius: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  color: #666;
  flex-shrink: 0;
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const ProfileName = styled.h2`
  font-size: 1.5rem;
  color: var(--secondary-color);
  margin: 0 0 5px;
`;

const ProfileEmail = styled.p`
  color: #666;
  margin: 0 0 20px;
`;

const ProfileDetailsSection = styled.div`
  margin-bottom: 25px;
`;

const ProfileDetailTitle = styled.h3`
  font-size: 1.1rem;
  color: var(--secondary-color);
  margin: 0 0 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid #eee;
`;

const ProfileDetailItem = styled.div`
  display: flex;
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const DetailLabel = styled.span`
  font-weight: 500;
  width: 120px;
  color: #666;
  
  @media (max-width: 768px) {
    width: auto;
    margin-bottom: 3px;
  }
`;

const DetailValue = styled.span`
  color: #333;
`;

const MembershipSection = styled.div`
  margin-top: 30px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const SectionTitle = styled.h3`
  color: var(--secondary-color);
  margin-bottom: 15px;
  font-size: 1.2rem;
`;

const StatusBadge = styled.span`
  display: inline-block;
  padding: 6px 12px;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 600;
  background-color: ${(props) =>
    props.active ? '#d4edda' : '#fff3cd'};
  color: ${(props) => (props.active ? '#155724' : '#856404')};
`;

const StatusRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

const MembershipMessage = styled.p`
  margin-left: 12px;
  color: #666;
  
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const MembershipDetails = styled.div`
  margin-top: 15px;
`;

const DetailRow = styled.div`
  display: flex;
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const MembershipButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
  width: fit-content;
  
  &:hover {
    background-color: #b01c26;
  }
`;

const RedirectButton = styled.button`
  background-color: #cd232e;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
  width: fit-content;
  
  &:hover {
    background-color: #b01c26;
  }
`;