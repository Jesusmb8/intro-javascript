export default class Boat {
    constructor(name, size, icon) {
      this.name = name;
      this.size = size;
      this.icon = icon;
      this.disparosRecibidos = 0;
      this.coordenadas = [];
      this.hundido = false;
    }
  }
  