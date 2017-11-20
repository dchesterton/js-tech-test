export function formatDate(dateString) {
    const pad = val => {
        if (val < 10) {
            return '0' + val;
        }

        return val;
    }

    // convert to UTC date
    let date = new Date(dateString);
    date = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());;

    const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ];

    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${day} ${month} ${year}, ${pad(hours)}:${pad(minutes)}`;
}
