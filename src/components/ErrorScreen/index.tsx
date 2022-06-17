import exclamationIcon from "../../assets/icon-exclamation-mark.png";

export function ErrorScreen() {
  return (
    <div>
      <img src={exclamationIcon} alt="Erro" style={{ maxWidth: "100px" }} />
      <h1>Página não encontrada.</h1>
      <p>
        O endereço que você tentou acessar não existe, verifique se digitou algo
        errado, ou utilize o menu para ser redirecionado.
      </p>
    </div>
  );
}
