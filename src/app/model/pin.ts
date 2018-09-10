export class Pin {
    public oldPin: Number;
    public  newpin: Number;
    public confirmPin: Number;

    constructor(oldPin: Number , pin: Number, confirmPin: Number) {
        this.oldPin = oldPin;
        this.newpin = pin;
        this.confirmPin = confirmPin;
    }

    public static createBlank() {
        return new Pin(0, 0, 0);
    }
}
