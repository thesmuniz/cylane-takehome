export function convertDateAndTime(data) {
  let currentDateAndTime = new Date();
  console.log(currentDateAndTime);

  let pushDate = new Date(data);
  return pushDate.toString();
}
