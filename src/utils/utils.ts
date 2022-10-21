const convertToWeekDay = (timestamp: number): string => {
  let convertedTimestamp = new Date(timestamp * 1000);

  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let dayOfWeek = days[convertedTimestamp.getDay()];

  return dayOfWeek;
};

export { convertToWeekDay };
