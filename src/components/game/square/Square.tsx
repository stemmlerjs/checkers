
import { makeAutoObservable } from "mobx";
import { NumUtil } from "../../../shared/utils/NumUtil";
import { Position } from "../pieces/Piece";
type SquareColor = 'red' | 'black';

/**
 * @type Information holder
 */

export class Square {
  private xPos: number;
  private yPos: number;
  private index: number;
  private color: SquareColor;
  private droppable: boolean;

  constructor (xPos: number, yPos: number, index: number, droppable?: boolean) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.index = index;
    this.color = Square.getSquareColor(xPos, yPos);
    this.droppable = false;

    makeAutoObservable(this);
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

  getPosition (): Position {
    return [this.getXPosition(), this.getYPosition()]
  }

  isDroppable (): boolean {
    return this.droppable;
  }

  public setDroppable (droppable: boolean): void {
    this.droppable = droppable;
  }
}