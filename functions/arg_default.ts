{
  const showTime = (time: Date = new Date()): string => {
    return "current time: " + time.toLocaleString();
  };
  console.log(showTime());
}
