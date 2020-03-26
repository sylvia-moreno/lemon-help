import React from "react";

const FormCookingService = () => {
    return (
        <form className="form-cooking" onSubmit={this.handleSubmit}>
            {this.state.error && (
              <p className="error">{this.state.error}</p>
            )}

            <div className="form-cooking--group">
                <fieldset>
                    <legend>Pratique alimentaire :</legend>
                </fieldset>
                <label class="radio">
                    <input type="radio" name="vegan" value={this.state.vegan} onChange={this.handleChange}/>
                    Plutôt végétarien
                </label>
                <label class="radio">
                    <input type="radio" name="notVegan" value={this.state.notVegan} onChange={this.handleChange}/>
                    Plutôt carnivore
                </label>
                <label class="radio">
                    <input type="radio" name="anyFood" value={this.state.anyFood} onChange={this.handleChange}/>
                    Je mange de tout
                </label>
            </div>
            
            <div className="form-cooking--group">

            </div>

            <p>
              <label>
                <em>Email</em>
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
              </label>
            </p>

            <p>
              <label>
                <em>Mot de passe</em>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
              </label>
            </p>

            <p>
              <label>
                <em>Adresse</em>
                <input type="address" name="address" value={this.state.address} onChange={this.handleChange} />
              </label>
            </p>

            <p>
              <label>
                <em>Ville</em>
                <input type="cityName" name="cityName" value={this.state.cityName} onChange={this.handleChange} />
              </label>
            </p>

            <p>
              <label>
                <em>Code Postale</em>
                <input type="cityCode" name="cityCode" value={this.state.cityCode} onChange={this.handleChange} />
              </label>
            </p>

            <p>
              <label>
                <em>Pays</em>
                <select name="country" value={this.state.country} onChange={this.handleChange}>
                  <option value="France">France</option>
                </select>
              </label>
            </p>

            <p>
              <label>
                <em>Sexe</em>
                <select name="sexe" value={this.state.sexe} onChange={this.handleChange}>
                  <option value="Femme">Femme</option>
                  <option value="Homme">Homme</option>
                </select>
              </label>
            </p>

        </form>
    )
};

export default FormCookingService;