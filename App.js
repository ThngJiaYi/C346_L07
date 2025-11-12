// Main file : App.js
import React from "react";
import { View, Text } from "react-native";
import Exercise1 from "./Exercise1";
import Exercise2 from "./Exercise2";
import Exercise3A from "./Exercise3";
import Exercise3B from "./Exercise3B";
import Exercise3C from "./Exercise3C";
import Exercise3D from "./Exercise3D";
import Exercise3E from "./Exercise3E";
import Exercise4 from "./Exercise4";

const MyApp = () => {
    return (
        <View style={{ marginTop: 40, flex: 1 }}>
            <Text style={{ fontSize: 30 }}>Lesson 7 exercises:</Text>

            {/*<Exercise1 />*/}

            {/*<Text></Text>*/}

            {/*<Exercise2 />*/}

            {/*<Text></Text>*/}

            {/*<Exercise3A/>*/}

            {/*<Text></Text>*/}

            {/*<Exercise3B />*/}

            {/*<Text></Text>*/}

            {/*<Exercise3C />*/}

            {/*<Text></Text>*/}

            {/*<Exercise3D />*/}

            {/*<Text></Text>*/}

            {/*<Exercise3E/>*/}

            {/*<Text></Text>*/}

            <Exercise4/>

        </View>
    );
};

export default MyApp;
