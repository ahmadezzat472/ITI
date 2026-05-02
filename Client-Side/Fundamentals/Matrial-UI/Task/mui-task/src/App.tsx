import { Button } from "@mui/material";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/Header";
import MediaCard from "./components/MediaCard";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="">
        <div className="bg-black/50 h-80 p-5 flex items-center justify-center flex-col gap-4">
          <h2 className="text-white text-4xl font-bold">Welcome to my blog!</h2>
          <Button variant="contained">Hello world</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {Array.from({ length: 10 }, (_, i) => (
            <MediaCard key={i} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
