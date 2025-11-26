import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

export interface InputAuthProps {
  label: string;
  placeholder?: string;
  id: string;
  value: string;
  setValue: (value: string) => void;
  type?: string; // "text" | "password" também funciona
  icon: LucideIcon;
  showPassword?: boolean;
  setShowPassword?: (show: boolean) => void;
}

export interface LoginHeaderProps {
  children?: ReactNode; // conteúdo do círculo: ícone, imagem, etc
  title?: string;       // título dinâmico
  subtitle?: string;    // mensagem dinâmica
}
/* 
export interface LoginFormProps {
    handleSubmit: (e: any) => void;
} */