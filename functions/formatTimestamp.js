// parses the ISO string to unix time and returns a formatted time & date
const formatTimestamp = (timestamp) => {
    let unixTime = Date.parse(timestamp);
    let date = new Date(unixTime);
    return `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
}

export default formatTimestamp;