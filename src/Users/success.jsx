const Success = ({count}) => {
    return (
        <div className="container">
            <div className="content">
                <h1>Успешно!</h1>
                <p className="p_success">Всем {count} пользователям отправлено приглашение</p>
                <div className="btn">
                    <button onClick={() => window.location.reload()} className="btn_content">
                        Назад
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Success;
