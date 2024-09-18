import Image from "next/image";
import logo from "../../assets/logo.svg";
import "./styles.scss";

export function Header() {
  const currentDate = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <Image
        src={logo}
        width={150}
        height={36}
        alt="Logo do cabeçalho da pagina de tarefas"
      />
      <h1 className="title">Bem-vindo de volta, Marcus</h1>
      <span className="date">{currentDate}</span>
    </header>
  );
}
