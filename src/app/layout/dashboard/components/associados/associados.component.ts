import { Component, OnInit, ViewChild } from '@angular/core';
import { PaxtuDadosService } from './paxtu-dados.service';
import { MatTableDataSource, MatDialog, MatTable, MatSort, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

export interface Associados {
  nr_registro_formatado: string;
  nm_associado: string;
  P1: string;
  P2: string;
  P3: string;
  P4: string;
  P5: string;
  P6: string;
  P7: string;
  P8: string;
  P9: string;
  P10: string;
}

@Component({
  selector: 'app-associados',
  templateUrl: './associados.component.html',
  styleUrls: ['./associados.component.scss']
})

export class AssociadosComponent implements OnInit {
    
    @ViewChild(MatTable) table: MatTable<any>;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    
    private associados: Associados[] = [];
    logado: any = {};
    
    displayedColumns: string[] = ['select' ,'nr_registro_formatado', 'nm_associado', 'p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9', 'p10'];
    dataSource = new MatTableDataSource<Associados>();
    selection = new SelectionModel<Associados>(true, []);

    constructor(private paxtuService: PaxtuDadosService) {}
    
    associadosSelecionados(){
        return this.selection.selected;
    }
    
    todosSelecionados(){
        try {
          const numSelecionados = this.selection.selected.length;
          const numColunas = this.dataSource.data.length;
          return numSelecionados === numColunas;
      } catch (e) {
          console.log(e); 
      }

    }
    
    masterToggle(){
        this.todosSelecionados() ? this.selection.clear() : this.dataSource.data.forEach(row => this.selection.select(row));
    }
       
    checkboxLabel(row?: Associados): string {
        if (!row) {
            return `${this.todosSelecionados() ? 'select' : 'deselect'} all`;
        }
        
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.nr_registro_formatado + 1}`;
    }
    
    
    filtrarTabela(filtro: string) {
        this.dataSource.filter = filtro.trim().toLowerCase();
    }

    
    async ngOnInit() {
        this.logado = await this.paxtuService.logar().then((res) => {
            return res.body;
        }).catch((err) => {
            console.log(err);
        });

        if(this.logado['success']){
            this.associados = await this.paxtuService.obterDados().then((res) => {
                return res.body.result;
            }).catch((err) => {
                console.log(err);
            });
            
            this.dataSource.data = this.associados;
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
        }
    }

}
