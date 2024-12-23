import React, { useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { useState } from 'react';
import './Scanner.css';

function Scanner(){
    const [scanResult,setScanResult]=useState(null);

    useEffect(()=>{
        const scanner = new Html5QrcodeScanner(
            'reader', //html element or id into which qr code sc is to be inserted
            { fps: 10, qrbox: { width: 300, height: 300} } //frames per second - no. of times going to attempt to read a QR code
          );
      
          scanner.render(success,error)
      
          function success(result){
              scanner.clear();
              setScanResult(result);
      
          }
      
          function error(err){
              console.warn(err);
      
          }
    },[]);

    return(
        <div className="Scbox">
            {scanResult
            ?
        <div>Success: <a href={scanResult}>{scanResult}</a></div>
            :
            <div id="reader">

            </div>
            }
        </div>
    )
};



export default Scanner;