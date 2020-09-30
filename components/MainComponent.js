import React, { Component } from 'react';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { Text, View, Platform, Image, StyleSheet, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';

import Menu from './MenuComponent';
import DishDetail from './DishDetail';
import Home from './HomeComponent';
import Contact from './Contact';
import About from './About';

const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu,
    navigationOptions: ({ navigation }) => ({
        headerLeft: <Icon name='menu' size={24} 
            color='white'
            onPress={() => navigation.toggleDrawer()} />
    }) },
    DishDetail: { screen: DishDetail },
}, {
    initialRouteName: 'Menu',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#512DA8',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff',
        }
    }
});

const HomeNavigator = createStackNavigator({
    Home: { screen: Home }
}, {
    defaultNavigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: '#512DA8',
        },
        headerLeft: <Icon name='menu' size={24} 
            color='white'
            onPress={() => navigation.toggleDrawer()} />,
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff',
        }
    })
});

const ContactNavigator = createStackNavigator({
    Contact: { screen: Contact }
}, {
    defaultNavigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: '#512DA8',
        },
        headerLeft: <Icon name='menu' size={24} 
            color='white'
            onPress={() => navigation.toggleDrawer()} />,
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff',
        }
    })
});

const AboutNavigator = createStackNavigator({
    About: { screen: About }
}, {
    defaultNavigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: '#512DA8',
        },
        headerLeft: <Icon name='menu' size={24} 
            color='white'
            onPress={() => navigation.toggleDrawer()} />,
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff',
        }
    })
});

const CustomDrawerContentComponent = (props) => (
    <ScrollView>
        <SafeAreaView style={styles.container}
            forceInset={{ top: 'always', horizontal: 'never' }}>
                <View style={styles.drawerHeader}>
                    <View style={{flex: 1}}>
                        <Image source={require('./images/logo.png')}
                        style={styles.drawerImage} />
                    </View>
                    <View style={{flex: 2}}>
                        <Text style={styles.drawerHeaderText}>
                            Ristorante Con Fusion
                        </Text>
                    </View>
                </View>

                <DrawerItems {...props} />     
        </SafeAreaView>
    </ScrollView>
);

const MainNavigator = createDrawerNavigator({
    Home: {
        screen: HomeNavigator,
        navigationOptions: {
            title: 'Home',
            drawerLabel: 'Home',
            drawerIcon: ({ tintColor }) => (
                <Icon 
                    name='home'
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                    />
            )
        }
    },
    "About Us": {
        screen: AboutNavigator,
        navigationOptions: {
            title: 'About',
            drawerLabel: 'About',
            drawerIcon: ({ tintColor }) => (
                <Icon 
                    name='info'
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                    />
            )
        }
    },
    Menu: {
        screen: MenuNavigator,
        navigationOptions: {
            title: 'Menu',
            drawerLabel: 'Menu',
            drawerIcon: ({ tintColor }) => (
                <Icon 
                    name='list'
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                    />
            )
        }
    },
    "Contact Us": {
        screen: ContactNavigator,
        navigationOptions: {
            title: 'Contact',
            drawerLabel: 'Contact',
            drawerIcon: ({ tintColor }) => (
                <Icon 
                    name='address-card'
                    type='font-awesome'
                    size={22}
                    color={tintColor}
                    />
            )
        }
    },
    
}, {
    drawerBackgroungColor: '#D1C4E9',
    contentComponent: CustomDrawerContentComponent,
});

//const stack = createStackNavigator();

const MainContainer = createAppContainer(MainNavigator);

class Main extends Component {

    render() {
        return(
            <View style={{flex: 1}}>
                <MainContainer />  
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    drawerHeader: {
        backgroundColor: '#512DA8',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
    },
    drawerHeaderText: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
    drawerImage: {
        margin: 10,
        width: 80,
        height: 60,
    }
})

export default Main;


