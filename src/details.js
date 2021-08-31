
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
import ReactApexChart from 'react-apexcharts';
import { formatDollar } from './appRedux/reducers/index';
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


    console.log(coinDetails)
    const series = [{ name: "Coin", data: chartLists?.prices?.map(item => item?.[1].toFixed(2)) }]

    const options = {
        chart: {
            foreColor: '#fff',
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        tooltip: {
            backgroundColor: '#2C64BC'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        title: {
            text: 'Coin Market Cap Chart',
            align: 'left',
            color: '#fff'
        },
        grid: {
            row: {
                // colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                //  opacity: 0.5
            },
        },
        xaxis: {
            categories: chartLists?.prices?.map(item => item?.[0].toFixed(2)),
        }
    }








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
                        <div className="chart-container">
                            <div className="header">
                                <h2>{formatDollar(coinDetails?.market_data?.current_price?.usd)}</h2>
                                <span>{coinDetails?.market_data?.price_change_24h?.toFixed(2)}</span>
                            </div>
                            {/*   <Line data={data} options={options} /> */}
                            <ReactApexChart options={options} series={series} type="line" height={350} />
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
