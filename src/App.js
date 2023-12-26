import "./App.css";
import { Routes, Route, useParams } from "react-router-dom";
import { Navbar } from "./Navbar";
import { SecondaryNavbar } from "./SecondaryNavbar";
import { Banner } from "./Banner";
import Data from "./Data.js";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Banner />
        <SecondaryNavbar />
      </div>
      <Routes>
        <Route path="/blog" element={<Bloglist />} />
        <Route
          path="/blog/category/:category"
          element={<BloglistByCategory />}
        />
      </Routes>
    </>
  );
}

export default App;

function Bloglist() {
  return (
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {Data.map((POST, index) => {
          return <Card key={index} postData={POST} />;
        })}
      </div>
    </div>
  );
}

function BloglistByCategory() {
  let { category } = useParams();

  let title = category.replaceAll("-", " ");
  return (
    <div className="container my-5">
      <h2 className="my-3 text-center text-capitalize">{title}</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {Data.map((POST, index) => {
          return POST.category == title ? (
            <Card key={index} postData={POST} />
          ) : (
            ""
          );
        })}
      </div>
    </div>
  );
}

function Card(Props) {
  return (
    <div className="col">
      <div className="card p-0">
        <img src={Props.postData.img} alt={Props.postData.name} />
        <div className="card-body">
          <h5 className="card-title">{Props.postData.name}</h5>
          <p className="card-text">{Props.postData.description}</p>
          <a href={Props.postData.link}>Read More...</a>
        </div>
        <div className="border-top card-body">
          <span>{Props.postData.date}</span>
        </div>
      </div>
    </div>
  );
}
