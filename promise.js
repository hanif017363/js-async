const hasMeeting = true;

const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meeetingDetails = {
      name: "tech",
      location: "google",
    };
    resolve(meeetingDetails);
  } else {
    reject(new Error("goofy ahh"));
  }
});

console.log(meeting);

meeting
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err.message);
  });
