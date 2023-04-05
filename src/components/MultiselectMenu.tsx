import {
  Menu,
  MenuButton, MenuButtonProps, MenuDivider,
  MenuGroup, MenuItem, MenuItemOption, MenuList, MenuOptionGroup
} from "@chakra-ui/menu";

const MultiSelectMenu = (props: MultiSelectMenuProps): JSX.Element => {
  const { label, options, buttonProps, selectedOptions,setSelectedOptions } = props;
  
  return (
    <Menu closeOnSelect={false}>
      {({ onClose }) => (
        <>
          <MenuButton
            /* eslint-disable @typescript-eslint/ban-ts-comment */
            // @ts-ignore <MenuButton> does have a 'type' prop because it is just a button. This is to make sure clicking this doesn't submit any forms.
            type="button"
            /* eslint-enable @typescript-eslint/ban-ts-comment */
            backgroundColor={selectedOptions.length ? "teal.200" : "white"}
            color={selectedOptions.length ? "black" : "teal.500"}
            borderColor={selectedOptions.length ? "gray.300" : "teal.200"}
            borderWidth={1}
            p={1}
            px={4}
            borderRadius="md"
            _focus={{
              outline: "none"
            }}
            {...buttonProps}
            w="8rem"
          >
            {`${label}${
              selectedOptions.length > 0 ? ` (${selectedOptions.length})` : " (0)"
            }`}
          </MenuButton>
          <MenuList>
            <MenuGroup title={undefined}>
              <MenuItem
                onClick={() => {
                  setSelectedOptions([]);
                  // Have to close, otherwise the defaultValue won't be reset correctly
                  // and so the UI won't immediately show the menu item options unselected.
                  onClose();
                }}
              >
                Clear all
              </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuOptionGroup
              title={undefined}
              defaultValue={selectedOptions}
              type="checkbox"
              /* eslint-disable @typescript-eslint/ban-ts-comment */
              // @ts-ignore Arguments type is just wrong upstream.
              onChange={(values: string[]) => {
                // Filter out empty strings, because, well, this component seems to add
                // an empty string out of nowhere.
                setSelectedOptions(values.filter((_) => _.length));
                props.onChange?.(values);
              }}
              /* eslint-enable @typescript-eslint/ban-ts-comment */
            >
              {options.map((option) => {
                return (
                  // Use 'type'='button' to make sure it doesn't default to 'type'='submit'.
                  <MenuItemOption
                    key={`multiselect-menu-${option}`}
                    /* eslint-disable @typescript-eslint/ban-ts-comment */
                    // @ts-ignore <MenuItemOption> does have a 'type' prop because it is just a button. This is to make sure clicking this doesn't submit any forms.
                    type="button"
                    /* eslint-enable @typescript-eslint/ban-ts-comment */
                    value={option}
                  >
                    {option}
                  </MenuItemOption>
                );
              })}
            </MenuOptionGroup>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

MultiSelectMenu.displayName = "MultiSelectMenu";

export type MultiSelectMenuProps = {
  label: string;
  options: string[];
  onChange?: (selectedValues: string[]) => void;
  buttonProps?: MenuButtonProps;
  selectedOptions: string[];
  setSelectedOptions: (selectedOptions: string[])=>void;
};

export default MultiSelectMenu;
