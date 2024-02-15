import './LoginStyle.css'
import { GlobalStyle } from "../../GlobalStyle"
import { Homeicon, Myaccount } from "../../assets/icons/Icons"
import LoginMainText from "../../components/login-main-text/LoginMainText"
import { motion } from "framer-motion"
import PinkButton from '../../components/pink-button/PinkButton'
import LoginWithGoogle from '../../components/login-with-google/LoginWithGoogle'
import HeaderLogin from '../../components/header-login/HeaderLogin'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import NewAccount from '../../components/new-account/NewAccount'
const _ = require ('lodash')

const Login = () => {
    
    const { register, handleSubmit, reset } = useForm()
    const [createAccount, setCreateAccount] = useState(false)

    const [accounts, setAccounts] = useState([
        {email: 'www.gui.pg@gmail.com', password: 'ghsh1997', name: 'Guilherme', lastName: 'Honorio'},
        {email: 'teste@gmail.com', password: 'teste123', name: 'Adolfo', lastName: 'Guimarães'},
    ]) 


   const enterProfile = (data) => {
        const dataFilter = accounts.filter((p) => p.email === data.email)
    
        const dataFiltered = {email: dataFilter[0].email, password: dataFilter[0].password}

        _.isEqual(data, dataFiltered)?
            window.location.pathname = '/profile' :
            alert('Email ou senha incorretos.')

   }

    const handleLogin = (data) => {
        enterProfile(data)
        reset()
    }

    const newAccount = (data) => {
        setAccounts([data, ...accounts])
        window.location.pathname = '/profile'
        reset()
    }



    return (
        <>
            <GlobalStyle/>
                
                <div className="MainLogin" style={{color: 'white'}}>
                    <HeaderLogin
                        icon1={
                            <Homeicon 
                                height={40} 
                                width={40}
                            />
                        } 
                        icon2={
                            <Myaccount 
                                height={40} 
                                width={40}
                            />
                        }

                        title={'Bem Vindx!'}
                        subtitle={'Faça login para continuar.'}
                    />
                    </div>
                
                <div className="MainContent" style={{padding: '200px 400px', alignItems: 'center' }}>

                    <form 
                        style={{
                            display: 'flex', 
                            flexDirection: 'column', 
                            marginTop: '-50px'
                            }}
                        onSubmit={createAccount? handleSubmit(newAccount) : handleSubmit(handleLogin)}
                        autoComplete='off'
                    >   
                        {createAccount?
                            <LoginMainText 
                                title={'Criar uma nova conta'}
                                subtitle={'Já está cadastrado?'}
                                call={'Entre!'}
                                onClick={() => setCreateAccount(!createAccount)}    
                            />
                        :
                            <LoginMainText 
                                title={'Bem Vindo!'}
                                subtitle={'Faça login para continuar.'} 
                            />

                        }

                        {createAccount &&
                            <NewAccount register={register} className={'NewAccount'}/>
                        }
                        
                        <input
                            className="InputText" 
                            type="email" 
                            placeholder="Email"
                            {...register('email')}
                            required 
                        />  

                        <input 
                            className="InputText" 
                            type="password" 
                            placeholder="Senha"
                            style={{
                                marginTop: '20px'
                            }}
                            {...register('password')}
                            minLength={8}
                            required
                        />
                        
                           
                            <div style={{alignSelf: 'center', marginTop: '20px'}}>

                                <PinkButton
                                    name={createAccount? 'Criar Conta' : 'Entrar'}
                                    width= {200}
                                    height= {40}
                                    fontSize={17}
                                    borderRadius={20}
                                    
                                />

                            </div>

                            {!createAccount &&

                                <div className='RegisterText'>
                                    <h5>Não possui uma conta?</h5>
                                    <motion.h5 style={{
                                            color: '#FF31F7',
                                            cursor: 'pointer',
                                            marginLeft: '5px'
                                            }}
                                            whileHover={{
                                                color: '#ff31f8ce', 
                                                transition:{duration: 0.1}
                                            }}
                                            onClick={() => setCreateAccount(!createAccount)}
                                        >
                                            Cadastre-se
                                    </motion.h5>  
                                        
                                </div>

                            }
                    </form>
                    
                    <div className='Divisor'>  
                        <div className='Circle'/>
                        <div className='Stick'/>
                        <h5 style={{marginTop: '10px', marginBottom: '10px'}}>OU</h5>
                        <div className='Stick'/>
                        <div className='Circle'/>
                    </div>

                    <div>
                        <LoginWithGoogle/>
                    </div>

                </div>
                 
        </>
    )
}

export default Login