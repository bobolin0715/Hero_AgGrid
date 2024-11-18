import { Component, OnInit } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-grid-link',
  template: ` <button class="button">View Details</button> `,
  styles: `.button {
    display: inline-block;
    padding: 5px 30px;
    font-size: 12px;
    color: #ffffff;
    background: linear-gradient(135deg, #4a90e2, #3460ff); /* 藍色漸層 */
    border: none;
    border-radius: 8px;
    cursor: pointer;
    /* box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); */
    /* transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.3s ease; */
    /* margin-bottom: 2rem; */
  }`,
})
export class GridLinkComponent implements OnInit {
  agInit(params: ICellRendererParams): void {}
  refresh(params: ICellRendererParams) {
    return false;
  }
  ngOnInit(): void {}
}
