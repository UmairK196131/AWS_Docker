const express = require("express");
const os = require("os");

const app = express();

const PORT = 3000;

let counter = 0;

app.get("/", (req, res) => {
    counter++;

    res.send(`
        <h1>Node.js Kubernetes App</h1>
        <p><b>Timestamp:</b> ${new Date()}</p>
        <p><b>Container ID:</b> ${os.hostname()}</p>
        <p><b>Visitor Count:</b> ${counter}</p>
    `);
});

app.get("/health", (req, res) => {
    res.json({ status: "healthy" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});