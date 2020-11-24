import { colors } from 'vuetify/lib';

export const themes = {
    default: {
        hojichaLatte: '#C4A169',
        chocolate: '#583819',
        softBlack: '#555555',
        accent: colors.cyan.accent1,
    },
    events: [
        {
            eventName: "Xmas",
            timeStamp: "12/25",
            colors: {
                hojichaLatte: '#C4A169',
                chocolate: '#583819',
                softBlack: '#555555',
                accent: colors.cyan.accent1,
            }
        },{
            eventName: "Halloween",
            timeStamp: '10/31',
            colors: {
                hojichaLatte: '#000000',
                chocolate: '#FF6600',
                softBlack: '#663399',
                accent: '#FFBB00',
            }
        },
    ]
}