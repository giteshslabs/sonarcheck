import { registerAs } from '@nestjs/config';

export const applicationConfig = registerAs('application', () => ({
  dhp: {
    projectId: process.env.DHP_FIREBASE_PROJECT_ID,
    privateKey: process.env.DHP_FIREBASE_PRIVATE_KEY,
    clientEmail: process.env.DHP_FIREBASE_CLIENT_EMAIL,
  },
}));
