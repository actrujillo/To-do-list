import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../containers/Home";
import { Layout } from "../components/Layout";
import { Form } from "../containers/Form";
import { AppContext } from "../context/AppContext";
import { Checklist } from "../containers/Checklist";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppContext>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/form" element={<Form />}></Route>
              <Route exact path="/checklist" element={<Checklist />} />
            </Routes>
          </Layout>
        </AppContext>
      </BrowserRouter>
    </>
  );
}

export default App;
