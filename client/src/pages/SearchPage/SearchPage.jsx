import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import Stack from "react-bootstrap/Stack";
import { ServerAPI_GET, ServerAPI_POST } from "../../lib/ServerAPI";

const SearchPage = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  // const items = [
  //   { id: 1, text: "Building 1" },
  //   { id: 2, text: "Building 2" },
  //   { id: 3, text: "Building 3" },
  // ];

  const getBuildings = (e) => {
    console.log(e.target.value);
    // Define the URL of the RESTful API endpoint you want to request data from
    const apiUrl = "http://localhost:5000/api/v1/building/bld_name";

    const data = {
      building_name: e.target.value,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // You can adjust the content type based on your server's requirements
      },
      body: JSON.stringify(data), // Convert the data object to a JSON string
    };
    fetch(apiUrl, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the response as JSON
      })
      .then((data) => {
        console.log("Data received:", data);
        setData(data);
        // You can work with the data here
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <div align="center">
        <InputGroup style={{ width: "80%" }} className="mb-3">
          <Stack>
            <Form.Control
              onChange={(e) => {
                getBuildings(e);
              }}
              align="center"
              placeholder="Enter the name of a building"
              aria-label="Enter the name of a building"
              aria-describedby="basic-addon2"
            />
            <br></br>
            <br></br>
            <Stack>
              {data.map((val, i) => (
                <div key={i}>
                  <li
                    onClick={() =>
                      navigate(`/building_room/${val.id}`, {
                        state: { id: val.id, title: val.building_name },
                      })
                    }
                  >
                    You can be intrested in: {val.building_name}
                  </li>
                </div>
              ))}
            </Stack>
          </Stack>
        </InputGroup>
      </div>
    </>
  );
};

export default SearchPage;