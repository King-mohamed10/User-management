import UserTable from "../component/UserTable";
import './Home.css'


function Home({users}) {
    return (
        <div>
            <h1>Liste des utilisateurs</h1>
            <UserTable users={users} />
        </div>
    );
}

export default Home