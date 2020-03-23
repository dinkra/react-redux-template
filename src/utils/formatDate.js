import format from 'date-fns/format';

export const formatDate = (date) => (date ? format(new Date(date), 'dd MMMM yyyy - HH:MM') : '');
