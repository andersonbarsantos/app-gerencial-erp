import { Injectable } from '@angular/core';
import { IDadosService} from './../interfaces/IDadosService';
 
@Injectable()
export class DadosSQL implements IDadosService{
    BuscarDados(): string {
        return"Buscamos os dados no banco SQL Server";
    }  
    
    RetornaJson(): string {
        throw new Error("Method not implemented.");
    }

   
}