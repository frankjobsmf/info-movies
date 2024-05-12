import { Image, StyleSheet, Text, View } from "react-native"

interface Props {
    urlImg: any
}

export const CardItem = ({urlImg}: Props) => {
    return (
        <View style={styles.cardContainer}>
            <Image
                style={styles.cardImg}
                source={{
                    uri: urlImg
                }} />
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        margin: 10,
        width: 250,
        marginHorizontal: 5
    },
    cardImg: {
        width: '100%',
        height: 170,
        borderRadius: 10
    }
})