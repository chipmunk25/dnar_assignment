
import { useEffect } from 'react';

import Sidebar from './components/sidebar';
import Searchbar from './components/search';

import CoinDet from './components/coinsDetail';
import { DatePicker } from 'antd';
import { Line } from 'react-chartjs-2';
import Exchange from './components/exchange';
import Alexa from './components/alexa';
import { requestGetAllCoins, requestGetMarketChart, requestGetSingleCoin } from './appRedux/actions';

import { useSelector, useDispatch } from "react-redux"

const { RangePicker } = DatePicker;



const CoinDetails = () => {
    const dispatch = useDispatch()
    const { chartLists, coinDetails } = useSelector(({ coins }) => coins);

    // console.log(chartLists?.prices?.map(item => item?.[0].toFixed(2)))
    useEffect(() => {
        dispatch(requestGetAllCoins)
        dispatch(requestGetSingleCoin('bitcoin'))
        dispatch(requestGetMarketChart('bitcoin'))
    }, [])

    const data = {
        //  label: chartLists?.prices?.map(item => item?.[0].toFixed(2)),
        datasets: [
            {
                label: `${coinDetails?.name} price`,
                backgroundColor: "rgba(174, 305, 194, 0.5)",
                borderColor: 'rgba(255, 99, 132, 0.2)',
                pointRadius: 0,
                data: chartLists?.prices?.map(item => item?.[1].toFixed(2)),
                fill: true,

            },
        ],
    };

    const options = {
        lineHeightAnnotation: {
            always: true,
            hover: false,
            lineWeight: 1.5,
        },

        animation: {
            duration: 2000,
        },
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            xAxes: [
                {
                    type: "month",
                    distribution: "linear",
                },
            ],
        },
    };
    return (
        <div className="home">
            <Sidebar
            />
            <div className="main__content">
                <div className="search__date_container" >
                    <Searchbar />
                    <div className="datepicker" >
                        <RangePicker picker="month" />
                    </div>
                </div>

                <div className="main__container">
                    <div className="main__left">
                        <div>
                            <Line data={data} options={options} />
                        </div>
                        <div className="exchange-container">
                            <Exchange title="Exchange" marketCoin={coinDetails} />
                            <Alexa
                                title="Alexa Rank"
                                alexa_value={coinDetails?.public_interest_stats?.alexa_rank}
                            />
                        </div>

                    </div>
                    <div className="main__right">
                        <CoinDet title="Info Card" marketCoin={coinDetails} />
                    </div>

                </div>
            </div>

        </div>
    );
}



export default CoinDetails;
