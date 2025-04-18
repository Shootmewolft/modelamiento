import Image from "next/image";

export function Header(){
  return (
    <header>
      <nav>
        <ul>
        </ul>
      </nav>
      <Image src="/logo.svg" width={96} height={30} alt="Logotipo de Chevrolet" />
    </header>
  );
};
