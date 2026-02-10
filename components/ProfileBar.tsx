import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileBar() {
  return (
    <View style={styles.header}>
        <View style={styles.profileTag}>
            <Image
            source={{ uri: "https://i.pravatar.cc/100?img=8" }}
            style={styles.profileImage}
            />
            <View style={styles.profileTextContainer}>
            <Text style={styles.profileName}>Anna</Text>
            <Text style={styles.profileMeta}>Career, Health & Fitness, Finance, Personal</Text>
            </View>
        </View>

        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Remove</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
   header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    gap: 24,
  },
  profileTag: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.8,
    borderColor: "#d2f1e8",
    borderRadius: 200,
    // width: 200,
    maxWidth: "60%",
  },
  profileImage: {
    width: 54,
    height: 54,
    borderRadius: 200,
    marginRight: 10,
  },
  profileTextContainer: {
    flexShrink: 1,
  },
  profileName: {
    fontWeight: "600",
    fontSize: 14,
  },
  profileMeta: {
    fontSize: 12,
    color: "#6B7280",
  },

//   
  button: {
    backgroundColor: "#9AC7B2", // #ABD4B7
    padding: 16,
    flex: 6,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 5,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
    color: "#065F46",
    fontWeight: "600",
  },
});
