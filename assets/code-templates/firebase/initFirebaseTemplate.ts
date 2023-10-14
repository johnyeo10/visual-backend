import admin from 'firebase-admin';
import path from 'path';
import fs from 'fs';
import { Auth } from 'firebase-admin/auth';
import { Firestore } from 'firebase-admin/firestore';

export let auth: Auth;
export let firestore: Firestore;

export const initFirebase = () => {
  try {
    let credentials;
    if (process.env.NODE_ENV == 'production') {
      credentials = process.env.FIREBASE_CREDENTIALS
        ? JSON.parse(process.env.FIREBASE_CREDENTIALS)
        : undefined;
    } else {
      let credentialsPath = path.join(
        process.cwd(),
        'credentials',
        'firebase_credentials.json'
      );
      credentials = JSON.parse(fs.readFileSync(credentialsPath, 'utf-8'));
    }

    admin.initializeApp({
      credential: admin.credential.cert(credentials),
    });

    auth = admin.auth();
    firestore = admin.firestore();

    console.log('Firebase module initialised');
  } catch (error) {
    console.log('Firebase module failed to initialise');
  }
};
