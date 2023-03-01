import "./main.css";
import cross from "../../assets/images/cross.png";
import slogan from "./sloganData.json";
import { useState } from "react";
import { Slogans } from "./Solgan/Slogan";
import { Pagination } from "./Pagination/Pagination";

export const Main = () => {
  const [input, setInput] = useState("crazy");
  const [finalInput, setFinalInput] = useState(input);

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(18);

  const clickHandler = () => {
    setInput("");
  };

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const generateSolgon = () => {
    setFinalInput(input);
  };

  const filterSolgon = slogan.filter(
    (element) => element.sloganKey == finalInput
  );

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = filterSolgon.slice(indexOfFirstPost, indexOfLastPost);

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  let dots = " ...";

  const nextPage = () => {
    setCurrentPage((prev) =>
      indexOfLastPost <= filterSolgon.length ? prev + 1 : prev
    );
  };

  return (
    <>
      <section className="main-header"></section>
      <main className="main-conatiner">
        <div className="main-wrapper">
          <div className="main-content">
            <h1 className="heading mb-16">Free slogan maker</h1>
            <p className="sub-heading mb-48">
              Simply enter a term that describes your business, and get up to
              1,000 relevant slogans for free.
            </p>
            <div className="main-input-conatiner mb-48">
              <label htmlFor="" className="input-label mb-8">
                Word for your slogan
              </label>
              <div className="input">
                <input
                  className="main-input"
                  value={input}
                  onChange={(e) => inputHandler(e)}
                />
                {input && (
                  <button onClick={clickHandler}>
                    <img src={cross} alt="cross" className="input-cross" />
                  </button>
                )}
              </div>
            </div>
            <button className="btn btn-primary mb-48" onClick={generateSolgon}>
              <span>Generate slogans</span>
            </button>

            <div className="divider-horizontal mb-52"></div>

            <div className="flex-aligncenter space-between mb-32">
              <p className="slogans-result-heading ">
                We have generated {filterSolgon.length} slogans for "
                {finalInput}"
              </p>
              <button className="btn btn-outline">Download all</button>
            </div>

            <Slogans slogan={currentPosts} />

            <div className="divider-horizontal mb-24"></div>

            <Pagination
              pagination={pagination}
              slogan={filterSolgon}
              postPerPage={postPerPage}
              currentPage={currentPage}
              nextPage={nextPage}
            />
          </div>
        </div>
      </main>
    </>
  );
};
