import React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
  TextInput,
  Alert,
  Platform,
} from 'react-native';
import {
  MaterialIcons,
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectAll: false,
      cartItemsIsLoading: false,
      cartItems: [
        /* Sample data from walmart */
        {
          itemId: '501436323',
          name: 'Arena para gato fresh 20 lb CATS PRIDE',
          thumbnailImage:
            'https://ferreteriavidri.com/images/items/large/33915.jpg',
          color: 'CATS PRIDE',
          qty: 1,
          salePrice: '12.99',
          checked: 1,
        },
        {
          itemId: '35031861',
          name: 'Casa plástica para perro raza grande RIMAX',
          thumbnailImage:
            'https://ferreteriavidri.com/images/items/large/112601.jpg',
          qty: 1,
          color: 'RIMAX',
          salePrice: '115.00',
          checked: 0,
        },
        {
          itemId: '801099131',
          name: 'Bolso para transportar mascota NUNBELL',
          thumbnailImage:
            'https://ferreteriavidri.com/images/items/large/142597_2.jpg?1667778086',
          qty: 1,
          color: 'NUNBELL',
          salePrice: '35.85',
          checked: 1,
        },
        {
          itemId: '42608079',
          name: 'Comida para perro premium 40 libras DIAMOND',
          thumbnailImage:
            'https://ferreteriavidri.com/images/items/large/403079.jpg',
          color: 'DIAMOND',
          qty: 1,
          salePrice: '55.90',
          checked: 0,
        },
        {
          itemId: '247714372',
          name: 'Collar antipulgas para perro mediano o grande BAYER',
          thumbnailImage:
            'https://ferreteriavidri.com/images/items/large/130133.jpg',
          qty: 1,
          color: 'BAYER',
          salePrice: '21.95',
          checked: 1,
        },
      ],
    };
  }

  selectHandler = (index, value) => {
    const newItems = [...this.state.cartItems]; // clone the array
    newItems[index]['checked'] = value == 1 ? 0 : 1; // set the new value
    this.setState({ cartItems: newItems }); // set new state
  };

  selectHandlerAll = (value) => {
    const newItems = [...this.state.cartItems]; // clone the array
    newItems.map((item, index) => {
      newItems[index]['checked'] = value == true ? 0 : 1; // set the new value
    });
    this.setState({
      cartItems: newItems,
      selectAll: value == true ? false : true,
    }); // set new state
  };

  quantityHandler = (action, index) => {
    const newItems = [...this.state.cartItems]; // clone the array

    let currentQty = newItems[index]['qty'];

    if (action == 'more') {
      newItems[index]['qty'] = currentQty + 1;
    } else if (action == 'less') {
      newItems[index]['qty'] = currentQty > 1 ? currentQty - 1 : 1;
    }

    this.setState({ cartItems: newItems }); // set new state
  };

  subtotalPrice = () => {
    const { cartItems } = this.state;
    if (cartItems) {
      return cartItems.reduce(
        (sum, item) =>
          sum + (item.checked == 1 ? item.qty * item.salePrice : 0),
        0
      );
    }
    return 0;
  };

  render() {
    const styles = StyleSheet.create({
      centerElement: { justifyContent: 'center', alignItems: 'center' },
    });

    const { cartItems, cartItemsIsLoading, selectAll } = this.state;

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#f6f6f6',
          paddingTop: Platform.OS === 'android' ? 35 : 0,
        }}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#fff',
            marginBottom: 10,
          }}>
          <View style={[styles.centerElement, { width: 50, height: 50 }]}>
            <Ionicons name="ios-cart" size={25} color="#000" />
          </View>
          <View style={[styles.centerElement, { height: 50 }]}>
            <Text style={{ fontSize: 18, color: '#000' }}>Carrito</Text>
          </View>
        </View>

        {cartItemsIsLoading ? (
          <View style={[styles.centerElement, { height: 300 }]}>
            <ActivityIndicator size="large" color="#ef5739" />
          </View>
        ) : (
          <ScrollView>
            {cartItems &&
              cartItems.map((item, i) => (
                <View
                  key={i}
                  style={{
                    flexDirection: 'row',
                    backgroundColor: '#fff',
                    marginBottom: 2,
                    height: 120,
                  }}>
                  <View style={[styles.centerElement, { width: 60 }]}>
                    <TouchableOpacity
                      style={[styles.centerElement, { width: 32, height: 32 }]}
                      onPress={() => this.selectHandler(i, item.checked)}>
                      <Ionicons
                        name={
                          item.checked == 1
                            ? 'ios-checkmark-circle'
                            : 'ios-checkmark-circle-outline'
                        }
                        size={25}
                        color={item.checked == 1 ? '#0faf9a' : '#aaaaaa'}
                      />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      flexGrow: 1,
                      flexShrink: 1,
                      alignSelf: 'center',
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        /*this.props.navigation.navigate('ProductDetails', {productDetails: item})*/
                      }}
                      style={{ paddingRight: 10 }}>
                      <Image
                        source={{ uri: item.thumbnailImage }}
                        style={[
                          styles.centerElement,
                          { height: 60, width: 60, backgroundColor: '#eeeeee' },
                        ]}
                      />
                    </TouchableOpacity>
                    <View
                      style={{
                        flexGrow: 1,
                        flexShrink: 1,
                        alignSelf: 'center',
                      }}>
                      <Text numberOfLines={1} style={{ fontSize: 15 }}>
                        {item.name}
                      </Text>
                      <Text numberOfLines={1} style={{ color: '#8f8f8f' }}>
                        {item.color ? 'Marca: ' + item.color : ''}
                      </Text>
                      <Text
                        numberOfLines={1}
                        style={{ color: '#333333', marginBottom: 10 }}>
                        ${item.qty * item.salePrice}
                      </Text>
                      <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                          onPress={() => this.quantityHandler('less', i)}
                          style={{ borderWidth: 1, borderColor: '#cccccc' }}>
                          <MaterialIcons
                            name="remove"
                            size={22}
                            color="#cccccc"
                          />
                        </TouchableOpacity>
                        <Text
                          style={{
                            borderTopWidth: 1,
                            borderBottomWidth: 1,
                            borderColor: '#cccccc',
                            paddingHorizontal: 7,
                            paddingTop: 3,
                            color: '#bbbbbb',
                            fontSize: 13,
                          }}>
                          {item.qty}
                        </Text>
                        <TouchableOpacity
                          onPress={() => this.quantityHandler('more', i)}
                          style={{ borderWidth: 1, borderColor: '#cccccc' }}>
                          <MaterialIcons name="add" size={22} color="#cccccc" />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              ))}
          </ScrollView>
        )}

        {!cartItemsIsLoading && (
          <View
            style={{
              backgroundColor: '#fff',
              borderTopWidth: 2,
              borderColor: '#f6f6f6',
              paddingVertical: 5,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={[styles.centerElement, { width: 60 }]}></View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={[styles.centerElement, { width: 60 }]}>
                <TouchableOpacity
                  style={[styles.centerElement, { width: 32, height: 32 }]}
                  onPress={() => this.selectHandlerAll(selectAll)}>
                  <Ionicons
                    name={
                      selectAll == true
                        ? 'ios-checkmark-circle'
                        : 'ios-checkmark-circle-outline'
                    }
                    size={25}
                    color={selectAll == true ? '#0faf9a' : '#aaaaaa'}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flexGrow: 1,
                  flexShrink: 1,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text>Seleccionar Todo</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingRight: 20,
                    alignItems: 'center',
                  }}>
                  <Text style={{ color: '#8f8f8f' }}>Total: </Text>
                  <Text>${this.subtotalPrice().toFixed(2)}</Text>
                </View>
              </View>
            </View>
          </View>
        )}
      </View>
    );
  }
}