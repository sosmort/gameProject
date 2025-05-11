import { MenuButton, Menu, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
interface Props {
  sortOrder: string | null;
  OnselectedSortOrder: (sortOrder: string) => void;
}
const SortSelector = ({ OnselectedSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-added", label: "Date Added" },
    { value: "-rating", label: "Average rating" },
    { value: "-metacritic", label: "Popularity" },
  ];
  const selectedSort = sortOrders.find((order) => order.value === sortOrder);
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order by: {selectedSort?.label || "Relevance"}
        </MenuButton>
        <MenuList>
          {sortOrders.map((order) => (
            <MenuItem
              onClick={() => OnselectedSortOrder(order.value)}
              key={order.value}
              value={order.value}
            >
              {order.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default SortSelector;
