import moment from "moment";

function formatDate(date) {
  return moment(date).format('dddd, Do YYYY, hA');
}
export default formatDate