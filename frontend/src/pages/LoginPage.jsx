import React, { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore'
import { MessageCircleIcon, LockIcon, MailIcon, UserIcon, LoaderIcon, User } from 'lucide-react'
import BorderAnimatedContainer from '../components/BorderAnimatedContainer'
import { Link } from 'react-router'

function LoginPage() {
    const [formData, setFormData] = useState({ email: '', password: '' })
    const { login, isLoggingIn } = useAuthStore()
    const handleSubmit = (e) => {
        e.preventDefault()
        login(formData)
    }
    return (
        <div className='w-full flex items-center justify-center p-4 bg-slate-900'>
            <div className='relative w-full max-w-6xl md:h-[800px] h-[650px]'>
                <BorderAnimatedContainer>
                    <div className='w-full flex flex-col md:flex-row'>
                        <div className='md:w-1/2 p-8 flex items-center jsutify-center md:border-r
                        border-slate-600/30'>
                            <div className='w-full max-w-md'>
                                <div className='text-center mb-3'>
                                    <MessageCircleIcon className='w-12 h-12 mx-auto text-slate-400 mb-4'></MessageCircleIcon>
                                    <h2 className='text-2xl font-bold text-slate-200 mb-2'>welcome back</h2>
                                    <p className='text-slate-400'>login to access your account</p>
                                </div>
                                <form onSubmit={handleSubmit} className='space-y-6'>
                                    <div>
                                        <label className='auth-input-label'>email</label>
                                        <div>
                                            <div className='relative'>
                                                <MailIcon className='auth-input-icon'></MailIcon>
                                                <input type='email' value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className='input' placeholder='test@test.com'
                                                >

                                                </input>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label className='auth-input-label'>password</label>
                                        <div>
                                            <div className='relative'>
                                                <LockIcon className='auth-input-icon'></LockIcon>
                                                <input type='password' value={formData.password}
                                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                                    className='input' placeholder='enter password'
                                                >

                                                </input>
                                            </div>
                                        </div>
                                    </div>
                                    <button className='auth-btn' type='submit' >
                                        {isLoggingIn ? (<><LoaderIcon className='w-full h-5 animate-spin text-center'></LoaderIcon></>) : (<>login</>)}
                                    </button>
                                </form>
                                <div className='mt-6 text-center'>
                                    <Link to='/login' className='auth-link'>dont have an account</Link>
                                </div>
                            </div>
                        </div>
                        <div className='hidden md:w-1/2 md:flex items-center justify-center p-6 bg-gradient-to-bl from-slate-800/20 to-transparent'>
                            <div>
                                <img src='/login.png' alt='' className='w-full h-auto object-contain'></img>
                                <div className='mt-6 text-center'>
                                    <h3 className='text-xl font-medium text-cyan-400'>connect anytime</h3>
                                    <div className='mt-4 flex justify-center gap-4'>
                                        <span className='auth-badge'>free</span>
                                        <span className='auth-badge'>easy setup</span>
                                        <span className='auth-badge'>private</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </BorderAnimatedContainer>
            </div>
        </div>
    )
}

export default LoginPage