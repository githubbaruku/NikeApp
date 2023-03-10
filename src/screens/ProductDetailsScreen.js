import { Pressable, StyleSheet, Text, addToCart, View, FlatList, ScrollView, Image, useWindowDimensions } from "react-native";
import products from "../data/products";
import { Ionicons } from "@expo/vector-icons";

const ProductDetailsScreen = () => {
  const product = products[0];

  const {width} = useWindowDimensions();

  const addToCart = () => {
    console.warn('Add to cart');
  }

  return (
    <View>
      <ScrollView>
      {/* img carousel */}
      <FlatList 
        data={product.images}
          renderItem={({item}) => (
            <Image 
              source={{ uri: item}}
              style={{width, aspectRatio: 1}}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
      />
      <View style={{ padding: 20 }}>
      {/* title */}
<Text style={styles.title}>{product.name}</Text>
      {/* price */}
<Text style={styles.price}>${product.price}</Text>
      {/* description */}
<Text style={styles.description}>{product.description}</Text>
      </View>
    </ScrollView>
    {/* add tocart button */}
<Pressable style={styles.button} onPress={addToCart}>
  <Text style={styles.buttonText}>Add to cart</Text>
</Pressable>
    {/* nav icon */}
    <Pressable style={styles.icon}>
<Ionicons name="close" size={24} color='white' />
    </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
title: {
  fontSize: 34,
  fontWeight: "500",
  marginVertical: 10,
},
price: {
  fontWeight: "500",
  fontSize: 16,
  letterSpacing: 5,
},
description: {
  marginVertical: 10,
  fontSize: 18,
  lineHeight: 30,
  fontWeight: "300",
},
button: {
  backgroundColor: 'black',
  position: 'absolute',
  bottom: 30,
  width: "90%",
  alignSelf: 'center',
  alignItems: 'center',
  padding: 20,
  borderRadius: 100,
},
buttonText: {
  color: 'white',
  fontWeight: '500',
  fontSize: 16,
},
icon: {
  position: 'absolute',
  top: 50,
  right: 20,
  backgroundColor: '#000000AA',
  borderRadius: 50,
  padding: 5,
},
});

export default ProductDetailsScreen;