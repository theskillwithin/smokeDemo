import { Node } from "smoke-node";

const node = new Node();

const app = node.rest.createServer();

app.get("/", (req, res) => {
  res.send("hello world");
  console.log(res);
});

app.listen(80);

node.rest
  .fetch("/")
  .then((response) => response.text())
  .then((text) => console.log(text));
