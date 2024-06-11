import { useGoogleLogin, useGoogleOneTapLogin } from "@react-oauth/google";
import axios from "axios";
import { motion } from "framer-motion";
import { jwtDecode } from "jwt-decode";
import { FacebookIcon, GoogleIcon } from "../../../assets/icons/Icons";
import { setLoggedUser } from "../../../services/auth.service";

const contentStyle = "xl:border border-white/70 flex text-white rounded-[30px] w-[300px] items-center p-[10px] pl-[35px] mb-[15px] cursor-pointer no-underline font-bold";
const textStyle = "2xl:ml-[20px] text-[15px]";

const LoginWithGoogle = () => {
    

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
                );

                setLoggedUser(res.data);
                window.location.pathname = "/profile";
            } catch (err) {
                console.log(err);
            }
        },
    });

    useGoogleOneTapLogin({
        onSuccess: (credentialResponse) => {
            console.log(jwtDecode(credentialResponse.credential));
        },
        onError: () => {
            console.log("Login Failed");
        },
    });

    return (
        <div>
            <motion.div
                className={contentStyle}
                whileTap={{
                    backgroundColor: "#ffffff15",
                    transition: { duration: 0.1 },
                }}
                
                whileHover={{
                    border: "1px solid rgba(255, 255, 255)",
                    transition: { duration: 0.1 },
                }}
                onClick={() => login()}
            >
                <GoogleIcon /> <h4 className={textStyle}>Entrar com Google</h4>
            </motion.div>

            <motion.div
                className={contentStyle}
                whileTap={{
                    backgroundColor: "#ffffff15",
                    transition: { duration: 0.1 },
                }}
                
                whileHover={{
                    border: "1px solid rgba(255, 255, 255)",
                    transition: { duration: 0.1 },
                }}
            >
                <FacebookIcon />{" "}
                <h4 className={textStyle}>Entrar com Facebook</h4>
            </motion.div>
        </div>
    );
};

export default LoginWithGoogle;
