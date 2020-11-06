import React, { useEffect, useState } from "react"
import { Document, Page } from 'react-pdf'

export default function Display({book,firebase}){
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [data,setData] = useState(null)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const url = `https://file-examples-com.github.io/uploads/2017/10/file-sample_150kB.pdf`;

useEffect(() => {
  fetch(url).then(res => res.arrayBuffer()).then(data => {
    const buffer = new Uint8Array(data)
    const book = new Blob(buffer)
const file = new File(book)

console.log(file)
    
  })
},[])
  console.log(data)
  return <div className="Contiainer">
    <Document
        file={data && data}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
  </div>
}
