import fs from "node:fs/promises";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const tmp = path.join(root, ".tmp");
const startPort = Number.parseInt(process.env.PORT || "5173", 10);
const mimeTypes = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".svg", "image/svg+xml"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".gif", "image/gif"],
  [".ico", "image/x-icon"]
]);

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function ensureBuild() {
  if (await exists(path.join(dist, "index.html"))) return;
  await import("./build.mjs");
}

function safeJoin(base, requestPath) {
  const target = path.normalize(path.join(base, requestPath));
  if (!target.startsWith(base)) return null;
  return target;
}

async function resolveFile(requestPath) {
  let cleanPath = requestPath;
  if (cleanPath.endsWith("/")) cleanPath += "index.html";

  let target = safeJoin(dist, cleanPath);
  if (!target) return null;

  try {
    const stat = await fs.stat(target);
    if (stat.isDirectory()) target = path.join(target, "index.html");
  } catch {
    if (!path.extname(target)) target = path.join(target, "index.html");
  }

  if (await exists(target)) return target;
  return path.join(dist, "404.html");
}

async function listen(server, port) {
  return new Promise((resolve, reject) => {
    const onError = (error) => {
      server.off("listening", onListening);
      reject(error);
    };
    const onListening = () => {
      server.off("error", onError);
      resolve(port);
    };
    server.once("error", onError);
    server.once("listening", onListening);
    server.listen(port, "127.0.0.1");
  });
}

await ensureBuild();

const server = http.createServer(async (request, response) => {
  try {
    const url = new URL(request.url || "/", "http://localhost");
    const decodedPath = decodeURIComponent(url.pathname);
    const filePath = await resolveFile(decodedPath);
    const body = await fs.readFile(filePath);
    const contentType = mimeTypes.get(path.extname(filePath).toLowerCase()) || "application/octet-stream";
    response.writeHead(filePath.endsWith("404.html") ? 404 : 200, { "Content-Type": contentType });
    response.end(body);
  } catch (error) {
    response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    response.end(error instanceof Error ? error.message : "Server error");
  }
});

let port = startPort;
for (;;) {
  try {
    await listen(server, port);
    break;
  } catch (error) {
    if (error && error.code === "EADDRINUSE" && port < startPort + 20) {
      port += 1;
      continue;
    }
    throw error;
  }
}

await fs.mkdir(tmp, { recursive: true });
await fs.writeFile(path.join(tmp, "dev-server.json"), JSON.stringify({ url: `http://127.0.0.1:${port}` }, null, 2));
console.log(`CMASF site running at http://127.0.0.1:${port}`);
