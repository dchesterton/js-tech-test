export function mergeEventData(event, markets, outcomes) {
    const eventMarkets = markets[event.eventId];

    eventMarkets.forEach(market => {
        let eventOutcomes = outcomes[market.marketId];

        if (typeof eventOutcomes === 'undefined') {
            eventOutcomes = [];
        }

        market.outcomes = eventOutcomes;
    });

    return Object.assign({}, event, {markets: eventMarkets});
}

export function formatDate(dateString) {
    const date = new Date(dateString);

    const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ];

    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${day} ${month} ${year}, ${hours}:${minutes}`;
}
