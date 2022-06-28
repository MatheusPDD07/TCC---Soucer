export const FormatReportFileName = (today: Date) => {
  return `relatorio-${today.getDate()}${
    today.getMonth() < 10 ? `0${today.getMonth() + 1}` : today.getMonth() + 1
  }${today.getFullYear()}${
    today.getHours() < 10 ? `0${today.getHours()}` : today.getHours()
  }${
    today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes()
  }.pdf`
}
