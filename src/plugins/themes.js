import { colors } from 'vuetify/lib';

const defaultTheme = {
    hojichaLatte: '#C4A169',
    chocolate: '#583819',
    softBlack: '#555555',
    accent: colors.cyan.accent1,
}

const events = [
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


export function getThemeByEvent() {
    const today = new Date();
    const todaysEvent = events.find((event) => {
        const eventDay = new Date(event.timeStamp);
        return eventDay.getMonth() === today.getMonth()
            && eventDay.getDate() === today.getDate();
    });
    if(todaysEvent) {
        return todaysEvent.colors;
    }
    return defaultTheme;
}