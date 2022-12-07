import './style.scss';

function Inscription() {
  return (
    <form className="form-inscription">
      <p>Créez un compte</p>
      <input type="email" placeholder="votre adresse email" />
      <input type="text" placeholder="mot de passe" />
      <input type="password" placeholder="comfirmer le mot de passe" />
      <button type="submit">Valider</button>
    </form>
  );
}

export default Inscription;
