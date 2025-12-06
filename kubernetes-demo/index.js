import express from "express";

const PORT = process.env.PORT || 3000;

const app = express();


app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    message: "Hello from Kubernetes Demo!",
    service: "kubernetes-demo",
    pod: process.env.POD_NAME || "unknown",
    time: new Date().toISOString(),
  });
});

app.get("/readyz", (req, res) => { res.status(200).send("ready"); });

app.get("/healthz", (req, res) => { res.status(200).send("OK"); });


app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
