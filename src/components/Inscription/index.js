import './style.scss';

function Inscription() {
  return (
    <form className="form-inscription">
      <p className="form-inscription-p">Créez un compte</p>
      <div>
        <input name="firstname" type="text" placeholder="Prénom" required />
        <input name="lastname" type="text" placeholder="Nom" required />
      </div>
      <input name="pseudo" type="text" placeholder="Pseudo" required />
      <input name="email" type="email" placeholder="Votre adresse email" required />
      <input name="password" type="text" placeholder="Mot de passe" required />
      <input name="zipcode" type="text" placeholder="Code postal" required />
      <div>
        <input name="phone-number" type="text" placeholder="Numero de telephone*" required />
      </div>
      <div>
        <label htmlFor="picture">photo de profil*
          <input
            name="picture"
            type="file"
            accept="image/png, image/jpeg"
          />
        </label>
      </div>
      <button type="submit">Valider</button>
      <p className="form-inscription-p">*non obligatoire</p>

    </form>
  );
}

export default Inscription;
