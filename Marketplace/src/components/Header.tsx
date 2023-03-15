import { Text, View } from "native-base";
import { TouchableOpacity } from "react-native";
import Avatar from "@assets/Profile.svg";

import { ButtonBlackAdd } from "@components/Button";

export function Header({ name, navigation }) {
  return (
    <TouchableOpacity>
      <View
        display="flex"
        w="100%"
        pb="10px"
        pl="10px"
        pt="50px"
        mr="20px"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        borderBottomWidth="1px"
        borderColor="#cecece"
      >
        <Avatar width="70" height="50" fill="none" />
        <View flex={1} justifyContent="center" p="5px">
          <Text fontSize="18px" ml="5px" color="gray.1">
            Boas vindas,
          </Text>
          <Text fontSize="18px" color="gray.1" ml="3px" fontWeight="600">
            {name}
          </Text>
        </View>
        <View flex={1.2} justifyContent="center" pr="15px">
          <ButtonBlackAdd
            w="100%"
            title="Criar anúncio"
            onPress={() => navigation.navigate("SignIn")}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}
