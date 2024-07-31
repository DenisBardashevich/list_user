import plus from "./img/plus.png";
import minus from './img/minus.png'

const Users = ({ id, email, first_name, last_name, avatar, onClickInvite, isInvited }) => {
    const plusOrMinus = isInvited ? minus : plus
    
    return (
        <li>
            <div className="Users">
                <div className="user_info">
                    <img className="avatar" src={avatar} alt="user" />
                    <div className="user_details">
                        <h3 className="user_name">{first_name} {last_name}</h3>
                        <p className="user_email">{email}</p>
                    </div>
                </div>
                <img onClick={() => onClickInvite(id)} className='plus' src={plusOrMinus} alt="plus1" />
            </div>
        </li>
    );
};

export default Users;
