const msToTime = (t) => {
    const ms = t % 1000;
    t = (t - ms) / 1000;
    const secs = t % 60;
    t = (t - secs) / 60;
    const mins = t % 60;
    const hrs = (t - mins) / 60;

    let formattedSecs = secs;

    if (secs.toString().length === 1) {
        formattedSecs = "0" + secs;
    }

    const duration = hrs
        ? hrs + ":" + mins + ":" + formattedSecs
        : mins
        ? mins + ":" + formattedSecs
        : "0:" + formattedSecs;

    return duration;
};

export default msToTime;
