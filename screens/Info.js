import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const fetchData = async () => {
  try {
    const response = await axios
      .get("https://labipz.000webhostapp.com/data.json")
      .then((res) => res["data"]);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const Info = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataAndSetData = async () => {
      const fetchedData = await fetchData();
      setData(fetchedData["data"]);
    };
    fetchDataAndSetData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <NewsBlock
            imageUrl={item.url}
            title={item.title}
            description={item.description}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={1}
      />
    </View>
  );
};

const NewsBlock = ({ imageUrl, title, description }) => {
  return (
    <View style={styles.newsBlock}>
      <Image source={{ uri: imageUrl }} style={styles.newsImage} />
      <View style={styles.newsContent}>
        <View style={styles.newsContent}>
          <Text style={styles.newsTitle}>{title}</Text>
        </View>
        <View style={styles.newsContent}>
          <Text style={styles.newsDescription} numberOfLines={3}>
            {description}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    height: 150,
  },
  touchable: {
    flex: 1,
  },

  newsBlock: {
    flexDirection: "column",
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: "#224A98",
    borderRadius: 10,
  },
  touchable: {
    flex: 1,
  },
  newsImage: {
    marginTop: 10,
    width: 230,
    height: 140,
    marginLeft: 5,
    borderRadius: 10,
    backgroundColor: "#cfd0cf",
  },
  newsContent: {
    marginTop: 4,
    paddingBottom: 5,
    marginLeft: 2,
    flex: 1,
  },
  newsTitle: {
    fontSize: 12,

    alignItems: "flex-start",
    textAlign: "center",
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  newsDescription: {
    fontSize: 10,
    textAlign: "center",
    color: "#FFFFFF",
  },
});

export default Info;
