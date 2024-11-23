function countDown() {
  const remainDate = "30 Nov 2024"; // Your target date
  const currentDate = new Date();
  const targetDate = new Date(remainDate);

  const mili = targetDate - currentDate;
  const totalSecond = mili / 1000;
  const days = Math.floor(totalSecond / (24 * 3600));
  const hours = Math.floor((totalSecond % (24 * 3600)) / 3600);
  const min = Math.floor((totalSecond % 3600) / 60);
  const sec = Math.floor(totalSecond % 60);
  const milliseconds = Math.floor((mili % 1000) / 100) * 100;

  // Update each element while keeping the `:<span>` intact
  document.getElementById("day").innerText = formatDate(days);
  document.getElementById("hour").innerHTML = `<span>:</span>${formatDate(
    hours
  )}`;
  document.getElementById("min").innerHTML = `<span>:</span>${formatDate(min)}`;
  document.getElementById("sec").innerHTML = `<span>:</span>${formatDate(sec)}`;
  document.getElementById("mil").innerHTML = `<span>:</span>${milliseconds}`;
}

function formatDate(time) {
  return time < 10 ? `0${time}` : time;
}

// Run countDown every 100ms
setInterval(countDown, 100);
//

//

const takeOrder = (customer, callBack) => {
  console.log(`taking order for ${customer}`);
  callBack(customer);
};

//
const processOrder = (customer, callBack) => {
  console.log(`processing for ${customer}`);
  setTimeout(() => {
    console.log("cooking done");
    console.log(`order processed for  ${customer}`);
    callBack();
  }, 5000);
};

const completeOrder = (customer) => {
  console.log(`completed order for  ${customer}`);
};

//
//

takeOrder("customer 1", (customer) => {
  processOrder(customer, (customer) => {
    completeOrder(customer);
  });
});
console.log("goofy ");
console.log("ahh");
console.log("uoh");
