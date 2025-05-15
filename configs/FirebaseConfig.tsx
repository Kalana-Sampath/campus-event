// firebaseConfig.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getApps, initializeApp } from "firebase/app";
//@ts-ignore
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAqLk3PP8exg5kNI54nKUOL-aYhR7Mhs84",
  authDomain: "campus-event-f309e.firebaseapp.com",
  projectId: "campus-event-f309e",
  storageBucket: "campus-event-f309e.appspot.com",
  messagingSenderId: "1029237611636",
  appId: "1:1029237611636:web:33ba151c5a433553a08521",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const storage = getStorage(app);
