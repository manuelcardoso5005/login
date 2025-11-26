import { FC } from "react";
import { LucideIcon, Eye, EyeOff } from "lucide-react";

interface InputLoginProps {
    label: string;
    placeholder?: string;
    id: string;
    value: string;
    setValue: (value: string) => void;
    type?: string;
    icon: LucideIcon;
    showPassword?: boolean;
    setShowPassword?: (show: boolean) => void;
}

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

    // Define o type final do input
    const finalType = type === "password" ? (showPassword ? "text" : "password") : type;

    return (
        <div className="space-y-2">
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                {label}
            </label>

            <div className="relative">
                <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

                <input
                    id={id}
                    type={finalType}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={placeholder || ""}
                    className="w-full pl-11 pr-10 py-3 border border-gray-300 rounded-lg 
                               focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                               outline-none transition"
                />

                {/* Exibe o botão se for um input de senha */}
                {type === "password" && (
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 
                                   text-gray-400 hover:text-gray-600 transition"
                    >
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
