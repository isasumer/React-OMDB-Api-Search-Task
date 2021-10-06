import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

const Result = ({ searchedWord }) => {
  console.log(searchedWord);
  const baseURL = `https://www.omdbapi.com/?t=${searchedWord}&apikey=1a7c1f9`;
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((res) => {
      setData(res.data);
    });
  }, [searchedWord]);
  console.log(data);
  return (
    <Card
      style={{
        width: "521px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {searchedWord ? (
        <>
          <Card.Title className="text-center p-1">{data.Title}</Card.Title>
          <Card.Img
            className="p-1"
            style={{ width: "200px", height: "200px" }}
            src={data.Poster}
          />
          <Card.Subtitle className=" text-center p-3">
            {data.Plot}
          </Card.Subtitle>
        </>
      ) : (
        <p>Please search your favorite movie</p>
      )}
    </Card>
  );
};

export default Result;
