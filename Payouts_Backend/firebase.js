async function verifyIdTokenGetFirebaseUid(event, firebase_admin){
    try {
        const id_token = event.id_token;
        console.log('inside verifyIdTokenGetFirebaseUid');

        return new Promise( (resolve,reject) =>{ 
            firebase_admin
            .auth()
            .verifyIdToken(id_token)
            .then((decodedToken) => {
                const firebase_uid = decodedToken.uid;
                console.log(`token is valid, firebase_uid:${firebase_uid}`);
                resolve(firebase_uid);
            })
            .catch((error) => {
                // Handle error
                console.error('firebase id token not valid');
                console.error(error);
                throw new Error('firebase id token not valid');
            });
    
        })            
    } catch (error) {
        console.log(error);
        console.error('firebase id token not valid');
        throw new Error('firebase id token not valid');
    }
}

module.exports = {
    verifyIdTokenGetFirebaseUid
}