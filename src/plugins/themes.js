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
    {
        eventName: "Valentine",
        timeStamp: '2020-2-14',
        colors: {
            hojichaLatte: '#CA3C3C',
            chocolate: '#664743',
            softBlack: '#E4D5CC',
            accent: '#959B63',
        }
    },
    {
        eventName: "Tanabata",
        timeStamp: '2020-7-7',
        colors: {
            hojichaLatte: '#4D4398',
            chocolate: '#136EAB',
            softBlack: '#5D87B7',
            accent: '#61C1BE',
        }
    },
    {
        eventName: "NewYear",
        timeStamp: '2020-1-1',
        colors: {
            hojichaLatte: '#F4B600',
            chocolate: '#DD2720',
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