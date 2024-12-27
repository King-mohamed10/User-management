import React, { useState } from "react";

function UserForm({ initialData = {}, onSubmit }) {
    const [user, setUser] = useState({ name: "", email: "", ...initialData });
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(user);
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="titre">Modifier Ici</div>
            <div>
                <label>Votre nom</label>
                <input
                    type="text"
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
            </div>
            <div>
                <label>Votre email</label>
                <input
                    type="email"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
            </div>
            <button type="submit">Enregistrer</button>
            <button>Annuler</button>
        </form>    
    );
}


export default UserForm