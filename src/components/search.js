import { Icon } from '@iconify/react';
import bxSearch from '@iconify/icons-bx/bx-search';

const Searchbar = () => {
    return (
        <div className="search__container">
            <Icon icon={bxSearch} className="search__icon" />
            <input type="text" className="searchbox" placeholder="Search" />
        </div>
    )
}

export default Searchbar