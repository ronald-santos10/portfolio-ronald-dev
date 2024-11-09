import type React from "react";
import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="bg-neutral-950 w-full">
        {children}
    </div>
  );
};
