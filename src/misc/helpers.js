import UsersDB from '@/firebase/users-db'

/**
 * Create new user from firebase auth user infos
 */
// eslint-disable-next-line
export const createNewUserFromFirebaseAuthUser = async firebaseAuthUser => {
  const providerData = firebaseAuthUser.providerData[0] || firebaseAuthUser
  const { displayName, photoURL, email } = providerData
  const userDb = new UsersDB()
  const user = {
    displayName,
    photoURL,
    email
  }

  console.log(firebaseAuthUser.uid)

  return await userDb.create(user, firebaseAuthUser.uid)
}
