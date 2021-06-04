import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar , ListItem } from 'react-native-elements'


export default function CustomListItem({id, chatName, enterChat}) {
    return (
        <ListItem>
            <Avatar
             rounded
             source={{ 
                 uri:"https://i.pravatar.cc/300"
             }}
            />
            <ListItem.Content>
                <ListItem.Title style={{fontWeight:"800"}}>
                    My box
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} 
                ellipsizeMode="tail"
                >
                    Lorem ipsum dolor sit Lorem ipsum dolor sit. amet consectetur adipisicing elit. Deleniti, perferendis.
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

const styles = StyleSheet.create({})
