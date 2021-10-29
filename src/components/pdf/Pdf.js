import React from 'react'
import jsPDF from 'jspdf';
import {useContext} from 'react'
import {context} from '../../Context';

export default function Pdf() {

    const {name, age, country} = useContext(context);

    const pdfGenerator = () => {

        var doc = new jsPDF('p', 'pt');

        doc.setFont('courier', 'bold');
    
        doc.text(20, 20, `Hello, this is ${name}. I am ${age} years old from ${country}`);
    
        doc.save("generated.pdf");
    
      }

    return (
        <div>
            <h3>Click the button to download as pdf</h3>
            <button onClick={pdfGenerator}>Donwload PDF</button>
        </div>
    )
}
