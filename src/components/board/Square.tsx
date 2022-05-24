import { NumUtil } from "../../shared/utils/NumUtil";

type Color = 'red' | 'black';

export class Square {
  private xPos: number;
  private yPos: number;
  private index: number;
  private color: Color;

  constructor (xPos: number, yPos: number, index: number) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.index = index;
    this.color = Square.getSquareColor(xPos, yPos);
  }
  
  public static getSquareColor (xColumn: number, yRow: number) : Color {
    let isRowEven = NumUtil.isEven(xColumn);
    let isColumnEven = NumUtil.isEven(yRow);

    if (isColumnEven && isRowEven) {
      return 'red'
    }

    if (!isColumnEven && isRowEven) {
      return 'black'
    }

    if (!isRowEven && isColumnEven) {
      return 'black';
    }

    return 'red'
  } 

  getIndex (): number {
    return this.index;
  }

  getColor (): Color {
    return this.color;
  }
}