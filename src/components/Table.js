import { useInputs } from "../lib/InputState";
import filter_clg from "../lib/filter_clg";
import styled from "styled-components";
import useWindowDimensions from "../lib/WindowDimensions";

const TableDiv = styled.table`
  width: 100%;
  margin: 40px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 2px solid black;
  thead {
    width: 100%;
  }
  thead tc,
  tbody tc {
    border-bottom: 2px solid var(--black);
    display: grid;
    grid-template-columns: 2fr 2fr 1fr 1fr;
    @media only screen and (max-width: 600px) {
      grid-template-columns: 5fr 5fr 1fr 1fr;
    }
  }

  tbody tc:last-child {
    border-bottom: none;
  }
  thead tc td,
  tbody tc td {
    border-right: 2px solid black;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: left;
    min-width: 70px;
    :last-child {
      border-right: none;
    }
  }
  thead tc td.rank,
  tbody tc td.rank {
    min-width: 35px;
  }
`;

export default function Table({
  updateLength,
  dataLength,
  limit,
  page,
  number_of_pages,
}) {
  //get inputs
  const { getInputs } = useInputs();
  const inputs = getInputs();

  //get filtered colleges
  const filtered_clgs = filter_clg(inputs).map((clg) => [
    clg.institute,
    clg.program,
    clg.openingRank,
    clg.closingRank,
  ]);
  updateLength(filtered_clgs.length);
  // console.log(filtered_clgs);

  // paginate data
  const start = (page - 1) * limit;
  const end = Math.min(dataLength, page * limit);
  const data = filtered_clgs.slice(start, end);
  // device width and height
  const { width } = useWindowDimensions();
  // console.log(width);
  return (
    <TableDiv>
      <thead>
        <tc>
          <td>Institute</td>
          <td>Program</td>
          <td className="rank"> {width > 600 ? "Opening Rank" : "OR"}</td>
          <td className="rank"> {width > 600 ? "Closing Rank" : "CR"}</td>
        </tc>
      </thead>
      <tbody>
        {data.map((clg) => {
          return (
            <tc>
              {clg.map((data) => {
                return (
                  <td className={typeof data === "number" ? "rank" : ""}>
                    {data}
                  </td>
                );
              })}
            </tc>
          );
        })}
      </tbody>
    </TableDiv>
  );
}