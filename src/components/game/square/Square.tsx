
import { NumUtil } from "../../../shared/utils/NumUtil";
type SquareColor = 'red' | 'black';

/**
 * @type Information holder
 */

export class Square {
  private xPos: number;
  private yPos: number;
  private index: number;
  private color: SquareColor;

  constructor (xPos: number, yPos: number, index: number) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.index = index;
    this.color = Square.getSquareColor(xPos, yPos);
  }
  
  public static getSquareColor (xColumn: number, yRow: number) : SquareColor {
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

  getXPosition (): number {
    return this.xPos;
  }

  getYPosition (): number {
    return this.yPos;
  }

  getColor (): SquareColor {
    return this.color;
  }
}