import './search-panel.css';

function SearchPannel() {
    return (
        <input
            className="form-control search-input"
            type="text"
            placeholder="Поиск по записям"  
        />
    );
}

export default SearchPannel;