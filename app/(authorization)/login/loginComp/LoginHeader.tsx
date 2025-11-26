import { LoginHeaderProps } from "@/types/Auth";

export default function LoginHeader({ children, title, subtitle }: LoginHeaderProps) {
  return (
    <div className="text-center space-y-2">
      {/* Círculo com slot genérico */}
      <div className="mx-auto w-16 h-16 bg-linear-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
        {children}
      </div>

      {/* Título dinâmico */}
      <h1 className="text-3xl font-bold text-gray-800">{title}</h1>

      {/* Subtítulo dinâmico */}
      <p className="text-gray-500">{subtitle}</p>
    </div>
  );
}
