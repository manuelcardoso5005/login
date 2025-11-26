import { ReactNode } from "react";
import LoginHeader from "./LoginHeader";

export default function LoginPrincipalCard({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
        {children}  
    </div>
  );
}
