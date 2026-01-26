const http = require("http");
const fs = require("node:fs");

const FILE_NAME = "students.json";
const data = JSON.parse(fs.readFileSync(FILE_NAME, "utf-8"));

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  const url = new URL(req.url, `http://${req.headers.host}`);

  if (req.method === "GET" && url.pathname === "/students") {
    res.writeHead(200);
    res.end(JSON.stringify(data));
  } else if (req.method === "GET" && url.pathname === "/students/search") {
    const searchName = url.searchParams.get("name");

    if (!searchName) {
      res.writeHead(400);
      return res.end(
        JSON.stringify({ message: "Query parameter 'name' is required" }),
      );
    }

    const results = data.filter((student) =>
      student.name.toLowerCase().includes(searchName.toLowerCase()),
    );

    res.writeHead(200);
    res.end(JSON.stringify(results));
  } else if (req.method === "GET" && url.pathname === "/stats") {
    res.writeHead(200);
    res.end(JSON.stringify({ totalStudents: data.length }));
  } else if (req.method === "GET" && url.pathname === "/courses") {
    const courses = [...new Set(data.map((s) => s.course))];
    res.writeHead(200);
    res.end(JSON.stringify(courses));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(3000, () => {
  console.log("✅ Server running on port 3000");
});
