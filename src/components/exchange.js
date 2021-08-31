import { Button, Select } from 'antd';
import { useState } from 'react';


import { Icon } from '@iconify/react';

import arrowRight from '@iconify/icons-akar-icons/arrow-right';
const { Option } = Select;


const findExchange = (base, target, tickers) => tickers?.find(item => item.base === base && item.target === target)
const Exchange = ({ title, marketCoin }) => {
    //  console.log(marketCoin)
    const handleTarget = (value) => {
        setState({
            ...state,
            target: value,
            exchange: findExchange(state.base, value, marketCoin.tickers)
        })
    }
    const handleBase = (value) => {
        setState({
            ...state,
            base: value,
            exchange: findExchange(value, state.target, marketCoin.tickers)
        })
    }

    const [state, setState] = useState({
        target: "",
        base: "",
        exchange: {}
    })

    return (
        <div className="exchange">
            <div className="header">
                <span>
                    {title}
                </span>
            </div>
            <div className="details">
                <div className="left">
                    <div className="sell">
                        <span>Sell</span>
                        <h3>{state?.exchange?.converted_last?.usd}</h3>
                    </div>
                    <div className="buy">
                        <span>Buy</span>
                        <h3>{state?.exchange?.converted_last?.btc}</h3>
                    </div>
                </div>
                <div className="right">
                    <div className="currency">
                        <Select style={{ width: 100 }} onChange={handleTarget}>
                            {marketCoin?.tickers?.map((item, i) => (
                                <Option key={i} value={item?.target}>{item?.target} </Option>
                            ))}
                        </Select>
                    </div>
                    <div className="crypto">
                        <Select style={{ width: 100 }} onChange={handleBase}>
                            {marketCoin?.tickers?.map((item, i) => (
                                <Option key={i} value={item?.base}>{item?.base} </Option>
                            ))}
                        </Select>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <span className="exchangedata"> {state?.exchange?.converted_last?.btc} {state?.base}= {state?.exchange?.converted_last?.usd} {state?.target}</span>
                </div>
                <div>
                    <Button type="primary" shape="round" className="btnExchange">Exchange <Icon icon={arrowRight} /></Button>
                </div>
            </div>
        </div>
    )
}
export default Exchange