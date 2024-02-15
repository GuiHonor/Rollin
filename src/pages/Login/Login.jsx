import './LoginStyle.css'
import { GlobalStyle } from "../../GlobalStyle"
import { Homeicon, Myaccount } from "../../assets/icons/Icons"
import LoginMainText from "../../components/login-main-text/LoginMainText"
import { motion } from "framer-motion"
import PinkButton from '../../components/pink-button/PinkButton'
import LoginWithGoogle from '../../components/login-with-google/LoginWithGoogle'
import HeaderLogin from '../../components/header-login/HeaderLogin'
import { useForm } from 'react-hook-form'

const Login = () => {
    
    const { register, handleSubmit, reset } = useForm()

    const handleLogin = (data) => {
        console.log(data)


        reset()
    }

    const acess = {email: 'teste@gmail.com', password: 'teste123'}

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
                        onSubmit={handleSubmit(handleLogin)}
                        autoComplete='off'
                    >   

                        <LoginMainText 
                            title={'Bem Vindo!'}
                            subtitle={'Faça login para continuar.'}    
                        />

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
                                    name={'Entrar'}
                                    width= {200}
                                    height= {40}
                                    fontSize={17}
                                    borderRadius={20}
                                />
                            </div>

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
                                    >
                                        Cadastre-se
                                </motion.h5>  
                           
                            </div>

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