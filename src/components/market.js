
import ups from "../imgs/up.svg"
import downs from "../imgs/down.svg"

const MarketCap = ({ market, formatDollar }) => {

    return (
        <div className="market__leaders">
            <h1 className="header__title">Market leaders</h1>
            <div className="content__scroll">
                {market?.slice(0, 10).map(item => (
                    <div className="list__item" key={item.id}>
                        <div className="title">{item?.name} ({item?.symbol?.toUpperCase()}) </div>
                        <div className="graph__content">
                            {item?.price_change_24h > 0 ?
                                <img src={ups} alt="ups" />
                                :
                                <img src={downs} alt="downs" />
                            }
                        </div>
                        <div className="increment__content">
                            {item?.price_change_24h > 0
                                ? `+${item?.price_change_24h?.toFixed(2)}`
                                : `${item?.price_change_24h?.toFixed(2)}`}
                        </div>
                        <h2 className="price">{formatDollar(item?.current_price, 20)}</h2>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default MarketCap