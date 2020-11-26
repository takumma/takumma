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
            timeStamp: "2020-12-25",
            colors: {
                hojichaLatte: '#33743B',
                chocolate: '#C92629',
                softBlack: '#5B362C',
                accent: '#9F863F',
            }
        },
        {
            eventName: "Halloween",
            timeStamp: '2020-10-31',
            colors: {
                hojichaLatte: '#000000',
                chocolate: '#FF6600',
                softBlack: '#663399',
                accent: '#FFBB00',
            }
        },
    ]
}


export function getEventOrDefaultTheme() {
    const today = new Date('2020-12-25');
    const isEvent = themes.events.find((event) => {
        const eventDay = new Date(event.timeStamp);
        return eventDay.getMonth() === today.getMonth()
            || eventDay.getDate() === today.getDate();
    });
    if(isEvent) {
        return isEvent.colors;
    }
    return themes.default;
}