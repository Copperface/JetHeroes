export function parseUrlQuery() {
    let data = {};
    if (location.search) {
        let pair = (location.search.substr(1)).split('&');
        for (var i = 0; i < pair.length; i++) {
            var param = pair[i].split('=');
            data[param[0]] = param[1];
        }
    }
    return data;
}

