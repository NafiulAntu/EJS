
app.set("/", (req, res) => {
  const today = new Date("July 21, 1983 01:15:00");
  const day = today.getDay();
  //console.log(day);

  let type = "a weekday";
  let adv = "Its time to work hard";

  if (day === 0 || day === 6) {
    type = "a weekend";
    adv = "Its time to relax";
  }

  res.render("index.js", {
    dayType: "a weekday",
    advice: "Its time to work hard",
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
