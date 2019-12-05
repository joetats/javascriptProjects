const calcSpeed = (cadence, front, rear, wheel) => {
    const ratio = front / rear;
    const wheelCir = wheel / 1000000;
    return (cadence * ratio) * wheelCir * 60;
}