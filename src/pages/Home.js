import React, { useState, useRef } from 'react'
import { StatusBar } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components'
import Text from '../component/Text';
import { categoryList } from '../component/Category';
import { games } from '../component/gameData';


const Home = () => {
    const [selectCategory, setSelectCategory] = useState("All")
    const gameRef= useRef()
    const changeCategory = (category) => {
        gameRef.current.scrollToOffset({x:0, y:0})
        setSelectCategory(category)
    }
    const GameItem = (game) => {
        return (
            <Game>
                <GameCover source={game.cover} />
                <GameInfo backgroundColor={game.backgroundColor}>
                    <GameImage source={game.cover} />
                    <GameTitle>
                        <Text medium bold>{game.title}</Text>
                        <Text small>{game.teaser}</Text>
                    </GameTitle>
                </GameInfo>
            </Game>
        )
    }
    return (
        <Container>
            <StatusBar
                // barStyle="dark-content"
                // barStyle="default"
                barStyle="light-content"
                backgroundColor="#343434"
            />
            <Header>
                <Text large >
                    Hallo{" "}
                    <Text large heavy>
                        GAMEUI
                    </Text>
                    {`\n`}
                    <Text large bold>Best games for today</Text>
                </Text>
                <Avatar source={require('../asset/icon/person.jpg')} ></Avatar>
            </Header>

            <Categories
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {categoryList.map((category, index) => {
                    return (
                        <Category
                            onPress={() => changeCategory(category)}
                            key={index}>
                            <CategoryName
                                selected={selectCategory === category ? true : false}
                            >
                                {category}
                            </CategoryName>
                            {selectCategory === category && <CategoryDot />}
                        </Category>
                    )
                })}
            </Categories>
            <Games
                data={games.filter(game =>{
                    return game.category.includes(selectCategory) || selectCategory === "All"
                })}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => GameItem(item)}
                ref={gameRef}
            />

        </Container>
    )
}

export default Home

const Container = styled.SafeAreaView`
flex:1;
background-color: #343434
`
const Header = styled.View`
flex-direction: row;
align-items: center;
justify-content: space-between;
margin: 16px 32px 0 32px;
`
const Avatar = styled.Image`
width: 40px;
height:40px;
border-radius: 40px
`;

const Categories = styled.ScrollView`
margin-top: 32px;
flex-grow: 0;
`
const Category = styled.TouchableOpacity`
align-items: center;
margin: 0 16px;
height: 32px
`
const CategoryName = styled(Text)`
color: ${(props) => (props.selected ? "#819ee5" : "#9c9c9c")}
font-weight: ${(props) => (props.selected ? "700" : "500")}
`
const CategoryDot = styled.View`
width:5px;
height:5px;
border-radius: 3px;
background-color: #819ee5;
`
const Games = styled.FlatList`
margin-top:30px;
flex:1;
`
const Game = styled.TouchableOpacity`
margin-bottom:32px;
`

const GameCover = styled.Image`
height: 300px;
width:100%
`
const GameInfo = styled.View`
margin: -50px 16px 0 16px;
padding:16px;
border-radius:12px;
flex-direction: row;
align-items: center;
`

const GameImage = styled.Image`
width: 50px;
height:40px;
border-radius: 8px
`

const GameTitle = styled.View`
margin: 0 18px;
flex:1
`



