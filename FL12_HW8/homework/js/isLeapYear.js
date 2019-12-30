function isLeapYear(arr) {
    let res = new Date(arr).getFullYear();
    if (isNaN(res)) {
        return 'Invalid Date';
    }

    if (((res % 4 === 0) && (res % 100 !== 0)) || (res % 400 === 0)) {
        return `${res} is a leap year`
    } else {
        return `${res} is not a leap year`
    }

}

isLeapYear('2020-01-01 00:00:00');
isLeapYear('2020-01-01 00:00:00777');
isLeapYear('2021-01-15 13:00:00');
isLeapYear('2200-01-15 13:00:00');
isLeapYear(1213131313135465656654564646542132132131);
isLeapYear(1213131313);