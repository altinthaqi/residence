import {
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Stack,
  Tag,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useRef, useContext } from "react";
import ProfileInfo from "../components/UI/ProfileInfo";
import { UserContext } from "../context/UserContext";

export default function Profile({ onOpen, isOpen, onClose }) {
  const { currentUserData, setCurrentUserData } = useContext(UserContext);

  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">
              Informatat e profilit
            </DrawerHeader>

            <DrawerBody>
              <Container>
                <HStack justify="center" align="center">
                  <Heading my="20px" fontWeight="medium">
                    {currentUserData.userInfo.first_name}{" "}
                    {currentUserData.userInfo.last_name}
                  </Heading>
                </HStack>
                <Divider />
                <ProfileInfo topic="ID" content={currentUserData.userInfo.id} />
                <ProfileInfo
                  topic="Roli"
                  content={
                    currentUserData.userInfo.role_id === "1"
                      ? "PERDORUES"
                      : "ADMINISTRATOR"
                  }
                />

                <ProfileInfo
                  topic="Emri"
                  content={currentUserData.userInfo.first_name}
                />
                <ProfileInfo
                  topic="Mbiemri"
                  content={currentUserData.userInfo.last_name}
                />

                <ProfileInfo
                  topic="Email"
                  content={currentUserData.userInfo.email}
                />

                <ProfileInfo
                  topic="Fjalëkalimi"
                  content={currentUserData.userInfo.passw}
                />

                {currentUserData?.userInfo.city && (
                  <ProfileInfo
                    topic="Qyteti"
                    content={currentUserData.userInfo.city}
                  />
                )}

                <ProfileInfo
                  topic="Përdorues nga"
                  content={currentUserData.userInfo.created_at}
                />
              </Container>
            </DrawerBody>

            <DrawerFooter borderTopWidth="1px">
              <Button variant="outline" mr={3} onClick={onClose}>
                Anulo
              </Button>
              <Button colorScheme="teal" variant="solid" mr={3}>
                Përditëso
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
