export class Pin {
    private oldPin: Number;
    private newpin: Number;
    private confirmPin: Number;

    constructor(oldPin: Number , pin: Number, confirmPin: Number) {
        this.oldPin = oldPin;
        this.newpin = pin;
        this.confirmPin = confirmPin;
    }

    public static createBlank() {
        return new Pin(0, 0, 0);
    }
}
