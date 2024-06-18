import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyDpDmCNVM9w5BEBj0PN9M-2Mwm7OVAnZcE',

	authDomain: 'personal-cv-82fa3.firebaseapp.com',

	projectId: 'personal-cv-82fa3',

	storageBucket: 'personal-cv-82fa3.appspot.com',

	messagingSenderId: '513567646183',

	appId: '1:513567646183:web:3d79bfecca522a15fb5d42',

	measurementId: 'G-7RJN3H3V8C'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
