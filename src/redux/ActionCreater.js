import * as ActionTypes from './ActionTypes';
import { auth, fireauth } from '../Firebase/firebase';
export const requestLogin = () => {
    return {
        type: ActionTypes.LOGIN_REQUEST
    }
}
  
export const receiveLogin = (user) => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        user
    }
}
  
export const loginError = (message) => {
    return {
        type: ActionTypes.LOGIN_FAILURE,
        message
    }
}

export const loginUser = (creds) => (dispatch) => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds))
    console.log(creds.username,creds.password);
    return auth.createUserWithEmailAndPassword(creds.username, creds.password)
    .then(dataBeforeEmail => {
        auth.onAuthStateChanged(function(user) {
          user.sendEmailVerification();
        });
    })
    .then(dataAfterEmail => {
        auth.onAuthStateChanged(function(user) {
          if (user.emailVerified) {
          
            dispatch(receiveLogin(user));
          } else {
            
            dispatch({
              type:ActionTypes.LOGIN_FAILURE,
              payload:
                "Something went wrong, we couldn't create your account. Please try again."
            });
        }
        });
    })

    // .then(() => {

    //     var user = auth.currentUser;
    //     localStorage.setItem('user', JSON.stringify(user));
       
      
    //     dispatch(receiveLogin(user));
    // })
    // .catch(error => dispatch(loginError(error.message)))
};

export const requestLogout = () => {
    return {
      type: ActionTypes.LOGOUT_REQUEST
    }
}
  
export const receiveLogout = () => {
    return {
      type: ActionTypes.LOGOUT_SUCCESS
    }
}

// Logs the user out
export const logoutUser = () => (dispatch) => {
    dispatch(requestLogout())
    auth.signOut().then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
    localStorage.removeItem('user');

    dispatch(receiveLogout())
}
export const googleLogin = () => (dispatch) => {
    const provider = new fireauth.GoogleAuthProvider();

    auth.signInWithPopup(provider)
        .then((result) => {
            var user = result.user;
            localStorage.setItem('user', JSON.stringify(user));
            // Dispatch the success action
           
            dispatch(receiveLogin(user));
        })
        .catch((error) => {
            dispatch(loginError(error.message));
        });
}
export const facebookLogin = () => (dispatch) => {
    const provider = new fireauth.FacebookAuthProvider();

    auth.signInWithPopup(provider)
        .then((result) => {
            var user = result.user;
            localStorage.setItem('user', JSON.stringify(user));
            // Dispatch the success action
           
            dispatch(receiveLogin(user));
        })
        .catch((error) => {
            dispatch(loginError(error.message));
        });
}
export const twitterLogin = () => (dispatch) => {
    const provider = new fireauth.TwitterAuthProvider();

    auth.signInWithPopup(provider)
        .then((result) => {
            var user = result.user;
            localStorage.setItem('user', JSON.stringify(user));
            // Dispatch the success action
           
            dispatch(receiveLogin(user));
        })
        .catch((error) => {
            dispatch(loginError(error.message));
        });
}