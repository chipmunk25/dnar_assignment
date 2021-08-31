import { Icon } from '@iconify/react';
import smartTruncate from 'smart-truncate';
import bxLink from '@iconify/icons-bx/bx-link';
const Events = ({ title, events, marketCoin }) => {
    return (
        <div className="events">
            <h4 className="header__title">{title}</h4>
            {
                events?.map(item => (
                    <div className="list__item">
                        <div className="title">{item?.title} </div>
                        <div className="description">{smartTruncate(item?.description, 120)}
                            <div className="icon">
                                <span>
                                    <Icon icon={bxLink} color="#2870AD" />
                                </span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div >

    )
}

export default Events