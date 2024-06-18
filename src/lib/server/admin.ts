import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { FB_CLIENT_EMAIL, FB_PRIVATE_KEY, FB_PROJECT_ID } from '$env/static/private';
import pkg from 'firebase-admin';

try {
	pkg.initializeApp({
		credential: pkg.credential.cert({
			projectId: FB_PROJECT_ID,
			clientEmail: FB_CLIENT_EMAIL,
			privateKey: FB_PRIVATE_KEY
		})
	});
} catch (error: any) {
	if (!/already exists/u.test(error.message)) {
		console.error('Firebase Admin Error:', error.stack);
	}
}

export const adminDB = getFirestore();
export const adminAuth = getAuth();