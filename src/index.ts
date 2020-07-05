import { Node } from "smoke-node";

const node = new Node();

const app = node.rest.createServer();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(80);
