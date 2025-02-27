import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllFriends, setAllFriendRequests } from "../store/friends/index";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  VStack,
  HStack,
  Image,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import Nav from "../Navbar/Nav";

const API_LINK = process.env.REACT_APP_API_LINK;

const Friends = () => {
  const dispatch = useDispatch();
  const friends = useSelector((state) => state.friends.allFriends);
  const id = useSelector((state) => state.auth.userId);
  const friendRequests = useSelector((state) => state.friends.friendRequests);

  const navigate = useNavigate();

  const getAllFriends = async () => {
    try {
      const response = await axios.get(`${API_LINK}/friends/${id}`);
      dispatch(setAllFriends(response.data.connection));
      console.log(response.data.connection);
    } catch (err) {
      console.log(err);
    }
  };

  const getAllFriendRequests = async () => {
    try {
      const response = await axios.get(`${API_LINK}/friends/requests/${id}`);
      dispatch(setAllFriendRequests(response.data.connection));
      console.log(response.data.connection);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteFriend = async (friendId) => {
    try {
      const response = await axios.delete(
        `${API_LINK}/friends/delete/${id}?friend_id=${friendId}`
      );
      console.log(response.data);
      await getAllFriends();
    } catch (err) {
      console.log(err.response.data);
    }
  };

  useEffect(() => {
    getAllFriends();
    getAllFriendRequests();
  }, []);

  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <>
      <Nav />
      <ChakraProvider>
        <CSSReset />
        <VStack spacing={4} w="full">
          {friends.map((friend) => (
            <Box
              key={friend.connection_id}
              borderWidth={1}
              borderColor={borderColor}
              borderRadius="md"
              p={4}
              w="full"
              mt="85px"
            >
              <HStack spacing={4}>
                <Image
                  boxSize="50px"
                  borderRadius="full"
                  src={friend.user_image}
                  alt={friend.first_name + " " + friend.last_name}
                />
                <VStack align="start" spacing={1}>
                  <Text fontWeight="bold">
                    {friend.first_name} {friend.last_name}
                  </Text>
                  <HStack>
                    <Button
                      size="sm"
                      colorScheme="teal"
                      onClick={() => {
                        navigate(`/friends/${friend.connection_id}`);
                      }}
                    >
                      Message
                    </Button>
                    <Button
                      size="sm"
                      colorScheme="red"
                      onClick={() => {
                        deleteFriend(friend.friend_id);
                      }}
                    >
                      Delete
                    </Button>
                  </HStack>
                </VStack>
              </HStack>
            </Box>
          ))}
        </VStack>
      </ChakraProvider>
    </>
  );
};

export default Friends;
