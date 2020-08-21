import React from 'react'
import { StatusBar } from 'react-native'
import styled from 'styled-components'
import Entypo from 'react-native-vector-icons/Entypo'
import {games} from '../component/gameData'
import Text from '../component/Text'

const Live = () => {
    return (
        <Container>
            <StatusBar
            />

            <Header>
                {/* <Text large bold>Streaming</Text> */}
                <SearchContainer>
                    <Search
                        placeholder="Search live streaming or games ..."
                        placeholderTextColor="#838383" />
                    <SearchIcon>
                        <Entypo name="magnifying-glass" size={24} color="#838383" />

                    </SearchIcon>
                </SearchContainer>
            </Header>
            <SectionContainer>
                <Text style={{marginLeft:16}}>Popular Games</Text>
                <PopularGames horizontal
                showsHorizontalScrollIndicator={false}>
                    {
                        games.map((game, index) => {
                            return (
                                <PopularGameContainer key={index}>
                                    <PopularGame source={game.cover}/>
                                </PopularGameContainer>
                            )
                        })
                    }
                </PopularGames>
            </SectionContainer>
        </Container>

    )
}

export default Live

const Container = styled.View`
background-color: #343434;
flex:1;
`
const Header = styled.View`
margin:32px 16px 0 16px;
`
const SearchContainer = styled.View`
position: relative;
margin 32px 8px;
background-color: #404040;
border-radius:100px;
justify-content: center;

`
const Search = styled.TextInput`
padding: 10px 54px 10px 32px;
color: #c6c6c6
`
const SearchIcon = styled.TouchableOpacity`
position:absolute;
right:16px
`
const SectionContainer = styled.View`
margin-top: 16px;
margin-left:0px;

`
const PopularGames = styled.ScrollView`
margin-top:10;
padding-horizontal:16px
`
const PopularGameContainer = styled.View`
width:80px;
margin-right:20px;

`

const PopularGame = styled.Image`
height:80px;
width:80px;
border-radius:12px
`