import { Component, ElementRef, Renderer2, ViewChild, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-results-panel',
  templateUrl: './results-panel.component.html',
  styleUrls: ['./results-panel.component.css']
})
export class ResultsPanelComponent implements OnInit{
  constructor(private renderer: Renderer2, private el: ElementRef) {}
  public t = 0
  ngAfterViewInit() {
    // Access the element by class name and get its width
    const containerElement = this.el.nativeElement.querySelector('.table-container');
    const width = containerElement.offsetWidth; // Get the width in pixels
    this.t = width
    console.log(`Width of the container: ${width}px`);
  }

 public routes  = [{
  "Column1": "Value1",
  "Column2": "Value2",
  "Column3": "Value3",
  "Column4": "Value4",
  "Column5": "Value5",
  "Column6": "Value6",
  "Column7": "Value7",
  "Column8": "Value8",
  "Column9": "Value9",
  "Column10": "Value10",
  "Column11": "Value11",
  "Column12": "Value12",
  "Column13": "Value13",
  "Column14": "Value14",
  "Column15": "Value15",
  "Column16": "Value16",
  "Column17": "Value17",
  "Column18": "Value18",
  "Column19": "Value19",
  "Column20": "Value20",
  "Column21": "Value21",
  "Column22": "Value22",
  "Column23": "Value23",
  "Column24": "Value24",
  "Column25": "Value25",
  "Column26": "Value26",
  "Column27": "Value27",
  "Column28": "Value28",
  "Column29": "Value29",
  "Column30": "Value30",
  "Column31": "Value31",
  "Column32": "Value32",
  "Column33": "Value33",
  "Column34": "Value34",
  "Column35": "Value35",
  "Column36": "Value36",
  "Column37": "Value37",
  "Column38": "Value38",
  "Column39": "Value39",
  "Column40": "Value40",
  "Column41": "Value41",
  "Column42": "Value42",
  "Column43": "Value43",
  "Column44": "Value44",
  "Column45": "Value45",
  "Column46": "Value46",
  "Column47": "Value47",
  "Column48": "Value48",
  "Column49": "Value49",
  "Column50": "Value50"
},
{
  "Column1": "Value1",
  "Column2": "Value2",
  "Column3": "Value3",
  "Column4": "Value4",
  "Column5": "Value5",
  "Column6": "Value6",
  "Column7": "Value7",
  "Column8": "Value8",
  "Column9": "Value9",
  "Column10": "Value10",
  "Column11": "Value11",
  "Column12": "Value12",
  "Column13": "Value13",
  "Column14": "Value14",
  "Column15": "Value15",
  "Column16": "Value16",
  "Column17": "Value17",
  "Column18": "Value18",
  "Column19": "Value19",
  "Column20": "Value20",
  "Column21": "Value21",
  "Column22": "Value22",
  "Column23": "Value23",
  "Column24": "Value24",
  "Column25": "Value25",
  "Column26": "Value26",
  "Column27": "Value27",
  "Column28": "Value28",
  "Column29": "Value29",
  "Column30": "Value30",
  "Column31": "Value31",
  "Column32": "Value32",
  "Column33": "Value33",
  "Column34": "Value34",
  "Column35": "Value35",
  "Column36": "Value36",
  "Column37": "Value37",
  "Column38": "Value38",
  "Column39": "Value39",
  "Column40": "Value40",
  "Column41": "Value41",
  "Column42": "Value42",
  "Column43": "Value43",
  "Column44": "Value44",
  "Column45": "Value45",
  "Column46": "Value46",
  "Column47": "Value47",
  "Column48": "Value48",
  "Column49": "Value49",
  "Column50": "Value50"
},{
  "Column1": "Value1",
  "Column2": "Value2",
  "Column3": "Value3",
  "Column4": "Value4",
  "Column5": "Value5",
  "Column6": "Value6",
  "Column7": "Value7",
  "Column8": "Value8",
  "Column9": "Value9",
  "Column10": "Value10",
  "Column11": "Value11",
  "Column12": "Value12",
  "Column13": "Value13",
  "Column14": "Value14",
  "Column15": "Value15",
  "Column16": "Value16",
  "Column17": "Value17",
  "Column18": "Value18",
  "Column19": "Value19",
  "Column20": "Value20",
  "Column21": "Value21",
  "Column22": "Value22",
  "Column23": "Value23",
  "Column24": "Value24",
  "Column25": "Value25",
  "Column26": "Value26",
  "Column27": "Value27",
  "Column28": "Value28",
  "Column29": "Value29",
  "Column30": "Value30",
  "Column31": "Value31",
  "Column32": "Value32",
  "Column33": "Value33",
  "Column34": "Value34",
  "Column35": "Value35",
  "Column36": "Value36",
  "Column37": "Value37",
  "Column38": "Value38",
  "Column39": "Value39",
  "Column40": "Value40",
  "Column41": "Value41",
  "Column42": "Value42",
  "Column43": "Value43",
  "Column44": "Value44",
  "Column45": "Value45",
  "Column46": "Value46",
  "Column47": "Value47",
  "Column48": "Value48",
  "Column49": "Value49",
  "Column50": "Value50"
},{
  "Column1": "Value1",
  "Column2": "Value2",
  "Column3": "Value3",
  "Column4": "Value4",
  "Column5": "Value5",
  "Column6": "Value6",
  "Column7": "Value7",
  "Column8": "Value8",
  "Column9": "Value9",
  "Column10": "Value10",
  "Column11": "Value11",
  "Column12": "Value12",
  "Column13": "Value13",
  "Column14": "Value14",
  "Column15": "Value15",
  "Column16": "Value16",
  "Column17": "Value17",
  "Column18": "Value18",
  "Column19": "Value19",
  "Column20": "Value20",
  "Column21": "Value21",
  "Column22": "Value22",
  "Column23": "Value23",
  "Column24": "Value24",
  "Column25": "Value25",
  "Column26": "Value26",
  "Column27": "Value27",
  "Column28": "Value28",
  "Column29": "Value29",
  "Column30": "Value30",
  "Column31": "Value31",
  "Column32": "Value32",
  "Column33": "Value33",
  "Column34": "Value34",
  "Column35": "Value35",
  "Column36": "Value36",
  "Column37": "Value37",
  "Column38": "Value38",
  "Column39": "Value39",
  "Column40": "Value40",
  "Column41": "Value41",
  "Column42": "Value42",
  "Column43": "Value43",
  "Column44": "Value44",
  "Column45": "Value45",
  "Column46": "Value46",
  "Column47": "Value47",
  "Column48": "Value48",
  "Column49": "Value49",
  "Column50": "Value50"
}
]


 ngOnInit(): void {
 }

public allColumns: any = Object.keys(this.routes[0])
pinnedColumns: string[] = [];
nonPinnedColumns: string[] = [...this.allColumns];




// columnFrozenState: boolean[] = new Array(this.allColumns.length).fill(false);
// toggleColumnFrozenState(index: number) {
//   this.columnFrozenState[index] = !this.columnFrozenState[index];
// }

pinColumn(column: string) {
  if (this.nonPinnedColumns.includes(column)) {
    this.nonPinnedColumns = this.nonPinnedColumns.filter(col => col !== column);
    this.pinnedColumns.push(column);
  }else{
    this.pinnedColumns = this.pinnedColumns.filter(col => col !== column);
    this.nonPinnedColumns.push(column);
  }
}



}
