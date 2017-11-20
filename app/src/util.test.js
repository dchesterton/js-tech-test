import {formatDate} from './util';

it('formats date correctly', () => {
    const results = {
        '2017-09-19T11:35:23.000Z': '19 Sep 2017, 11:35',
        '2017-09-01T08:05:23.000Z': '1 Sep 2017, 08:05',
        '2017-09-19T12:27:29.000Z': '19 Sep 2017, 12:27',
    };

    for (let prop in results) {
        const expectedVal = results[prop];
        const val = formatDate(prop);

        expect(val).toEqual(expectedVal);
    }
});
