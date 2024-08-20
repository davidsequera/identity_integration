'use client'

export const UserContext = createContext({
    user: null,
    loadingUser: true,
    signIn: async() => console.error('UserContext not implemented'),
    siginUp: async () => console.error('UserContext not implemented'),
    signOut: async () => console.error('UserContext not implemented'),
});

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState<UserType | null>(null);
    const [loadingUser, setLoadingUser] = useState<boolean>(true);

    // useEffect(() => {
    //     const unsubscriber = onAuthStateChanged(auth, async (user) => {
    //         try {
    //           if (user) {
    //             // User is signed in.
    //             const { uid, displayName, email, photoURL, phoneNumber, providerId } = user;
    //             // You could also look for the user doc in your Firestore (if you have one):
    //             // const userDoc = await firebase.firestore().doc(`users/${uid}`).get()
    //             setUser({ uid, displayName, email, photoURL, phoneNumber, providerId, access_token: 'algo raro esta pasando'});
    //           } else setUser(null);
    //         } catch (error) {
    //           // Most probably a connection error. Handle appropriately.
    //         } finally {
    //           setLoadingUser(false);
    //         }
    //       });
      
    //       // Unsubscribe auth listener on unmount
    //       return () => unsubscriber();
    // }, []);


    const userContextProps = {
        user,
        loadingUser,
        signIn: async (account_id, validation_response) => {
            setUser(user);
        },
        siginUp: async (account_id, validation_response) => {
            setUser(user);
        },
        signOut: async () => {
            setUser(null);
        },
    }

    return (
        <UserContext.Provider value={userContextProps}>
            {children}
        </UserContext.Provider>
    );
};






