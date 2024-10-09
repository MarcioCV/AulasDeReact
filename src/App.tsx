import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Sales } from "./pages/Sales";
import { CreateCollection } from "./pages/CreateCollections";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/create-collection" element={<CreateCollection />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<div>Profile</div>} />
          <Route path="sales" element={<Sales />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
