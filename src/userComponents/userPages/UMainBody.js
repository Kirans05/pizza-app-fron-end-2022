import { Box, Button, Image, list, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputLabel, MenuItem, Select, FormControl } from "@mui/material";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { MainContext } from "../../context/context";
import {} from "@chakra-ui/icons"
import UPizzaCart from "./UPizzaCart";


const UMainBody = () => {
  const nav = useNavigate();

  const toast = useToast();
  const [data, setdata] = useState([]);
  
  const { tocken, varient, setvarient } = useContext(MainContext);

  const handleChange = (e) => {
    setvarient(e.target.value);
  };

  const fetchAllProducts = async () => {
    let options = {
      url: "https://pizza-app-back-end.herokuapp.com/pizzaProduct/fetchAllPizza",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${tocken}`,
      },
      method: "GET",
    };

    try {
      let response = await axios(options);
      setdata(response.data.result);
    } catch (error) {
      toast({
        title: "Unable to Display Product",
        duration: 5000,
        position: "bottom",
        status: "error",
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    fetchAllProducts();
    // console.log("called")
  }, []);


  const selectInputValue = (e) => {
    setvarient(e.target.value)
  }


  return (
    <Box bg="white">
      <Box mt={4} mb={5}>
        <Button
          colorScheme="teal"
          size="md"
        //   onClick={() => nav("/adminDashboard")}
          mr={5}
        >
          Home
        </Button>
        <Button
          colorScheme="teal"
          size="md"
          onClick={() => nav("/cartPage")}
          mr={5}
        >
          Cart Items
        </Button>
        <Button
          colorScheme="teal"
          size="md"
          mr={5}
          onClick={() => nav("/ordersPage")}
        >
          My Orders
        </Button>
      </Box>

      <>
        {data.length != 0 ? (
          <Box
            d="flex"
            alignItems={"center"}
            justifyContent="space-evenly"
            mt={8}
            flexWrap="wrap"
            rowGap={10}
          >
            {data.map((item, index) => {
              return (
                  <UPizzaCart key={index} item={item}/>
              );
            })}
          </Box>
        ) : (
          <h1>No Data to Display</h1>
        )}
      </>
    </Box>
  );
};

export default UMainBody;
