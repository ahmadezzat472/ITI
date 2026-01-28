import express, { Request, Response, NextFunction } from 'express';

const app = express();

const helloWorld = (req: Request, res: Response) => {
  res.json({ message: 'Hello World' })
}

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`[${new Date().toISOString()}] - ${req.method} ${req.url}`)
  next();
}

const middleware = (req: Request, res: Response, next: NextFunction) => {
  /// logic for middleware1
  console.log("Middleware is running")
  next();
}
// Application level middleware
app.use(logger);


app.get("/", middleware, helloWorld)

app.post("/", helloWorld)

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
});