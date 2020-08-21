import React from 'react'
import { StatusBar } from 'react-native'
import styled from 'styled-components'
import Text from '../component/Text'
import { games } from '../component/gameData';
import Entypo from 'react-native-vector-icons/Entypo'


const Profile = () => {
    return (
        <Container>
            <StatusBar />

            <AvatarContainer>
                <Avatar source={require('../asset/icon/person.jpg')} />
                <Text large bold center>Azmi Furqon</Text>
            </AvatarContainer>
            <Badge>
                <Text small heavy>Pro Player</Text>
            </Badge>
            <Stats>
                <Stat>
                    <Text large heavy>250 <Text gray>Games</Text></Text>
                </Stat>
                <Stat>
                    <Text large heavy>3 <Text gray>Purchases</Text></Text>
                </Stat>
            </Stats>
            <Text large center>Purchased Games</Text>
            <Games
                showsVerticalScrollIndicator={false}
                data={games}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => {
                    return <Game>
                        <GameImage source={item.cover} />
                        <Info>
                            <Text bold>{item.title}</Text>
                            <Text small gray>{Math.floor(Math.random() * 1000) + 1} Sales</Text>
                        </Info>
                        <Text heavy purple>Rp. {Math.floor(Math.random() * 500000) + 1}</Text>
                    </Game>
                }}
            />
            <Account>
                <Setting>
                    <Entypo name="cog" color="#ffffff" size={24} />
                </Setting>
                <Logout>
                    <Text heavy>Logout</Text>
                </Logout>
            </Account>

        </Container>
    )
}

export default Profile


const Container = styled.View`
flex:1;
background-color: #343434
`
const AvatarContainer = styled.View`
align-items:center;
margin:34px 0 16px 0
`
const Avatar = styled.Image`
height:100px;
width:100px;
margin-bottom: 16px;
border-radius:50px;
`
const Badge = styled.View`
background-color: #819ee5;
align-self: center;
padding: 4px 12px;
border-radius: 8px
`
const Stats = styled.View`
flex-direction:row;
align-items: center;
align-self:center;
margin:32px 0
`
const Stat = styled.View`
margin : 0 16px`

const Games = styled.FlatList`
margin: 32px 16px 0 16px;
`
const Game = styled.View`
flex-direction:row;
align-items:center;
margin-bottom:16px
`
const GameImage = styled.Image`
height:54px;
width:54px;
border-radius:12px;
`
const Info = styled.View`
flex:1;
margin: 0 16px;
`
const Account = styled.View`
margin:32px 16px;
flex-direction:row
`
const Setting = styled.TouchableOpacity`
background-color: #819ee5;
padding:10px;
border-radius:8px;
`
const Logout = styled.TouchableOpacity`
flex:1;
background-color: #404040;
border-radius:8px;
align-items:center;
justify-content: center;
margin-left:12px
`
