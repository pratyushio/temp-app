import { StyleSheet, TextInput, View } from 'react-native';

type SearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
};

export default function SearchBar({ value, onChangeText }: SearchBarProps) {
  return (
    <View style={styles.searchBox}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search...                                                                     ."
        placeholderTextColor="#9CA3AF"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    searchBox: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#D1FAE5",
        borderRadius: 14,
        paddingHorizontal: 14,
        paddingVertical: 12,
        justifyContent: "space-between",
        marginBottom: 12,
    },
    searchInput: {
        color: "#9CA3AF",
        fontSize: 14,
    },
});
