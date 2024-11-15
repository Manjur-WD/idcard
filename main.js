
        async function downloadPDF() {
            const mainContent = document.querySelector('main'); // Select the main tag
            
            // Capture the main content using html2canvas
            const canvas = await html2canvas(mainContent, { scale: 2 });
            const imgData = canvas.toDataURL('image/png');
    
            // Create jsPDF instance
            const pdf = new jspdf.jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    
            // Add image to PDF
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    
            // Save the PDF
            pdf.save('id-card.pdf');
        }