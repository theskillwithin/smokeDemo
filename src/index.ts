import { Node, NetworkHub } from "smoke-node";

// const node = new Node();

const node = new Node({
  hub: new NetworkHub("wss://smoke--sinclairzx81.repl.co"),
});

const app = node.rest.createServer();

const mediastream = node.media.createTestPattern();

app.get("/", (req, res) => {
  res.send("there is no spoon");
  console.log(res);
});

app.get("/media", async (req, res) => {
  await res.mediastream(mediastream);
});

app.listen(80);

async function connect() {
  const remote = "0.0.0.41";

  // const remote = await node.address(); // localhost

  const mediastream = await node.rest
    .fetch(`rest://${remote}/media`)
    .then((res) => res.mediastream());

  const video = document.getElementById("video") as HTMLVideoElement;

  video.srcObject = mediastream;

  video.play();
}

connect();

node.rest
  .fetch("/")
  .then((response) => response.text())
  .then((text) => console.log(text));

node.address().then((address) => console.log(address));

node.address().then((address) => {
  node.rest
    .fetch(`rest://${address}`)
    .then((res) => res.text())
    .then((text) => console.log(text));
});

// node.rest
//   .fetch("rest://0.0.0.14")
//   .then((res) => res.text())
//   .then((text) => console.log("sinclairs: ", text));
