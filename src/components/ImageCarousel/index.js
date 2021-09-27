import React, { useState } from "react";

import { FlatList, Image, StyleSheet, View, useWindowDimensions, ImageStore } from "react-native";



const ImageCarousel = ({images}) =>{
    const [activeIndex, setActiveIndex] = useState(0)

    const windowWidth = useWindowDimensions().width;

    const onViewRef = React.useRef(({viewableItems, changed})=> {
        setActiveIndex(changed[0].index)
        // Use viewable items in state or as intended
    })
    const viewConfigRef = React.useRef( 
        {
             viewAreaCoveragePercentThreshold: 50 
        }
    )
  

    return(
        <View style={styles.root}>
            <FlatList
                data={images}
                horizontal
                renderItem={({item})=>{
                    return(
                        <Image
                            style={[styles.image, {width: windowWidth - 40}]}
                            source={{uri: item}}
                        />
                    )
                }}
                onViewableItemsChanged={onViewRef.current}
                viewabilityConfig={viewConfigRef.current}
                showsHorizontalScrollIndicator={false}
                snapToInterval={windowWidth - 20}
                snapToAlignment={'center'}
                decelerationRate={'fast'}
                // keyExtractor={({item, index})=>index}
            />
            <View style={styles.dotContainer}>
                {
                    images.map((image, index)=>{
                        return(
                            <View 
                            key={index}
                            style={[
                                styles.dot, 
                                {
                                    backgroundColor: index === activeIndex ? '#696969' : '#c9c9c9'   
                                }
                            ]}>
                                
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        margin:10,
        height: 250,
        resizeMode: 'contain',
        // backgroundColor :'red'
    },
    dotContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },  
    dot:{
        width: 10,
        height: 10,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'lightgray',
        margin: 5,
        
    }
})

export default ImageCarousel