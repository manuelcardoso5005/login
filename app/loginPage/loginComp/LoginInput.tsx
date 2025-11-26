import { FC } from "react";
import { LucideIcon } from "lucide-react";
import { InputLoginProps } from "../../../types/login";
import { Eye, EyeOff } from "lucide-react";

const InputLogin: FC<InputLoginProps> = ({
  label,
  placeholder,
  id,
  value,
  setValue,
  type = "text",
  icon: Icon,
  showPassword = false,
  setShowPassword = () => {},
}) => {
  // Define qual será o tipo final do input: "password" ou "text" quando mostrar senha
  const finalType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <div className="space-y-2">
      {/* Label do input */}
      <label htmlFor={id} className="block text-sm font-semibold text-gray-700">
        {label}
      </label>

      <div className="relative group">
        {/* Ícone à esquerda do input */}
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 
                         text-gray-400 group-focus-within:text-blue-500 transition-colors" />

        {/* Campo de entrada */}
        <input
          id={id}
          type={finalType} // controla visibilidade da senha se for password
          value={value}
          onChange={(e) => setValue(e.target.value)} // atualiza o state do input
          placeholder={placeholder || ""}
          required
          className="w-full pl-11 pr-12 py-3.5 border-2 border-gray-200 rounded-xl
                     text-gray-900 placeholder:text-gray-400
                     focus:ring-4 focus:ring-blue-100 focus:border-blue-500
                     outline-none transition-all duration-200
                     hover:border-gray-300
                     bg-gray-50 focus:bg-white"
        />

        {/* Botão para mostrar/ocultar senha */}
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 
                       text-gray-400 hover:text-blue-500 transition-colors duration-200
                       p-1 rounded-lg hover:bg-blue-50 cursor-pointer"
          >
            {/* Ícone muda conforme o estado */}
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputLogin;
