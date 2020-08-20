import React from 'react'
import { StatusBar } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components'
import Text from '../component/Text';
import { categoryList } from '../component/Category';

const Home = () => {
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
                        <Category key={index}>
                            <CategoryName>
                                {category}
                            </CategoryName>
                        </Category>
                    )
                })}
            </Categories>

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
color: ${(props)=> (props.selected ? "#819ee5": "#9c9c9c")}
font-weight: ${(props)=> (props.selected ? "700" : "500")}
`


