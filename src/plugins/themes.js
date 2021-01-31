import { colors } from 'vuetify/lib';

const defaultTheme = {
    primary: '#C4A169',
    secondary: '#583819',
    softBlack: '#555555',
    accent: colors.cyan.accent1,
}

const events = [
    {
        eventName: "Xmas",
        timeStamp: "2020-12-25",
        colors: {
            primary: '#33743B',
            secondary: '#C92629',
            softBlack: '#5B362C',
            accent: '#9F863F',
        }
    },
    {
        eventName: "Halloween",
        timeStamp: '2020-10-31',
        colors: {
            primary: '#000000',
            secondary: '#FF6600',
            softBlack: '#663399',
            accent: '#FFBB00',
        }
    },
    {
        eventName: "Valentine",
        timeStamp: '2020-2-14',
        colors: {
            primary: '#CA3C3C',
            secondary: '#664743',
            softBlack: '#E4D5CC',
            accent: '#959B63',
        }
    },
    {
        eventName: "Tanabata",
        timeStamp: '2020-7-7',
        colors: {
            primary: '#4D4398',
            secondary: '#136EAB',
            softBlack: '#5D87B7',
            accent: '#61C1BE',
        }
    },
    {
        eventName: "NewYear",
        timeStamp: '2020-1-1',
        colors: {
            primary: '#F4B600',
            secondary: '#DD2720',
            softBlack: '#A38046',
            accent: '#2A7135',
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