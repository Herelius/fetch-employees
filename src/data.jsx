import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

app.get("./", (request, response) => {
  response.status(200).json(request);
});
