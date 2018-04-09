import { BasePuzzle } from "./BasePuzzle";

import "./Puzzle2.css";

function indexToRowCol(numOfCols, idx) {
  return {
    col: Math.floor(idx % numOfCols),
    row: Math.floor(idx / numOfCols)
  };
}

function rowColToIndex(numOfCols, row, col) {
  return row * numOfCols + col;
}

const defaultOptions = {
  "str-name": "Majavakartta",
  "str-description":
    "Majavakartassa esineen paikka ilmaistaan kahdella suluissa olevalla numerolla. Ensin rivin numero ja sitten sarakkeen numero."
};

export class Puzzle2 extends BasePuzzle {
  constructor(setting, options = {}) {
    /**
     * @param {object} options
     */

    super(Object.assign(defaultOptions, options));

    this.setting = setting;

    this.state = {
      answer: { row: null, col: null }
    };

    this.indexToRowCol = indexToRowCol.bind(null, setting.cols);
    this.rowColToIndex = rowColToIndex.bind(null, setting.cols);

    this.onSpotClick = this.onSpotClick.bind(this);
    this.onAnswerChange = this.onAnswerChange.bind(this);

    this.html.description = this.options["str-description"];
    this.html.question = this.options["str-question"];

    // Init an array with empty Spot in each element
    this.grid = Array(this.setting.rows * this.setting.cols)
      .fill(null) // Fill with nulls so we can use map()
      .map((_, idx) => {
        const rowCol = this.indexToRowCol(idx);
        return new Spot(rowCol.row, rowCol.col);
      });

    // Replace Spot objectType with received parameters
    this.setting.objects.forEach(s => {
      const idx = this.rowColToIndex(s[0], s[1]);
      this.grid[idx].objectType = s[2];
    });

    this.setup();
  }

  onSendAnswer() {
    if (!this.canSend()) return;
    this.sendAnswer();
  }

  onSpotClick(event, spot) {
    const { row, col } = spot;
    this.onAnswerChange(null, { row, col });
  }

  onAnswerChange(event, newAnswer) {
    if (!this.canEditAnswer()) return;
    const { answer } = this.state;
    if (event && ["row", "col"].indexOf(event.target.name) > -1) {
      answer[event.target.name] = event.target.value;
    }
    this.setState({ answer: event ? answer : newAnswer });
  }

  canSend() {
    const { answer, answerSent } = this.state;
    return !answerSent && answer.row !== null && answer.col !== null;
  }

  canEditAnswer() {
    const { answerSent } = this.state;
    return !answerSent;
  }

  updateView() {
    super.updateView();

    this.updateAnswer();
    this.updateButtons();
  }

  updateButtons() {
    this.sendAnswerButton.disabled = !this.canSend();
  }

  updateAnswer() {
    const { answer } = this.state;

    this.rowInput.value = answer.row;
    this.rowInput.disabled =
      !this.canEditAnswer() || this.setting.input === "mouse";

    this.colInput.value = answer.col;
    this.colInput.disabled =
      !this.canEditAnswer() || this.setting.input === "mouse";
  }

  renderHTML() {
    super.renderHTML();

    this.renderElement("p", "puzzleDescription", this.html.description);

    this.renderElement("div", "puzzleGrid", this.renderGrid());

    this.renderElement("p", "puzzleQuestion", this.html.question);

    this.renderElement("p", "puzzleAnswerLabel", "Vastauksesi: ");

    this.renderElement("div", "puzzleInput", this.renderInputForm());

    // Render "Lähetä"-button
    this.sendAnswerButton = this.renderElement(
      "button",
      "puzzleSend",
      this.options["str-send-answer"]
    );
    this.sendAnswerButton.onclick = this.onSendAnswer.bind(this);
    this.sendAnswerButton.disabled = true;

    this.updateView();
  }

  renderGrid() {
    const gridElements = this.grid.map(spot =>
      spot.renderHTML({
        onClick: this.onSpotClick
      })
    );

    return this.renderElement("div", "gridWrapper", gridElements, null);
  }

  renderInputForm() {
    this.rowInput = document.createElement("input");
    this.colInput = document.createElement("input");

    [this.rowInput, this.colInput].forEach(i => {
      i.type = "number";
      i.step = 1;
      i.min = 1;
      i.disabled = this.setting.input === "mouse";
      i.onchange = this.onAnswerChange;
      i.onkeyup = this.onAnswerChange;
    });

    this.rowInput.max = this.setting.rows;
    this.rowInput.name = "row";
    this.colInput.max = this.setting.cols;
    this.colInput.name = "col";

    return this.renderElement(
      "form",
      "inputForm",
      [this.rowInput, this.colInput],
      null
    );
  }
}

class Spot {
  constructor(row_0, col_0, objectType = null) {
    /**
     * @param {number} row_0 - 0-indexed row
     * @param {number} col_0 - 0-indexed col
     * @param {number} objectType
     */
    this.col_0 = col_0;
    this.col = col_0 + 1; // Human readable coordinate in 1-indexed system

    this.row_0 = row_0;
    this.row = row_0 + 1; // Human readable coordinate in 1-indexed system

    this.objectType = objectType;
  }

  renderHTML({ onClick }) {
    const el = document.createElement("div");
    el.className = "spot";

    if (this.objectType) el.classList.add(this.objectType);
    else el.classList.add("empty");

    el.style.gridColumn = this.col;
    el.style.gridRow = this.row;

    el.innerHTML = this.objectType || "&bull;";

    if (this.row === 1)
      el.appendChild(this.renderIndexingNumber("col", this.col));

    if (this.col === 1)
      el.appendChild(this.renderIndexingNumber("row", this.row));

    el.onclick = e => onClick(e, this);
    return el;
  }

  renderIndexingNumber(type, number) {
    const el = document.createElement("span");
    el.className = "indexingNumber";
    el.classList.add(type);
    el.innerHTML = number;
    return el;
  }

  toString() {
    return `${this.objectType || null} (${this.row}, ${this.col})`;
  }
}
