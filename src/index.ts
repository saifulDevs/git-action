import express from "express";

const app = express();
const PORT = 8080;

app.get("/", (req: any, res: { send: (arg0: string) => void }) => {
  res.send("This is Home Page by saiful");
});

app.get("/product", (req: any, res: { send: (arg0: string) => void }) => {
  res.send("This is Product Page");
});

app.get("/order", (req: any, res: { send: (arg0: string) => void }) => {
  res.send("This is order Page");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
