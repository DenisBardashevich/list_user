import Skeleton from "./skeleton";
import "./container.css";
import Users from "./Users";

const Container = ({ onClickSendInvites, isLoading, item, searchValue, onChangeSearchValue, invites, onClickInvite }) => {
    console.log(searchValue);
    return (
        <div className="container">
            <div className="content">
                <input
                    value={searchValue}
                    onChange={onChangeSearchValue}
                    className="input_content"
                    type="text"
                    placeholder="Найти пользователя"
                />
                {isLoading ? (
                    <div className="skeleton_list">
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </div>
                ) : (
                    <ul className="user_list">
                        {item
                            .filter((obj) => {
                                const fullName = (obj.first_name + ' ' + obj.last_name).toLowerCase();

                                return (
                                    fullName.includes(searchValue.toLowerCase()) ||
                                    obj.email.toLowerCase().includes(searchValue.toLowerCase())
                                );
                            })
                            .map((obj) => (
                                <Users onClickInvite={onClickInvite} isInvited = {invites.includes(obj.id)} key={obj.id} {...obj} />
                            ))}
                    </ul>
                )}

                <div className="btn">
                    <button onClick={onClickSendInvites} className="btn_content">
                        Отправить приглашение
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Container;
