import Colors from '@/data/Colors'
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

type ButoonProps = {
    text: string,
    onPress: () => void,    
}

export default function Button({text, onPress}: ButoonProps) {
  return (
     <TouchableOpacity
     onPress={onPress} 
     style={{
                    padding: 15,
                    backgroundColor: Colors.PRIMARY,
                    marginTop: 10,
                    borderRadius: 10,

                }}>
                    <Text style={{
                        fontSize: 18,
                        textAlign: 'center',
                        color: Colors.WHITE
                    }}>{text}
                    </Text>

                </TouchableOpacity>
  )
}