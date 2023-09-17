import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyBudkNKjcT6wcmLWpwsPpK5s0UVgT3ehQM",
	authDomain: "leet-o.firebaseapp.com",
	databaseURL: "https://leet-o-default-rtdb.firebaseio.com",
	projectId: "leet-o",
	storageBucket: "leet-o.appspot.com",
	messagingSenderId: "1058883914691",
	appId: "1:1058883914691:web:78274d3016b469aced8b76"
};

export const app = initializeApp(firebaseConfig);