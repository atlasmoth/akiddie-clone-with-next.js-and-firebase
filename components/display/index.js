import React, { useEffect, useState } from "react"
import { Document, Page } from 'react-pdf'


import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Display({book,firebase}){
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [data,setData] = useState(null)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }
  const url = `https://file-examples-com.github.io/uploads/2017/10/file-sample_150kB.pdf`;

useEffect(() => {
  fetch(url).then(res => res.blob()).then(blob => {
      setData(blob)
  })
},[])
  
return (
  <>
    <Document
      file={data && data}
      onLoadSuccess={onDocumentLoadSuccess}
    >
      <Page pageNumber={pageNumber} />
    </Document>
    <div>
      <p>
        Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
      </p>
      <button
        type="button"
        disabled={pageNumber <= 1}
        onClick={previousPage}
      >
        Previous
      </button>
      <button
        type="button"
        disabled={pageNumber >= numPages}
        onClick={nextPage}
      >
        Next
      </button>
    </div>
  </>
);
  
}
