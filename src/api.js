const url = 'http://127.0.0.1:5000/api/';

const commonQueryParams = {
  api_key: "ccc82e529aa4b43db868136af57c3276436a827b",
  format: "json",
};

const itemsDataParams = {
    method: "characters/",
    queryParams: {
        limit: 6,
        field_list: ["id", "image", "publisher", "name", "count_of_issue_appearances"].join(',')
    }
}

const cardDataParams = {
    method: "characters/",
    queryParams: {
        field_list: ["id", "image", "name", "real_name", "gender", "publisher", "date_last_updated", "deck"].join(',')
    }
}

function requestUrl (customParams) {
    let searchParams = new URLSearchParams();
    for (let param in commonQueryParams) {
        searchParams.append(param,commonQueryParams[param]);        
    }
    
    for (let param in customParams.queryParams) {
        searchParams.append(param,customParams.queryParams[param]);        
    }
    
    return `${url}${customParams.method}?${searchParams.toString()}`;
}

export function getItemsData(offset) {
    let requestParams = itemsDataParams;
    requestParams.queryParams.offset = offset;
    return fetch(requestUrl(requestParams));
}

export function getCardData(id) {
    let requestParams = cardDataParams;
    requestParams.queryParams.filter = 'id:' + id;
    return fetch(requestUrl(requestParams));
}
