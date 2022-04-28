const formatDate = (unformattedDate) => {
    const formatter = new Intl.DateTimeFormat("en-us", {
        day: "numeric",
        month: "short",
        year: "numeric",
        timeZone: "GMT",
    });

    const date = new Date(unformattedDate);

    const formattedDate = formatter.format(date);

    return formattedDate;
};

export default formatDate;
