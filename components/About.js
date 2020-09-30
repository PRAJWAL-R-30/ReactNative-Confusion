import React, { Component } from 'react';
import { ScrollView, Text, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';

import { LEADERS } from '../shared/leaders';

function RenderHistory(props){
    return(
    <Card>
        <Card.Title>Our History</Card.Title>
            <Card.Divider />
            <Text style={{margin: 10}}>
                Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.
                The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.
            </Text>
    </Card>
    );
};

function renderLeaderItem ({item, index}) {
    return(
        <ListItem 
            onPress={() => navigate('DishDetail', { dishId: item.id})}
            leftAvatar={{ source: require('./images/alberto.png')}}dfx     
            >
            <ListItem.Content>
                <ListItem.Title >
                {item.name}
                </ListItem.Title>
                <ListItem.Subtitle>
                    {item.description}
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>)
}

function RenderLeader(props){
    return (
        <Card>
        <Card.Title>Corporate Leadership</Card.Title>
            <Card.Divider />
            
            <FlatList 
                data={props.item}
                renderItem={renderLeaderItem}
                keyExtractor={item => item.id.toString()}
            />
            
    </Card>
    );
}

class About extends Component {

    state = {
        leaders: LEADERS,
    }

    static navigationOptions = {
        title: 'About'
    }

    render () {
        return (
            <ScrollView>
                <RenderHistory />
                <RenderLeader 
                item={this.state.leaders} />
                
            </ScrollView>
        );
    }
}

export default About;