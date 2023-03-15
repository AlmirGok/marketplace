import React from "react";
import {
  Input as NativeBaseInput,
  FormControl,
  Icon,
  Pressable,
  View,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

import IconFilter from "@assets/Filter.svg";
import IconSearch from "@assets/Search.svg";

export function InputFilter({ ...rest }) {
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
        InputRightElement={
          <View flexDirection="row">
            <View pl="12px" pr="12px">
              <IconSearch width="21" height="21" fill="none" />
            </View>

            <Pressable
              borderLeftWidth="1px "
              borderColor="#9F9BA1"
              pl="12px"
              pr="12px"
            >
              <IconFilter width="21" height="21" fill="none" />
            </Pressable>
          </View>
        }
      />
    </FormControl>
  );
}
