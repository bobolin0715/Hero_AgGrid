import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';
import { DeleteComponent } from '../delete/delete.component';
import { GridLinkComponent } from '../grid-link/grid-link.component';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrl: './ag-grid.component.css',
})
export class AgGridComponent implements OnInit {
  constructor(private heroService: HeroService, private router: Router) {}

  rowData: Hero[] = [];

  pagination = true;
  paginationPageSize = 10;
  paginationPageSizeSelector = [10, 20, 50, 100];

  defaultColDef: ColDef = {
    flex: 1,
    filter: true,
  };

  colDefs: ColDef[] = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name' },
    { field: 'level', headerName: 'Level' },
    { field: 'birthday', headerName: 'Birthday' },
    { field: 'link', headerName: 'Link', cellRenderer: GridLinkComponent },
    { field: 'delete', headerName: 'Delete', cellRenderer: DeleteComponent },
  ];

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.rowData = heroes));
  }

  onCellClicked(event: any): void {
    if (event.colDef.field === 'link') {
      const id = event.data.id;
      this.router.navigate([`/detail/${id}`]);
    }
  }

  onCellDeleted(event: any): void {
    if (event.colDef.field === 'delete') {
      const id = event.data.id;
      this.deleteHero(id);
    }
  }

  gridApi: any;
  // 用於接收從 AddHeroComponent 發送過來的新增英雄事件
  onHeroAdded(hero: Hero): void {
    this.rowData.push(hero); // 把新英雄加入到 rowData
    if (this.gridApi) {
      // 使用 applyTransaction 來更新 AG Grid
      this.gridApi.applyTransaction({
        add: [hero], // 新增資料
      });
    }
  }

  deleteHero(id: number): void {
    this.heroService.deleteHero(id).subscribe(() => {
      // 從 rowData 中移除刪除的英雄，遍歷所有 data，filter 當中不等於的 hero 會被保留
      this.rowData = this.rowData.filter((hero) => hero.id !== id);
    });
  }

  // 表格初始化時獲取 API 物件
  onGridReady(params: any): void {
    this.gridApi = params.api; // 獲取 API 物件
  }
}
