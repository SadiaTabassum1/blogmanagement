import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'
const firebaseApp = firebase.initializeApp(firebaseConfig)

const storage = firebase.storage()

export { storage}
export default firebaseApp.firestore()
