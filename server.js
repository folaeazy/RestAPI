const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const sequelize = require("./config/db");
const authRoute  = require("./routes/authRoute");



app.use((req,res,next)=> {
    console.log(req.url);
    next();
})

sequelize.sync().then(() => {
  console.log("Database has been synced!");
});

app.get("/", (req,res) =>  {
    res.send("Testing....it is....");
});

app.use("/auth", authRoute);

app.listen(PORT, ()=> console.log(`App Listening on port ${PORT}`));