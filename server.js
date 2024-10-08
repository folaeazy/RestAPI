const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const sequalize = require("./config/db");
const authRoute  = require("./routes/authRoute");
const { logger, errorHandler } = require('./middlewares/errorHandler');

// custom middleware
app.use(logger);
sequalize.sync().then(() => {
  console.log("Database has been synced!");
});


//middleware
app.use(express.json());

//Routes

app.get("/", (req,res) =>  {
    res.send("Testing....it is....");
});

app.use("/auth", authRoute);


//error Handler
app.use(errorHandler);







app.listen(PORT, ()=> console.log(`App Listening on port ${PORT}`));