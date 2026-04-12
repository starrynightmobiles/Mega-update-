import { View, Text, Button } from "react-native"
import { startPayment } from "../services/payment"

export default function CheckoutScreen() {
  const total = 120

    const handlePay = async () => {
        try {
              await startPayment("customer@email.com", total)
                  } catch (err) {
                        alert("Payment failed")
                            }
                              }

                                return (
                                    <View style={{ padding: 20 }}>
                                          <Text>Total: ${total}</Text>

                                                <Button title="Pay Now 💳" onPress={handlePay} />
                                                    </View>
                                                      )
                                                      }