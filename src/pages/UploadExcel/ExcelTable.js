import React from "react";
import "./table.scss";

const charToAscii = (char) => char.charCodeAt(0);
const AsciiToChar = (ascii) => String.fromCharCode(ascii);

/* 
const genAlphabet = (() => {
    let char = 'A';
    return function(){
        let result = char;
        const ascii = charToAscii(char);
        const nextChar = AsciiToChar(ascii+1);
        char = nextChar;
        return result;
    }
})();
 */
class Alphabet{
    constructor(){}
    static reset(){
        this.char = 'A';
    }
    static generate(){
        const result = this.char;
        const ascii = charToAscii(this.char);
        const nextChar = AsciiToChar(ascii+1);
        this.char = nextChar;
        return result;
    }
}
Alphabet.char = 'A';
/* 
const genNumber = (() => {
    let number = 1;
    return function(init=false){
        if(init){
            number = 1;
            return;
        }
        return number++;
    }
})();
 */
class Number{
    constructor(){
    }
    static reset(){
        this.count = 0;
    }
    static generate(){
        this.count += 1;
        return this.count;
    }
}
Number.count = 0;

export default function ExcelTable(props){
        if(!props.data)
            return;
        let data = [...props.data];
        
        Alphabet.reset();
        let colKeys = data[0].map(_ => Alphabet.generate()); 
        
        Number.reset();
        for(let i=0 ; i<data.length ; i++) {
            data[i].unshift(Number.generate());
        }
        
    return (
        <div>
            Excel
            <div className="">
            <table className="">
                <tbody>
                    <tr>         
                        <td className="rowkey key"></td>
                        {colKeys.map((key, i) => <td key={i} className="key">{key}</td>)}
                    </tr>
                    {data.map((row, i) => {
                        return <tr key={i}>
                                {row.map((val,i) => {
                                        if(i<1)
                                            return <td key={i}className="key rowkey">{val}</td>
                                        if(i>0 && val==='empty')
                                            return <td key={i} className="error">{val}</td>
                                        return <td key={i}>{val}</td>
                                    })
                                }
                                </tr>
                    })}
                </tbody>
            </table>
            </div>
        </div>
    )
}