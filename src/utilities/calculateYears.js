export const calculateYears = (sinceDate) => {
    const dateToCompare = new Date(sinceDate);
    const today = new Date();
    const years = today.getFullYear() - dateToCompare.getFullYear();
    const m = today.getMonth() - dateToCompare.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dateToCompare.getDate())) {
        return years - 1;
    }
    return years;
};