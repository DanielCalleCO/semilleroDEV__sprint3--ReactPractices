import { UserContext } from "./UserContext";

const UserProvider = ({ children }) => {
    const user = {
        name: "martin",
        rol: "admin",
    };

    return (
        <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
    );
};

export default UserProvider;
