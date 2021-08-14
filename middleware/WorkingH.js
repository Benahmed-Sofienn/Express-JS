const WorkingH = (req, res, next) => {
  let d = new Date(Date.now());
  let date = d.toString().slice(0, 4);
  let hour = +d.toString().slice(16, 18)+1; //GMT +1 to tunisian time 

  if (date !== "Sat" && date !== "Sun" && hour > 9 && hour < 17) {
    next();
  } else {
    res.sendFile(
      "C:/Users/sofie/OneDrive/Bureau/GoMyCode/Express JS/public/close.html"
    );
  
  }
};
// console.log(WorkingH())

module.exports = WorkingH;
