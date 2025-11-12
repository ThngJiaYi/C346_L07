// Exercise 2
import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Exercise2 = () => {
    return (
        <View>
            <View style={styles.greenBox}>
                <Text style={[styles.boxText, styles.title]}>Who We Are</Text>
            </View>
            <View style={styles.greenBox}>
                <Text style={styles.boxText}>Our People</Text>
            </View>
            <View style={styles.greenBox}>
                <Text style={styles.boxText}>Our Campus</Text>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    greenBox: {
        width: "100",
        height: "100",
        marginBottom: 30,
        backgroundColor: "green",
        borderColor: "black",
        borderWidth: 1,
    },
    boxText: {
        textAlign: "center",
        color: "white",
    },
    title: {
        fontWeight: "bold",
    },
});

export default Exercise2;
