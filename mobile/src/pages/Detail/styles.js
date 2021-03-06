import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center'
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
        marginTop: 48
    },

    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
        marginTop: 24
    },

    incidentValue: {
        fontSize: 16,
        color: '#737380',
        marginTop: 8,
    },

    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16
    },

    heroTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131A',
        lineHeight: 30 
    },

    heroDescription: {
        fontSize: 15,
        color: '#737380',
        marginTop: 16
    },

    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:16
    },

    action: {
        backgroundColor: '#E02041',
        width:'48%',
        borderRadius: 8,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },

    actionText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 15
    }



});