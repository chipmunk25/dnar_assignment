

const Coins = ({ market, title }) => {

    return (
        <div className="market__leaders">
            <h1 className="header__title">{title}</h1>
            <div className="coins">
                {market?.map(item => (
                    <div className="list__item" key={item.id}>
                        <div className="title">{item?.name} ({item?.symbol?.toUpperCase()}) </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Coins