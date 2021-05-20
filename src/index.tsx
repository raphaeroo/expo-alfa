import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import SyntaxHighlighter from 'react-native-syntax-highlighter'
// import { darcula } from 'react-syntax-highlighter/styles/prism/';
import { jsx } from 'react-syntax-highlighter/dist/languages/prism';

const componente = ` <View style={styles.container}>
<ViewTable backgroundColor="pink" width="20%">
  <TouchableOpacity
    onPress={() => {
      console.log('SALVE')
    }}>
    <Text>Item 1</Text>
  </TouchableOpacity>
</ViewTable>
<ViewTable backgroundColor="white" width="40%">
  <View style={styles.container}>
  <ViewTable backgroundColor="pink" width="20%">
    <TouchableOpacity
      onPress={() => {
        console.log('SALVE')
      }}>
      <Text>Item 1</Text>
    </TouchableOpacity>
  </ViewTable>
  <ViewTable backgroundColor="white" width="40%" />
  <ViewTable backgroundColor="white" width="40%">
    <Text>
      {componente}
    </Text>
  </ViewTable>
</View>
</ViewTable>
<ViewTable backgroundColor="white" width="40%">
<SyntaxHighlighter 
  language='javascript' 
  style={dracula}
  highlighter={"hljs"}
>
  {componente}
</SyntaxHighlighter>
</ViewTable>
</View>`

interface ViewProps {
  backgroundColor: string
  width: string | number
}

const ViewTable: React.FC<ViewProps> = ({ children, backgroundColor, width }) => (
  <View
    style={{
      width,
      backgroundColor,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderRightColor: 'black'
    }}>
    <View style={{ height: 200, justifyContent: 'center', alignItems: 'center' }}>
      <Text>MENUZERA</Text>
    </View>
    {children}
  </View>
)

export function App() {
  return (
    <View style={styles.container}>
      <ViewTable backgroundColor="pink" width="20%">
        <TouchableOpacity
          onPress={() => {
            console.log('SALVE')
          }}>
          <Text>Item 1</Text>
        </TouchableOpacity>
      </ViewTable>
      <ViewTable backgroundColor="white" width="40%">
        <View style={styles.container}>
        <ViewTable backgroundColor="pink" width="20%">
          <TouchableOpacity
            onPress={() => {
              console.log('SALVE')
            }}>
            <Text>Item 1</Text>
          </TouchableOpacity>
        </ViewTable>
        <ViewTable backgroundColor="white" width="40%" />
        <ViewTable backgroundColor="white" width="40%">
          <Text>
            {componente}
          </Text>
        </ViewTable>
      </View>
      </ViewTable>
      <ViewTable backgroundColor="white" width="40%">
      <SyntaxHighlighter 
        language='react'
        style={jsx}
        highlighter="prism"
      >
        {componente}
      </SyntaxHighlighter>
      </ViewTable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    flexDirection: 'row'
  }
})
