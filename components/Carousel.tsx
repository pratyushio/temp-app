import { Image, StyleSheet, Text, View } from 'react-native';

export default function Carousel() {
  return (
    <View style={styles.imageCard}>
        <Image
            source={{
            uri: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
            }}
            style={styles.goalImage}
        />
        <View style={styles.imageBadge}>
            <Text style={styles.badgeText}>1/4</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    imageCard: {
        borderRadius: 16,
        overflow: "hidden",
        marginBottom: 16,
    },
    goalImage: {
        width: "100%",
        height: 260,
    },
    imageBadge: {
        position: "absolute",
        top: 10,
        right: 10,
        backgroundColor: "rgba(0,0,0,0.6)",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
    },
    badgeText: {
        color: "#fff",
        fontSize: 12,
    },
});
