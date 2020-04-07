import React from "react";

import IconCheck from "../icons/icon-check";

import "./payment-success.scss";

const PaymentSuccess = () => {
    return (
        <div className="payment-success">
            <p className="payment-success--title">Paiement validé !</p>
            <div className="payment-success--icon">
                <IconCheck />
            </div>
            <p className="payment-success--loading">Vous serez notifié lorsque que votre LemonMaid aura validé votre demande</p>
        
            <a href="/" className="btn-cta">
              Retour à la page d'accueil
            </a>
        </div>
    )
}

export default PaymentSuccess;