import { FC, ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <section className="grid">
      <div className="justify-self-center w-3/5 py-10 rounded-xl bg-pokeGreen-900/80">
        {children}
      </div>
    </section>
  );
};

export default AuthLayout;
