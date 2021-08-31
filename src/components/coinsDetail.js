

import smartTruncate from 'smart-truncate';

import www from "../imgs/www.svg"
import github from "../imgs/github.svg"
import reddit from "../imgs/reddit1.svg"
const CoinDet = ({ title, marketCoin }) => {

    return (
        <div className="events">
            {marketCoin && (
                <div>
                    <div className="img-container">
                        <img className="card-img-top" src={marketCoin?.image?.small} alt="Card image cap" />
                    </div>
                    <h4 className="header__title">{title}</h4>
                    <div className="list__item">
                        <div className="title">Description: </div>
                        <div className="description">{smartTruncate(marketCoin?.description?.en, 120)}
                        </div>
                    </div>
                    <div>
                        <div className="websites">
                            <a className="website" href={marketCoin?.links?.homepage?.[0]}>
                                Website
                                <img src={www} alt="" />
                            </a>
                            <a className="reddit" href={marketCoin?.links?.subreddit_url}> <img src={reddit} alt="" /></a>
                            <a className="github" href={marketCoin?.links?.repos_url?.github?.[0]}><img src={github} alt="" /></a>
                        </div>
                    </div>
                    <div className="facts">
                        <div className="header">
                            <div className="title">Facts</div>
                        </div>
                        <div className="details">
                            <div className="left">Hash Algorithm</div>
                            <div className="right">{marketCoin?.hashing_algorithm}</div>
                        </div>
                        <div className="details">
                            <div className="left">Country Origin</div>
                            <div className="right">{marketCoin?.country_origin ? marketCoin?.country_origin : "Unknown"}</div>
                        </div>
                        <div className="details">
                            <div className="left">Category</div>
                            <div className="right">{marketCoin?.categories?.[0]}</div>
                        </div>
                    </div>

                    <div className="supply">
                        <div className="details">
                            <div className="left">Total Supply</div>
                            <div className="right">{marketCoin?.market_data?.total_supply}</div>
                        </div>
                        <div className="details">
                            <div className="left">Max Supply</div>
                            <div className="right">{marketCoin?.market_data?.max_supply}</div>
                        </div>
                        <div className="details">
                            <div className="left">Circulating</div>
                            <div className="right">{marketCoin?.market_data?.circulating_supply}</div>
                        </div>

                    </div>

                </div>
            )}

        </div>
    )
}

export default CoinDet