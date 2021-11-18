import { Router } from "./Router/Router";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div
        style={{ backgroundColor: "#ABE9F4", paddingBottom: '15px', minHeight: '100vh' }}
      >
        <Router />
      </div>
      <Footer />
    </>
  );
}

export default App;
