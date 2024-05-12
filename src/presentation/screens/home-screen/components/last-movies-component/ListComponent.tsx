import { FlatList, Text, View } from "react-native"
import { CardItem } from "../../../components/CardItem"

interface Item {
  id: any
  urlImg: any
}

interface Props {
  data: Item[],
  title: any,
  side?: boolean
}
export const ListComponent = ({data, title, side}: Props) => {
  return (
    <View style={{top: 10}}>
        <Text style={{textAlign: (side === true) ? 'left' : 'right', fontSize: 30, color: '#fff', right: (side === true) ? -10 : 10, fontWeight: 600}}>{title}</Text>
        <FlatList
          horizontal
          data={data}
          keyExtractor={item => item.id}
          renderItem={(item) => <CardItem urlImg={item.item.urlImg}/>}
        >

        </FlatList>
      </View>
  )
}
