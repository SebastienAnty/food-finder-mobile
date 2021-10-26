import React, { useEffect, useContext } from "react";
import { View, Text, ScrollView } from "react-native";
import { Fab, QuestionIcon } from "native-base";
import { RestaurantContext } from "../App";
import RestaurantCard from "./RestaurantCard";
import styles from "../styles";

export default function Home({ navigation }) {
    const {restaurants, setRestaurants} = useContext(RestaurantContext);
    useEffect(() => {
        fetch("https://bocacode-intranet-api.web.app/restaurants")
            .then(response => response.json())
            .then(setRestaurants)
            .catch(alert)
    }, [])
    return(
    <View style={styles.container}>
        {! restaurants 
            ? <Text>Loading...</Text>
            :   <ScrollView>
                {restaurants.map(rest => <RestaurantCard key={rest.id} rest={rest} />)}
                </ScrollView>
        }
        <Fab colorScheme="indigo" onPress={() => navigation.navigate("Random")} icon={<QuestionIcon />} />
    </View>
    )
}
