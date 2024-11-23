const hasMeeting = false;

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

const addTocalender = (meeetingDetails) => {
  const schedule = `${meeetingDetails.name} is schedule for ${meeetingDetails.location}`;

  return Promise.resolve(schedule);
};

meeting
  .then(addTocalender)
  .then((schedule) => {
    console.log(schedule);
  })
  .catch((err) => {
    console.log(err.message);
  });
//   git config --global http.postBuffer 1048576000
