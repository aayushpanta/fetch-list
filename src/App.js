import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Table from "./MyComponents/Table";
import List from "./MyComponents/List";
import About from "./MyComponents/About";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

//import "./styles.css";

function App() {
  const [users, setUsers] = useState();

  // Function to collect data
  const getApiData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.ir/users"
    ).then((response) => response.json());

    setUsers(response);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header title='User Data' />
        <Routes>
          <Route path="/" element={
            <>
            <Table users={users} />
            </>
            }
           ></Route>
          <Route path="about" element={<About />} />
          <Route path="list" element={<List users={users}/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;
