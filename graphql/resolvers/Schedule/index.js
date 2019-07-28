import fetch from "node-fetch";

const getSchedules = (startTime, endTime) =>
  fetch(
    `http://cafe.daum.net/_c21_/api/schedule?grpid=1Y3By&fldid=l0C7&startTime=${startTime.toISOString()}&endTime=${endTime.toISOString()}`
  )
    .then(response => response.json())
    .then(json => json.scheduleList);

export { getSchedules };
