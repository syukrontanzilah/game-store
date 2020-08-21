import React from 'react'
import { StatusBar, Platform } from 'react-native'
import styled from 'styled-components';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Text from '../component/Text'
// import gameData from '../component/gameData'

// const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;


const Game = ({ route, navigation }) => {
    const { game } = route.params;
    const renderStars = () => {
        let stars = []
        for (let s = 1; s <= 5; s++) {
            stars.push(
                <Ionicons key={s} name="ios-star" size={13} color={Math.floor(game.rating) >= s ? "#819ee5" : "#434958"}
                    style={{ marginRight: 3 }} />
            )
        }
        return <Stars>
            {stars}
        </Stars>
    }
    return (
        <GameContainer>
            <StatusBar
            // barStyle="light-content"
            />
            <GameArtContainer>
                <GameArt source={game.cover} />
                <BackButton onPress={() => navigation.goBack()}>
                    <Ionicons name="ios-close" size={30} color="#ffffff" />
                </BackButton>
            </GameArtContainer>

            <GameInfoContainer>
                <GameThumbContainer>
                    <GameThumb source={game.cover} />
                </GameThumbContainer>
                <GameInfo>
                    <Text heavy medium>{game.title}</Text>
                    <Text gray>{game.teaser}</Text>
                </GameInfo>
                <Download>
                    <Ionicons name="md-cloud-download" size={24} color="white" />
                </Download>
            </GameInfoContainer>
            <GameStatsContainer>
                {renderStars()}
                <Text heavy gray>{game.rating}</Text>
                <Text bold gray>{game.category[0]}</Text>
                <Text bold gray>{game.age}</Text>
                <Text bold gray>Game of the day</Text>
            </GameStatsContainer>

            <ScreenShotsContainer>
                <ScreenShots horizontal showsHorizontalScrollIndicator={false}>
                    {game.screenshoots.map((screenshot, index) => {
                        return (
                            <ScreenShotContainer key={index}>
                                <ScreenImage source={screenshot} />
                            </ScreenShotContainer>
                        )
                    })}
                </ScreenShots>
            </ScreenShotsContainer>
            <Description medium gray>
                {game.description}
            </Description>
        </GameContainer>

    )
}

export default Game

const GameContainer = styled.ScrollView`
background-color: #343434;
flex:1
`
const GameArtContainer = styled.View`
position:relative;
`
const GameArt = styled.Image`
height:350px;
width:100%;
border-bottom-right-radius:32px;
border-bottom-left-radius:32px;
margin-top:0

`
const BackButton = styled.TouchableOpacity`
position: absolute;
top:10px;
left:18px
`
const GameInfoContainer = styled.View`
flex-direction:row;
align-items:center;
padding:16px 0;
margin: 8px 16px
`
const GameThumbContainer = styled.View`
shadow-color: #000000;
shadow-offset: 1px 1px;
shadow-opacity:0.5;
shadow-radius:2px
`
const GameThumb = styled.Image`
height:70px;
width:70px;
border-radius: 16px
`
const GameInfo = styled.View`
width:0;
flex-grow:1;
margin: 0 8px 0 16px
`
const Download = styled.TouchableOpacity`
background-color: #819ee5;
width:48px;
height:48px;
justify-content:center;
align-items: center;
border-radius: 20px
`
const GameStatsContainer = styled.View`
flex-direction: row;
 justify-content: space-between;
 margin: 0 16px
`
const Stars = styled.View`
flex-direction:row
`
const ScreenShotsContainer = styled.View`
margin:8px 0;
margin-horizontal:16px;

`
const ScreenShots = styled.ScrollView`
`
const ScreenShotContainer = styled.View`
padding:16px;
padding-right:0px;
shadow-color: #000000;
shadow-offset: 1px 1px;
shadow-opacity:0.5;
shadow-radius:5px
`
const ScreenImage = styled.Image`
height:180px;
width:280px;
border-radius:12px
`
const Description = styled(Text)`
margin: 0 16px;
line-height:22px;
margin-bottom:20px
`