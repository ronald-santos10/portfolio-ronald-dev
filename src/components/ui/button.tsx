type Props = {
  label: string;
  onClick?: () => void;
  color: "primary" | "secundary";
};

export const Button = ({ label, onClick, color }: Props) => {
  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
<div
      onClick={onClick}
      className={`flex items-center justify-center cursor-pointer text-center font-bold rounded-md md:rounded-lg text-neutral-50 py-3 px-5 md:py-4 md:px-9
        ${color === "primary" && "bg-primary"}
        ${color === "secundary" && "bg-neutral-900"}`}
    >
      {label}
    </div>
  );
};
