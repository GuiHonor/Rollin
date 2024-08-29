import axios from "axios";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { GlobalStyle } from "../../../GlobalStyle.js";
import { Homeicon, Myaccount } from "../../../assets/icons/Icons.jsx";
import HeaderLogin from "../../../components/desktop/header-login/HeaderLogin";
import LoginMainText from "../../../components/desktop/login-main-text/LoginMainText.jsx";
import LoginWithGoogle from "../../../components/desktop/login-with-google/LoginWithGoogle.jsx";
import NewAccount from "../../../components/desktop/new-account/NewAccount";
import PinkButton from "../../../components/desktop/pink-button/PinkButton.jsx";
import { setLoggedUser } from "../../../services/auth.service";
const _ = require("lodash");

const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const [createAccount, setCreateAccount] = useState(false);

    const [accounts, setAccounts] = useState([
        {
            email: "teste2@gmail.com",
            password: "teste",
            name: "Guilherme",
            lastName: "Honorio",
        },
        {
            email: "teste@gmail.com",
            password: "teste123",
            name: "Adolfo",
            lastName: "Guimarães",
        },
    ]);

    const enterProfile = (data) => {
        const dataFilter = accounts.filter((p) => p.email === data.email);

        const dataFiltered = {
            email: dataFilter[0].email,
            password: dataFilter[0].password,
        };

        _.isEqual(data, dataFiltered)
            ? (window.location.pathname = "/profile")
            : alert("Email ou senha incorretos.");
    };

    const handleLogin = (data) => {
        setLoggedUser(data);
        enterProfile(data);
        reset();
    };

    const newAccount = (data) => {
        setLoggedUser(data);
        axios.post("http://15.229.10.31:5000/contato", data);

        reset();
    };

    return (
        <div>
            <GlobalStyle></GlobalStyle>

            <div>
                <HeaderLogin
                    icon1={<Homeicon height={40} width={40} />}
                    icon2={
                        <Myaccount
                            height={40}
                            width={40}
                            onClick={() =>
                                setCreateAccount(
                                    createAccount === true ? false : false
                                )
                            }
                        />
                    }
                />
            </div>

            <div
                className="
                    mt-14 
                    justify-center 
                    flex 
                    items-center
                    scale-[65%]
                    md:mt-[200px]
                    md:scale-100 
                    lg:justify-between 
                    lg:mt-0
                    2xl:py-48 
                    2xl:px-96 
                    xl:py-40 
                    xl:px-44
                    xl:scale-[90%]
                "
            >
                <form
                    className="flex flex-col lg:-mt-12"
                    onSubmit={
                        createAccount
                            ? handleSubmit(newAccount)
                            : handleSubmit(handleLogin)
                    }
                    autoComplete="off"
                >
                    {createAccount ? (
                        <LoginMainText
                            title={"Criar uma nova conta"}
                            subtitle={"Já está cadastrado?"}
                            call={"Entre!"}
                            onClick={() => setCreateAccount(!createAccount)}
                        />
                    ) : (
                        <LoginMainText
                            title={"Bem Vindo!"}
                            subtitle={"Faça login para continuar."}
                        />
                    )}

                    {createAccount && <NewAccount register={register} />}

                    <input
                        className="
                        
                            placeholder-white 
                            placeholder: text-bold 
                            no-underline 
                            border 
                            border-white/70 
                            w-[450px] 
                            p-[10px] 
                            rounded-[10px]
                            bg-transparent 
                            text-white 
                            font-bold
                        "
                        type="email"
                        placeholder="Email"
                        {...register("email")}
                        required
                    />

                    <input
                        className="
                        
                            mt-[20px] 
                            placeholder-white 
                            placeholder: text-bold 
                            no-underline 
                            border 
                            border-white/70 
                            w-[450px] 
                            p-[10px] 
                            rounded-[10px] 
                            bg-transparent 
                            text-white 
                            font-bold
                        "
                        type="password"
                        placeholder="Senha"
                        {...register("password")}
                        minLength={8}
                        required
                    />

                    <div className="self-center mt-20 md:mt-[20px]">
                        <PinkButton
                            name={createAccount ? "Criar Conta" : "Entrar"}
                            width={200}
                            height={40}
                            fontSize={17}
                            borderRadius={20}
                        />
                    </div>

                    {!createAccount && (
                        <div className="mt-[200px] flex mt-[10px] text-white self-center font-bold text-sm md:mt-2">
                            <h5>Não possui uma conta?</h5>
                            <motion.h5
                                className=" text-[#FF31F7] cursor-pointer ml-[5px]"
                                whileHover={{
                                    color: "#ff31f8ce",
                                    transition: { duration: 0.1 },
                                }}
                                onClick={() => setCreateAccount(!createAccount)}
                            >
                                Cadastre-se
                            </motion.h5>
                        </div>
                    )}
                </form>

                <div
                    className="
                    hidden
                    xl:block xl:flex flex-col items-center justify-center text-white
                "
                >
                    <div className="w-[10px] h-[10px] rounded-full bg-white" />
                    <div className="w-[2px] h-[150px] bg-white justify-self-center" />
                    <h5 className="mt-[10px] mb-[10px] font-bold">OU</h5>
                    <div className="w-[2px] h-[150px] bg-white justify-self-center" />
                    <div className="w-[10px] h-[10px] rounded-full bg-white" />
                </div>

                <div className="hidden xl:block">
                    <LoginWithGoogle />
                </div>
            </div>
        </div>
    );
};

export default Login;
