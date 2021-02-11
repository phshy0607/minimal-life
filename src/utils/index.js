import dayjs from 'dayjs'

function formatDate(date, format = 'YYYY-MM-DD HH:mm') {
  if (date) {
    return dayjs(date).format(format)
  }
  return null
}

export { formatDate }
