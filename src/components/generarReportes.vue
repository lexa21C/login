<template>
    <div>
      <h1>Generar Reporte</h1>
      <button @click="generarExcel">Generar Excel</button>
      <button @click="generarPDF">Generar PDF</button>
    </div>
  </template>
  
  <script>
  import XLSX from 'xlsx';
  import jsPDF from 'jspdf';
  
  export default {
    methods: {
      generarExcel() {
        // Aquí puedes generar el reporte en formato Excel
        const data = [
          ['Nombre', 'Edad'],
          ['Alice', 25],
          ['Bob', 30],
          ['Charlie', 35],
        ];
        const ws = XLSX.utils.aoa_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Reporte');
        XLSX.writeFile(wb, 'reporte.xlsx');
      },
      generarPDF() {
        // Aquí puedes generar el reporte en formato PDF
        const doc = new jsPDF();
        doc.text('Reporte PDF', 10, 10);
        doc.save('reporte.pdf');
      },
    },
  };
  </script>
  