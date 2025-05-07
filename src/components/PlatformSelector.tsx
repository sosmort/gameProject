import { MenuButton, Menu, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "./hooks/usePlatform";
import { Platform } from "./hooks/useGames";

interface Props {
  OnselectedPlatrform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ OnselectedPlatrform, selectedPlatform }: Props) => {
  const { data, errors } = usePlatforms();
  if (errors) return null;
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatform?.name || "Platforms"}
        </MenuButton>
        <MenuList>
          {data.map((p) => (
            <MenuItem onClick={() => OnselectedPlatrform(p)} key={p.id}>
              {p.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default PlatformSelector;
