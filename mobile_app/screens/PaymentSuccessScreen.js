import { View, Text, Button } from "react-native"

export default function PaymentSuccessScreen({ navigation }) {
  return (
      <View style={{
            flex: 1,
                  justifyContent: "center",
                        alignItems: "center"
                            }}>
                                  <Text style={{ fontSize: 24 }}>✅ Payment Successful</Text>
                                        <Text>Your order is being processed</Text>

                                              <Button
                                                      title="Track Order 📦"
                                                              onPress={() => navigation.navigate("Orders")}
                                                                    />
                                                                        </View>
                                                                          )
                                                                          }