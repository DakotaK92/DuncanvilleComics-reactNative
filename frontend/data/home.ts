export type MessageType = {
    id: number;
    date: string;
    title: string;
    shipping: string;
    backgroundImage: any;
    logo: any;
};

export const messages: MessageType[] = [
    {
        id: 1,
        date: "FIRST BOOK ENDS 12/12 5:00PM",
        title: "CAPE & COWL: LOW GRADE GOLDEN AGE GOLD",
        shipping: "SHIPS DIRECT FROM STORE",
        backgroundImage: require("../assets/images/background-images/batman-wallpaper.jpg"),
        logo: require("../assets/images/logos/cap-&-cowl.png"),
    },
    {
        id: 2,
        date: "FIRST BOOK ENDS 12/12 5:00PM",
        title: "CAPE & COWL: LOW GRADE GOLDEN AGE GOLD",
        shipping: "SHIPS DIRECT FROM STORE",
        backgroundImage: require("../assets/images/background-images/batman-wallpaper.jpg"),
        logo: require("../assets/images/logos/cap-&-cowl.png"),
    },
];