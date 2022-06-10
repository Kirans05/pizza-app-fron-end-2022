import { Box, Button, useToast, Text, Image } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../../context/context";
import AddCartBody from "./AddCartBody";
import UHeader from "./UHeader";

const AddToCart = () => {
  const toast = useToast();
  let { cartItem, setcartItem, tocken } = useContext(MainContext);
  const [pizzaVarient, setpizzaVarient] = useState("");
  const [fetchAgain, setfetchagain] = useState(false);


  const fetchCartItem = async () => {
    let options = {
      url: "https://pizza-app-back-end.herokuapp.com/user/fetchCartItem",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${tocken}`,
        value: "user",
      },
      method: "GET",
    };

    try {
      let response = await axios(options);
      let arr = response.data.result[0].cartItem;
      setcartItem(arr);
    } catch (error) {
      toast({
        title: "Unable To Fetch Cart Item",
        duration: 5000,
        isClosable: true,
        position: "bottom",
        status: "error",
      });
    }
  };

  useEffect(() => {
    fetchCartItem();
  }, [fetchAgain]);

  return (
    <Box>
      <UHeader>
        <Button>Home</Button>
      </UHeader>
      <br />
      <br />
      {cartItem.length == 0 ? (
        <Text
        fontSize={40}
        textAlign={"center"}
        color="black"
        >
          No Items In The Cart
        </Text>
      ) : (
        <Box d="flex" flexDir={"column"} bg="white" rowGap={10}>
          {cartItem.map((item, index) => {
            return (
              <AddCartBody
                key={index}
                item={item}
                setfetchagain={setfetchagain}
                fetchAgain={fetchAgain}
              />
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default AddToCart;
