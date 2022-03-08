module.exports = getDate;

function getDate()
{
  var options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };
  var today = new Date();
  var day = today.toLocaleDateString("en-US", options);
  return day;
}
