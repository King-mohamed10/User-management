
import { useParams, useNavigate } from "react-router-dom";
import UserForm from "../component/UserForm";
import './EditUser.css'



function EditUser({user,setUser}) {
    const { id } = useParams();
    const navigate = useNavigate();
    const handleUpdateUser = (updatedUser) => {
        setUser()  
        navigate("/");
    };
    if (!user) return <p>Chargement...</p>;
    return (
        <div className="modifier">
            <UserForm initialData={user} onSubmit={handleUpdateUser} />
        </div>
    );
}


export default EditUser