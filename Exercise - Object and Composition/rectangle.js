function rectangle(width, height, color) {

    return {
        width: Number(width),
        height: Number(height),
        color: color.charAt(0).toUpperCase() + color.slice(1),
        calcArea: function() {
            return this.width * this.height;
        }
    }

}