import type { ComponentProps } from "react";

export function Footer(props: ComponentProps<"footer">) {
  return (
    <footer {...props} className={`flex flex-col gap-2 ${props.className}`}>
      <h2 className="text-4xl font-bold">Manejemos juntos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
      </div>
    </footer>
  );
};
