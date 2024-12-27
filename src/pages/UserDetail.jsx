import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './UserDetail.css';

function UserDetail() {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => response.json())
            .then((data) => setUser(data));
    }, [id]);

    if (!user) return <p>Chargement...</p>;

    return (
        <div className="details-container">
            <h1>Affiche de détails</h1>
            <p><strong>Nom :</strong> {user.name}</p>
            <p><strong>Email :</strong> {user.email}</p>
            <button onClick={() => window.history.back()}>Annuler</button>
        </div>
    );
}

export default UserDetail;
