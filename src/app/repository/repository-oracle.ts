import { Injectable } from '@angular/core';
import { IDadosService} from './../interfaces/IDadosService';
 
@Injectable()
export class DadosOracle implements IDadosService{
    BuscarDados(): string {
        return"Buscamos os dados no banco Oracle Server";
    }  
    
    RetornaJson(): string {
        throw new Error("Method not implemented.");
    }

   
}