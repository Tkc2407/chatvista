import { Box, IconButton, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react'
import { ChatState } from '../Context/ChatProvider';
import { ArrowBackIcon } from '@chakra-ui/icons';
import ProfileModal from './miscellaneous/ProfileModal';
import { getSender, getSenderFull } from '../config/ChatLogics';
import UpadateGroupChatModal from './miscellaneous/UpdateGroupChatModal';

const SingleChat = ({ fetchAgain, setFetchAgain }) => {
  const { user, selectedChat, setSelectedChat } = ChatState();
  
  return (
    <>
      {selectedChat ? (
        <>
          <Text
            fontSize={{ base: "28px", md: "30px" }}
            pb={3}
            px={2}
            w="100%"
            fontFamily="Work sans"
            display="flex"
            justifyContent={{ base: "space-between" }}
            alignItems="center">
            <IconButton
              display={{ base: "flex", md: "none" }}
              icon={<ArrowBackIcon />}
              onClick={() => setSelectedChat("")}
            />
            {!selectedChat.isGroupChat ? (
              <>
              {getSender(user,selectedChat.users)}
              <ProfileModal user={getSenderFull(user,selectedChat.users)}/>
              </>
            ) : (
              <>
              {selectedChat.chatName.toUpperCase()}
              <UpadateGroupChatModal fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}/>
              </>
            )}
          </Text>
          <Box>

          </Box>
        </>
      ) : (
        <Box display="flex" alignItems="center" justifyContent="center" h="100%">
          <Text fontSize="3xl" pb={3} fontFamily="Work sans">
            Click on a user to start chatting
          </Text>
        </Box>
      )}

    </>
  )
}

export default SingleChat