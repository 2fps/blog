const PAGE_CONTETNS = 'PAGE_CONTETNS';

export function pageContent (title, time, frequency, praise, acronym) {
    return {
        type: PAGE_CONTETNS,
        newCon: {title, time, frequency, praise, acronym}
    }
};