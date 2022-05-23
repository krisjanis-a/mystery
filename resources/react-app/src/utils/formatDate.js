const formatDate = (unformattedDate) => {
    // console.log(unformattedDate);
    return;
    const formatter = new Intl.DateTimeFormat("en-us", {
        day: "numeric",
        month: "short",
        year: "numeric",
        timeZone: "GMT",
    });

    const date = new Date(unformattedDate);

    const formattedDate = formatter.format(date);
    // console.log(date);
    // console.log(formattedDate);

    return formattedDate;
};

export default formatDate;
