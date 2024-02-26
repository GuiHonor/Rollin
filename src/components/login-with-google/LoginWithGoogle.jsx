import {motion} from 'framer-motion'
import { FacebookIcon, GoogleIcon } from "../../assets/icons/Icons"
import { useGoogleOneTapLogin, useGoogleLogin} from '@react-oauth/google'
import axios from 'axios'
import {jwtDecode} from 'jwt-decode'
import { setLoggedUser } from '../../services/auth.service'

const textStyle = {
    marginLeft: '20px',
    fontSize: '15px',
}

const LoginWithGoogle = () => {

    const contentStyle = {
        display: 'flex',
        color: 'white',
        border: '1px solid rgba(255, 255, 255, 0.700)',
        borderRadius: '30px',
        width: '300px',
        alignItems: 'center',
        padding: '10px',
        paddingLeft: '35px',
        marginBottom: '15px',
        cursor: 'pointer',
        textDecoration: 'none'
    }

    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            try {
                const res = await axios.get(
                    "https://www.googleapis.com/oauth2/v3/userinfo",
                    {
                        headers: {
                            Authorization: `Bearer ${tokenResponse.access_token}`,
                        },
                    }
                )
                
                setLoggedUser(res.data)
                window.location.pathname = '/profile'

            }catch (err) {
                console.log(err)
            }  
        }})

        
        useGoogleOneTapLogin({
            onSuccess: credentialResponse => {
                console.log(jwtDecode(credentialResponse.credential));
            },
            onError: () => {
                console.log('Login Failed');
            },
        });


    return (
      
            <div>
      
                    <motion.div 
                        style={contentStyle}
                        whileTap={{backgroundColor:'#ffffff15', transition: {duration: 0.1} }}
                        whileHover={{border: '1px solid rgba(255, 255, 255)', transition:{duration: 0.1}}}
                        onClick={() => login()}
                    >
                        <GoogleIcon/> <h4 style={textStyle}>Entrar com Google</h4>

                    </motion.div>

                    <motion.div 
                    style={contentStyle}
                    whileTap={{backgroundColor:'#ffffff15', transition: {duration: 0.1} }}
                    whileHover={{border: '1px solid rgba(255, 255, 255)', transition:{duration: 0.1}}}
                    >
                        <FacebookIcon/> <h4 style={textStyle}>Entrar com Facebook</h4>
                    </motion.div>

            </div>
       
    )
}

export default LoginWithGoogle