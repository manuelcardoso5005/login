import LoginInput from '@/app/(authorization)/(componentes)/Inputs/InputAuth';
import { LoginFormProps } from '@/types/Auth';
import { Lock, Mail } from 'lucide-react';

interface ControlledLoginFormProps extends LoginFormProps {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  showPassword: boolean;
  setShowPassword: (value: boolean) => void;
  isLoading?: boolean;
}

export default function LoginForm({
  handleSubmit,
  email,
  setEmail,
  password,
  setPassword,
  showPassword,
  setShowPassword,
  isLoading
}: ControlledLoginFormProps) {
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Email Input */}
      <LoginInput
        label="Email"
        placeholder="Digite o email"
        id="email"
        value={email}
        setValue={setEmail}
        type="text"
        icon={Mail}
      />

      {/* Password Input */}
      <LoginInput
        label="Senha"
        placeholder="Digite a senha"
        id="password"
        value={password}
        setValue={setPassword}
        type="password"
        icon={Lock}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />

       {/* Lembrar-me e Esqueceu senha */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="text-gray-600">Lembrar-me</span>
              </label>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                Esqueceu a senha?
              </a>
            </div>

            {/* Botão de Login */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-linear-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Entrando...' : 'Entrar'}
            </button>
    </form>
  );
}
