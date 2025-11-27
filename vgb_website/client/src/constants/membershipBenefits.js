// client/src/constants/membershipData.js
export const membershipPlans = [
  {
    id: 'BASIC MEMBERSHIP',
    name: 'Basic Membership',
    price: 365,
    period: 'yearly',
    features: [
      'Access to online resources',
      'Quarterly newsletter',
      'Invitation to basic cultural events',
      'Digital certificate of membership',
      'Members-only forum access',
    ],
  },
  {
    id: 'SILVER MEMBERSHIP',
    name: 'Silver Membership',
    price: 999,
    period: 'yearly',
    features: [
      'All Basic membership benefits',
      'Monthly webinars and workshops',
      'Vedic literature digital collection',
      'Discounted Sanskrit learning sessions',
      'Special invitations to cultural programs',
      'Personalized spiritual guidance',
    ],
    recommended: true,
  },
  {
    id: 'GOLD MEMBERSHIP',
    name: 'Gold Membership',
    price: 1999,
    period: 'yearly',
    features: [
      'All Silver membership benefits',
      'Personal spiritual guidance sessions',
      'Priority seating at major events',
      'Exclusive retreats and workshops',
      'Complete library of Vedic texts',
      'Name recognition on our donor wall',
      'VIP invitations to all major programs',
    ],
  },
];

export const membershipBenefits = {
  'BASIC MEMBERSHIP': [
    'Access to online resources',
    'Quarterly newsletter',
    'Invitation to basic cultural events',
    'Digital certificate of membership',
    'Members-only forum access',
  ],
  'SILVER MEMBERSHIP': [
    'All Basic membership benefits',
    'Monthly webinars and workshops',
    'Vedic literature digital collection',
    'Discounted Sanskrit learning sessions',
    'Special invitations to cultural programs',
    'Personalized spiritual guidance',
  ],
  'GOLD MEMBERSHIP': [
    'All Silver membership benefits',
    'Personal spiritual guidance sessions',
    'Priority seating at major events',
    'Exclusive retreats and workshops',
    'Complete library of Vedic texts',
    'Name recognition on our donor wall',
    'VIP invitations to all major programs',
  ],
};
