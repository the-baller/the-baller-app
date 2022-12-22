import moment from 'moment'

/**
 * converts an ISO date string to a more readable date format
 *
 * @param {string} isoString ISO date string to be formatted
 * @param {string=} format expected format (optional)
 *
 * @return {string} formatted date in the format 'Nov 13, 2022'
 */
export const formatDate = (isoString, format = 'MMM DD, YYYY') =>
  moment(isoString).format(format)