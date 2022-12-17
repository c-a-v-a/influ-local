import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
        apiKey: "AIzaSyAqmlS3TUItImVQIFvKWoNZ5r7s0nzvAmU",
        authDomain: "hackathon-d8a9f.firebaseapp.com",
        projectId: "hackathon-d8a9f",
        storageBucket: "hackathon-d8a9f.appspot.com",
        messagingSenderId: "601109998526",
        appId: "1:601109998526:web:c0b0c5fd17c912a40c67ef",
        databaseURL: "https://hackathon-d8a9f-default-rtdb.europe-west1.firebasedatabase.app/"
	};

const app = initializeApp(firebaseConfig);

export default getDatabase(app);