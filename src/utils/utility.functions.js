export const InitialsCapital = (text) => {
    const title = text
        .split(" ")
        .map((item) => {
            return `${item.substr(0, 1).toUpperCase()}${item
                .substr(1)
                .toLowerCase()}`;
        })
        .join(" ");
    return title;
}