import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { DISHES } from '../shared/dishes';

class Menu extends Component {

    state = {
        dishes: DISHES,
    };

    static navigationOptions = {
        title: 'Menu'
    }

    

    render () {
        const renderMenuItem = ({item, index}) => {
            return(
                <ListItem 
                    onPress={() => navigate('DishDetail', { dishId: item.id})}
                    leftAvatar={{ source: require('./images/uthappizza.png')}}
                    >
                    <ListItem.Content>
                        <ListItem.Title >
                        {item.name}
                        </ListItem.Title>
                        <ListItem.Subtitle>
                            {item.description}
                        </ListItem.Subtitle>
                    </ListItem.Content> 
                     {/* key={index}
                     title={item.name}
                     subtitle={item.description}
                     hideChevron={true}
                     onPress={() => navigate('DishDetail', { dishId: item.id})}
                     leftAvatar={{ source: require('./images/uthappizza.png')}} */}
                </ListItem>
            )
        }

        const { navigate } = this.props.navigation;

        return(
            <FlatList 
                data={this.state.dishes}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
            />
        )
    }

    
}

export default Menu;