import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyCMIvMZnGi5XC5YEpAd16GH2YBq1yYshR8",
	authDomain: "leet-play.firebaseapp.com",
	projectId: "leet-play",
	storageBucket: "leet-play.appspot.com",
	messagingSenderId: "243956122463",
	appId: "1:243956122463:web:949a7bae8a3cea3d43acea",
	measurementId: "G-LTQHH613L8"
};

export const app = initializeApp(firebaseConfig);