import { useState } from "react";
import styled from "styled-components";
import Table from "./Table";

const ResultPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
`;

const Pagination = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  button {
    width: 50px;
    height: 40px;
    margin: 20px 10px;
    background-color: var(--lightblue);
    border: 1px;
    border-radius: 10px;
    color: white;
    letter-spacing: 0.8px;
  }
  button:disabled {
    background-color: var(--darkblue);
  }
`;

export default function Result() {
  const [page, setPage] = useState(1);
  const [dataLength, setDataLength] = useState(0);

  const limit = 10;
  const number_of_pages = Math.max(1, Math.ceil(dataLength / limit));

  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(page - 1);

  return (
    <ResultPage>
      <h1 className="neonText">Result</h1>
      <Table
        updateLength={setDataLength}
        dataLength={dataLength}
        limit={limit}
        page={page}
        number_of_pages={number_of_pages}
      />
      <Pagination>
        <button type="button" disabled={page <= 1} onClick={prevPage}>
          Prev
        </button>
        <p>
          page {page} of {number_of_pages} total pages
        </p>
        <button
          type="button"
          disabled={page >= number_of_pages}
          onClick={nextPage}
        >
          Next
        </button>
      </Pagination>
    </ResultPage>
  );
}
