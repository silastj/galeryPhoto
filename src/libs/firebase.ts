import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAFVhv5Pf_EwRf71zOe0fz16hoW9_9eNdU",
  authDomain: "galleryphoto-95a77.firebaseapp.com",
  projectId: "galleryphoto-95a77",
  storageBucket: "galleryphoto-95a77.appspot.com",
  messagingSenderId: "530196546996",
  appId: "1:530196546996:web:75d4d7f378a276f2921ee1",
  measurementId: "G-1VCR8ESPJH"
};

const firebaseApp = initializeApp(firebaseConfig)

export const storage = getStorage(firebaseApp)