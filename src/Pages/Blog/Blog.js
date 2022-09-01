import React from "react";


const Blog = () =>{
    return(
        <div>
            <h2 className="text-center text-2xl text-danger mt-5">Blog</h2>
            <div>
                <div>
                    <h4 className="text-center">Difference between authorization and authentication?</h4>
                    <p className="container"><small >Authentication and authorization are two vital information security processes that administrators use to protect systems and information. Authentication verifies the identity of a user or service, and authorization determines their access rights.The OpenID Connect (OIDC) protocol is an authentication protocol that is generally in charge of user authentication process. The OAuth 2.0 protocol governs the overall system of user authorization process.</small></p>
                </div>
                <div>
                    <h4 className="text-center">Why are you using firebase? What other options do you have to implement authentication?</h4>
                    <p className="container"><small >The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints. </small></p>
                </div>
                <div>
                    <h4 className="text-center">What other services does firebase provide other than authentication?</h4>
                    <p className="container"><small >There are many services which Firebase provides, Most useful of them are: Cloud Firestore, Cloud Functions, Authentication, Hosting, Cloud Storage, Google Analytics, Predictions, Cloud Messaging.</small></p>
                </div>
            </div>
        </div>
    );
};


export default Blog;