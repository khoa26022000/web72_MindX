import AppRouter from "./routers";
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="container">
      <AppRouter />
      <Toaster />
    </div>
  );
}

export default App;
