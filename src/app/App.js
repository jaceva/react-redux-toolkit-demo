import React from "react";

import "./App.css";
import AllThings from "../features/allThings/AllThings";
import MyThings from "../features/myThings/MyThings";
import Search from "../features/search/Search";

function App() {

  return (
    <main>
      <section>
        <Search />
      </section>
      <section>
        <AllThings />
      </section>
      <hr />
      <section>
        <MyThings />
      </section>
    </main>
  );
}

export default App;
