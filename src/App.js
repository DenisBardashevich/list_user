import Container from "./Users/container";
import Success from "./Users/success";
import React from "react";

// Список пользователей https://reqres.in/api/users

function App() {
    const [users, setUsers] = React.useState([]);
    const [isLoading, setLoading] = React.useState(true);
    const [searchValue, setSearchValue] = React.useState("");
    const [invites, setInvites] = React.useState([]);
    const [success, setSuccess] = React.useState(false);

    React.useEffect(() => {
        fetch("https://reqres.in/api/users")
            .then((res) => res.json())
            .then((json) => {
                setUsers(json.data);
            })
            .catch((err) => {
                console.warn(err);
                alert("Ошибка при получении пользователей");
            })
            .finally(() => setLoading(false));
    }, []);

    const onChangeSearchValue = (event) => {
        setSearchValue(event.target.value);
    };

    const onClickInvite = (id) => {
        if (invites.includes(id)) {
            setInvites((prev) => prev.filter((_id) => _id !== id));
        } else {
            setInvites((prev) => [...prev, id]);
        }
    };

    const onClickSendInvites = () => {
        setSuccess(true);
    };

    return (
        <div className="App">
            {success ? (
                <Success count={invites.length} />
            ) : (
                <Container
                    onClickSendInvites={onClickSendInvites}
                    invites={invites}
                    onClickInvite={onClickInvite}
                    onChangeSearchValue={onChangeSearchValue}
                    searchValue={searchValue}
                    item={users}
                    isLoading={isLoading}
                />
            )}
        </div>
    );
}

export default App;
