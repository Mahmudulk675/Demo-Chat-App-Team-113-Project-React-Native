import React, { useLayoutEffect } from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from 'react-native';
import {AntDesign, SimpleLineIcons} from '@expo/vector-icons'
import { Avatar } from 'react-native-elements'
import CustomListItem from '../Components/CustomListItem';
import {auth, db} from '../firebase.config';

export default function HomeScreen({navigation}) {
    const signOutUser = () => {
        auth.signOut()
        .then(() => {
            navigation.replace('Login')
        })
    }
    // console.log('my auth', auth);
     useLayoutEffect(()=>{
         navigation.setOptions({
             title: 'Signal',
             headerStyle: { backgroundColor: '#fff'},
             headerTitleStyle: {color: 'black'},
             headerTintColor:'black',
             headerLeft: () => (
                 <View style={{marginLeft: 20, }}>
                     <TouchableOpacity activeOpacity={0.5} onPress={signOutUser}>
                        <Avatar rounded source={{uri: auth?.currentUser?.photoURL || "https://i.pravatar.cc/300"}}/>
                     </TouchableOpacity>
                 </View>
             ),
             headerRight: () => (
                <View 
                    style={{ 
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: 80,
                        marginRight: 20,
                    }}
                >
                <TouchableOpacity>
                    <AntDesign name="camera" size={24} color="black"/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <SimpleLineIcons onPress={() =>navigation.navigate("AddChatScreen")} name="pencil" size={24} color="black"/>
                </TouchableOpacity>

               </View> 
             ),
         })
     },[navigation])
    return (
        <SafeAreaView>
            <ScrollView>
                <CustomListItem></CustomListItem>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
