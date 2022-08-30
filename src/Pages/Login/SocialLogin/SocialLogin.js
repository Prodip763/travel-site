import React from "react";
import googlelogo from '../../../images/icons/google.png';
import facebooklogo from '../../../images/icons/fb.png';
import githublogo from '../../../images/icons/Git.png';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error || error1 || error2) {
        errorElement = <p className="text-danger">Error: {error?.message} {error1?.message} {error2?.message}</p>
            

    }
    if(loading || loading1 || loading2){
        return <Loading></Loading>
    }

    if (user || user1 || user2) {
        navigate('/home');
    }
    return (
        <div>
            <div className="d-flex align-items-center">
                <div style={{ height: '1px' }} className='bg-danger w-50'></div>
                <p className="mt-2 px-2">Or</p>
                <div style={{ height: '1px' }} className='bg-danger w-50'></div>

            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className="btn btn-info w-50 d-block mx-auto my-2"><img style={{ width: '30px' }} src={googlelogo}></img><span className="px-2">Google Signin</span></button>
                <button onClick={() => signInWithFacebook()} className="btn btn-info w-50 d-block mx-auto my-2"><img style={{ width: '30px' }} src={facebooklogo}></img><span className="px-2">Facebook</span></button>
                <button onClick={() => signInWithGithub()} className="btn btn-info w-50 d-block mx-auto"><img style={{ width: '30px' }} src={githublogo}></img><span className="px-2">Github</span></button>
            </div>
        </div>


    );
};

export default SocialLogin;