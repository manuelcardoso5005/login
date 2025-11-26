"use client";

import { useState } from 'react';
import { Lock, Mail, Eye, EyeOff } from 'lucide-react';
import LoginPrincipalCard from './loginComp/LoginPrincipalCard';
import LoginHeader from './loginComp/LoginHeader';
import LoginForm from './loginComp/LoginForm';
import LoginSocial from './loginComp/LoginSocial';
import LoginFooter from './loginComp/LoginFooter';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e:any) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulação de login
    setTimeout(() => {
        console.log('Login attempt:', { email, password });
        setIsLoading(false);
    }, 1500);
    };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
      <div className="w-full max-w-md">
        {/* Card Principal */}
        
        <LoginPrincipalCard>

            {/* Header */}
            <LoginHeader
                title='Bem-vindo'
                subtitle='Entre na sua conta para continuar'
            >
                <Lock className="w-8 h-8 text-white" />
            </LoginHeader>


          {/* Formulário */}
             <LoginForm
                handleSubmit={handleSubmit}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                isLoading={isLoading}
            /> 

            {/* Social Login */}
            <LoginSocial />

          <LoginFooter />
        </LoginPrincipalCard>
      </div>
    </div>
  );
}