class Cell {
    constructor(i, j) {
        this.i = i;
        this.j = j;
        /*
        State:
        0 = unknown -> white
        1 = filled -> dark-blue
        2 = empty -> black
        */
        this.state = 0;
    }

    toggle() {
        this.state += 1;
        this.state %= 3;
    }
}