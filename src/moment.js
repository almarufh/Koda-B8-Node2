import moment from 'moment';

export default function withMoment(date) {
    return moment(date, "DD-MM-YYYY").format('DD/MM/YYYY');
}