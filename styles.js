import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "beige",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    margin: 8,
    alignSelf: "center",
    borderRadius: 8,
    borderColor: "#807060",
    borderWidth: 1,
    width: 320,
    backgroundColor: "#fff",
  },
  cardImage: {
    width: 318,
    height: 200,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 9,
  },
  cardTitle: {
    fontSize: 23,
    fontWeight: "600",
    padding: 4,
  },
  cardSubtitle: {
    fontSize: 16,
    padding: 4,
  },
  detailsImage: {
    width: "100%",
    height: 260,
  },
});

export default styles;
