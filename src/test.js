import firebase from 'firebase/app'
import 'firebase/firestore'

const firestore = firebase.firestore()

firestore.collection('users').doc('2zUHDcibG7ATQaVQDJ5k').collection('cartItems').doc('3ZvYzNwxgqsgrwhnEKBD')
firestore.doc('/users/2zUHDcibG7ATQaVQDJ5k/cartItems/3ZvYzNwxgqsgrwhnEKBD')
firestore.collection('/users/2zUHDcibG7ATQaVQDJ5k/cartItems')