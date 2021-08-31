
import { useState, useEffect } from 'react';
import { GetCryptoEvents, GetGeckoCapMarket } from "./appRedux/service"
import Sidebar from './components/sidebar';
import Searchbar from './components/search';
import MarketCap from "./components/market";
import Coins from './components/coins';
import Events from './components/events';
import { useSelector, useDispatch } from "react-redux"
import { formatDollar } from './appRedux/reducers';
import { requestGetAllCoins, requestGetEvents } from './appRedux/actions/index';
// const formatPercent = number => `${new Number(number).toFixed(2)} %`

const Home = () => {
    const dispatch = useDispatch()
    const { coinsLists, eventLists } = useSelector(({ coins }) => coins);


    useEffect(() => {
        dispatch(requestGetAllCoins())
        dispatch(requestGetEvents())
    }, [])

    return (
        <div className="home">
            <Sidebar
            />
            <div className="main__content">
                <Searchbar />
                <div className="main__container">
                    <div className="main__left">
                        <MarketCap
                            market={coinsLists}
                            formatDollar={formatDollar}
                        />
                        <Coins
                            market={coinsLists}
                            title="All Coins"
                        />
                    </div>
                    <div className="main__right">
                        <Events events={eventLists} title="Events" />
                    </div>

                </div>
            </div>

        </div>
    );
}



export default Home;
