import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

import { PoppinsBold, PoppinsRegular } from 'templates/Admin/Reports/reportFont'

export type VideoStatsData = {
  title: string
  views: number
}

export type DocumentsStatsData = {
  title: string
  views: number
}

export type StudentData = {
  name: string
  points: number
}

import { FormatReportFileName } from 'utils/formatReportFileName'

const reports = new jsPDF()

export const GenerateAdminReport = (
  videos: VideoStatsData[],
  documents: DocumentsStatsData[],
  students: StudentData[]
) => {
  const today = new Date()
  const reportDate = new Intl.DateTimeFormat('pt-BR').format(new Date())
  const reportFileName = FormatReportFileName(today)

  autoTable(reports, {
    margin: { top: 30, right: 14, bottom: 20, left: 14 },
    head: [['Videos', 'Visualizações']],
    body: [...videos.map((video) => [video?.title, video?.views])],
    didDrawPage: function () {
      // Header
      reports.addImage('/img/horizontal-colorido.png', 'png', 14, 10, 63.54, 15)

      reports.addFileToVFS('Poppins-Bold.ttf', PoppinsBold)
      reports.addFont('Poppins-Bold.ttf', 'Poppins Bold', 'normal')
      reports.setFontSize(20)
      reports.setTextColor(56, 61, 65)
      reports.setFont('Poppins Bold')
      reports.text('Meu Relatório', 146, 18)

      reports.addFileToVFS('Poppins-Regular.ttf', PoppinsRegular)
      reports.addFont('Poppins-Regular.ttf', 'Poppins Regular', 'normal')
      reports.setFont('Poppins Regular')
      reports.setFontSize(10)
      reports.setTextColor(123, 123, 123)
      reports.text(`Relatório do dia: ${reportDate}`, 146, 23)

      // Footer
      const footerFrase = `Página ${reports.getCurrentPageInfo().pageNumber}`
      reports.setFontSize(10)

      // jsPDF 1.4+ uses getWidth, <1.4 uses .width
      const pageSize = reports.internal.pageSize
      const pageHeight = pageSize.height
        ? pageSize.height
        : pageSize.getHeight()
      reports.setTextColor(56, 61, 65)
      reports.text(footerFrase, 95, pageHeight - 10)
    },
    showHead: 'everyPage',
    bodyStyles: {
      valign: 'middle',
      halign: 'left'
    },
    headStyles: {
      valign: 'middle',
      halign: 'center'
    },
    styles: {
      cellWidth: 'wrap',
      halign: 'justify'
    },
    columnStyles: {
      0: { cellWidth: 152 },
      1: { cellWidth: 30, halign: 'center' }
    }
  })

  autoTable(reports, {
    margin: { top: 30, right: 14, bottom: 20, left: 14 },
    head: [['Documentos', 'Visualizações']],
    body: [...documents.map((document) => [document?.title, document?.views])],
    showHead: 'everyPage',
    bodyStyles: {
      valign: 'middle',
      halign: 'left'
    },
    headStyles: {
      valign: 'middle',
      halign: 'center'
    },
    styles: {
      cellWidth: 'wrap',
      halign: 'justify'
    },
    columnStyles: {
      0: { cellWidth: 152 },
      1: { cellWidth: 30, halign: 'center' }
    }
  })

  autoTable(reports, {
    margin: { top: 30, right: 14, bottom: 20, left: 14 },
    head: [['Estudantes', 'Pontos']],
    body: [...students.map((student) => [student?.name, student?.points])],
    showHead: 'everyPage',
    bodyStyles: {
      valign: 'middle',
      halign: 'left'
    },
    headStyles: {
      valign: 'middle',
      halign: 'center'
    },
    styles: {
      cellWidth: 'wrap',
      halign: 'justify'
    },
    columnStyles: {
      0: { cellWidth: 152 },
      1: { cellWidth: 30, halign: 'center' }
    }
  })

  reports.save(reportFileName)
}

export const GenerateStudentReport = (
  videos: VideoStatsData[],
  documents: DocumentsStatsData[]
) => {
  const today = new Date()
  const reportDate = new Intl.DateTimeFormat('pt-BR').format(new Date())
  const reportFileName = FormatReportFileName(today)

  autoTable(reports, {
    margin: { top: 30, right: 14, bottom: 20, left: 14 },
    head: [['Videos', 'Visualizações']],
    body: [...videos.map((video) => [video?.title, video?.views])],
    didDrawPage: function () {
      // Header
      reports.addImage('/img/horizontal-colorido.png', 'png', 14, 10, 63.54, 15)

      reports.addFileToVFS('Poppins-Bold.ttf', PoppinsBold)
      reports.addFont('Poppins-Bold.ttf', 'Poppins Bold', 'normal')
      reports.setFontSize(20)
      reports.setTextColor(56, 61, 65)
      reports.setFont('Poppins Bold')
      reports.text('Meu Relatório', 146, 18)

      reports.addFileToVFS('Poppins-Regular.ttf', PoppinsRegular)
      reports.addFont('Poppins-Regular.ttf', 'Poppins Regular', 'normal')
      reports.setFont('Poppins Regular')
      reports.setFontSize(10)
      reports.setTextColor(123, 123, 123)
      reports.text(`Relatório do dia: ${reportDate}`, 146, 23)

      // Footer
      const footerFrase = `Página ${reports.getCurrentPageInfo().pageNumber}`
      reports.setFontSize(10)

      // jsPDF 1.4+ uses getWidth, <1.4 uses .width
      const pageSize = reports.internal.pageSize
      const pageHeight = pageSize.height
        ? pageSize.height
        : pageSize.getHeight()
      reports.setTextColor(56, 61, 65)
      reports.text(footerFrase, 95, pageHeight - 10)
    },
    showHead: 'everyPage',
    bodyStyles: {
      valign: 'middle',
      halign: 'left'
    },
    headStyles: {
      valign: 'middle',
      halign: 'center'
    },
    styles: {
      cellWidth: 'wrap',
      halign: 'justify'
    },
    columnStyles: {
      0: { cellWidth: 152 },
      1: { cellWidth: 30, halign: 'center' }
    }
  })

  autoTable(reports, {
    margin: { top: 30, right: 14, bottom: 20, left: 14 },
    head: [['Documentos', 'Visualizações']],
    body: [...documents.map((document) => [document?.title, document?.views])],
    showHead: 'everyPage',
    bodyStyles: {
      valign: 'middle',
      halign: 'left'
    },
    headStyles: {
      valign: 'middle',
      halign: 'center'
    },
    styles: {
      cellWidth: 'wrap',
      halign: 'justify'
    },
    columnStyles: {
      0: { cellWidth: 152 },
      1: { cellWidth: 30, halign: 'center' }
    }
  })

  reports.save(reportFileName)
}
