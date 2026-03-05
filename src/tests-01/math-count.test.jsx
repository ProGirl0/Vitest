import {sum, sub, mult, div, even} from './math-counts';
import {describe, it,  expect} from 'vitest';

describe('MathCounts', ()=>{
    
    //Bloco de soma
    it(('Deverá exibir o resultado da soma entre 20 e 4'), ()=>{
        const result=sum(20,4);
        expect(result).toBe(24)
    });

    //Bloco de subtração
    it('Deverá exibir o resultado da subtração de 40 por 100', ()=>{
       const result=sub(40,100);
       expect(result).toBe(-60);
        
    })

    //Bloco de multiplicação
    it('Deverá exibir o resultado da multiplicação de 5 por 5', ()=>{
        const result=mult(5,5);
        expect(result).toBe(25);
         
     })

     //Bloco de divisão
    it('Deverá exibir o resultado da divisão de 100 por 5', ()=>{
        const result=div(100,5);
        expect(result).toBe(20);
         
     })
     //Bloco de paridade
    it('Deverá exibir o resultado da paridade de 10', ()=>{
        const result=even(10);
        expect(result).toBe(true);
         
     })
 

})