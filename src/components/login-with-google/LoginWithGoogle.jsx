import {motion} from 'framer-motion'
import { FacebookIcon, GoogleIcon } from "../../assets/icons/Icons"
import { useState } from 'react'



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
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        paddingLeft: '35px',
        marginBottom: '15px',
        cursor: 'pointer',
    }

    return (
        <>
            <div>
                <motion.div 
                    style={contentStyle}
                    whileTap={{backgroundColor:'#ffffff15', transition: {duration: 0.1} }}
                    whileHover={{border: '1px solid rgba(255, 255, 255)', transition:{duration: 0.1}}}
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
        </>
    )
}

export default LoginWithGoogle