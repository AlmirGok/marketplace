import React from "react";
import {
  Input as NativeBaseInput,
  FormControl,
  Icon,
  Pressable,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export function Input({ ...rest }) {
  return (
    <FormControl mb={4}>
      <NativeBaseInput
        bg="#ffffff"
        h="45px"
        px={4}
        borderWidth={0}
        fontSize="md"
        color="gray.2"
        fontFamily="body"
        placeholderTextColor="gray.4"
        _focus={{
          bgColor: "#ffffff",
          borderWidth: 2,
          borderColor: "blue.100",
        }}
        {...rest}
      />
    </FormControl>
  );
}

export function InputPassword({ ...rest }) {
  const [show, setShow] = React.useState(false);
  return (
    <FormControl mb={4}>
      <NativeBaseInput
        bg="#ffffff"
        h="45px"
        px={4}
        borderWidth={0}
        fontSize="md"
        color="gray.2"
        fontFamily="body"
        placeholderTextColor="gray.4"
        _focus={{
          bgColor: "#ffffff",
          borderWidth: 2,
          borderColor: "blue.100",
        }}
        {...rest}
        type={show ? "text" : "password"}
        InputRightElement={
          <Pressable onPress={() => setShow(!show)}>
            <Icon
              as={
                <MaterialIcons name={show ? "visibility" : "visibility-off"} />
              }
              size={6}
              mr="3"
              color="muted.400"
            />
          </Pressable>
        }
      />
    </FormControl>
  );
}
