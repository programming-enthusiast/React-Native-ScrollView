import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback
} from "react-native";

import Card from "./Card";
import ExpandedCard from "./ExpandedCard";

export default class App extends React.Component {
  state = { yOffset: null, xOffset: null, selectedCard: null };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Expanding ScrollView Example</Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
            <Card
              key={i}
              id={i}
              selectCard={(px, py, id) =>
                this.setState({ yOffset: py, xOffset: px, selectedCard: id })
              }
            />
          ))}
        </ScrollView>

        {this.state.selectedCard && (
          <ExpandedCard
            yOffset={this.state.yOffset}
            xOffset={this.state.xOffset}
            unselectCard={() => this.setState({ selectedCard: null })}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#05386b"
  },
  title: {
    height: 60,
    backgroundColor: "#edf5e1",
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#05386b"
  },
  list: {
    alignItems: "center",
    paddingTop: 20
  }
});
