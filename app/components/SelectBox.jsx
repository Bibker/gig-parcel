import SelectDropdown from "react-native-select-dropdown";

const SelectBox = ({ setSelected, data, buttonWidth }) => {
    return (
        <SelectDropdown
            data={data}
            onSelect={(selectedItem, index) => {
                setSelected(selectedItem);
            }}
            defaultButtonText='Select Option'
            buttonStyle={{
                borderRadius: 5,
                alignSelf: 'center',
                width: buttonWidth ? buttonWidth : '80%',
                height: 40,
                backgroundColor: '#d6654f'
            }}
            buttonTextStyle={{
                fontSize: 14,
                fontWeight: 'bold',
                color: '#fff'
            }}
            dropdownStyle={
                {
                    marginTop: 0,
                    backgroundColor: ''
                }
            }
            rowStyle={{
                marginTop: 1,
                borderWidth: 1.2,
                borderRadius: 8,
                height: 40,
                padding: 5,
                borderColor: '#d6654f',
                backgroundColor: '#fff'
            }}
            rowTextStyle={{
                color: '#d6654f',
                fontSize: 16,
                fontWeight: 500
            }}
            selectedRowStyle={{
                backgroundColor: '#d6654f'
            }}
            selectedRowTextStyle={{
                color: '#fff'
            }}
        />

    )
}

export default SelectBox;