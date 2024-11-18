import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-delete',
  template: ` <button type="button" class="button">X</button> `,
  styles: `.button {
    display: inline-block;
    padding: 3px 8px;
    font-size: 16px;
    color: #ffffff;
    background: linear-gradient(135deg, #b40000, #b40000); /* 藍色漸層 */
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.3s ease;
    margin-bottom: 2rem;
  }`,
})
export class DeleteComponent implements OnInit, ICellRendererAngularComp {
  value: any;
  agInit(params: ICellRendererParams<any, any, any>): void {
    this.value = params.value;
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return false;
  }
  ngOnInit(): void {}
}
