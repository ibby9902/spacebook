// parses the ISO string to unix time and returns a formatted time & date
const formatTimestamp = (timestamp) => {
  const unixTime = Date.parse(timestamp);
  const date = new Date(unixTime);
  return `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`;
};

export default formatTimestamp;
