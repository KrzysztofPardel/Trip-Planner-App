// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBB4gf4R7jNBx9o_FxosY25d2GrAI_hrmI',
	authDomain: 'todo-app-d0a8f.firebaseapp.com',
	projectId: 'todo-app-d0a8f',
	storageBucket: 'todo-app-d0a8f.appspot.com',
	messagingSenderId: '332374461246',
	appId: '1:332374461246:web:a58ac0d95ca9cf282b3a6f',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
