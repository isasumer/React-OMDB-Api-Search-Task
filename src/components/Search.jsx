import { useRef, useState } from "react";
import Result from "./Result";
import { Card, Form, ButtonGroup, Button } from "react-bootstrap";

const Search = () => {
  const inputRef = useRef();
  const [searchedWord, setSearchedWord] = useState("squid game");
  const submitHandler = (e) => {
    e.preventDefault();
    setSearchedWord(inputRef.current.value);
  };
  return (
    <>
      <Card className="m-3">
        <Form
          style={{
            width: "521px",
          }}
          className="p-3"
          onSubmit={submitHandler}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="h3">Movie title</Form.Label>
            <br />
            <Form.Control
              type="text"
              placeholder="Please search your favorite movie"
              ref={inputRef}
            />
          </Form.Group>
          <ButtonGroup style={{ paddingLeft: "70%" }}>
            <Button
              style={{
                border: "none",
                borderRadius: "20px",
                marginRight: "10px",
              }}
              variant="outline-danger"
              type="reset"
            >
              Clear
            </Button>
            <Button
              style={{
                borderRadius: "20px",
              }}
              variant="success"
              type="submit"
            >
              Submit
            </Button>
          </ButtonGroup>
        </Form>
      </Card>
      <Result searchedWord={searchedWord} />
    </>
  );
};

export default Search;
