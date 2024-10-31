/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */

class Inventory {
  constructor() {
    this.item = [];
  }

  addItem(item) {
    this.item.push(item);
  }
  removeItem(id) {
    this.item = this.item.filter((item) => item.id !== id);
  }
  listItems() {
    const value = this.item.map(
      (i) =>
        `ID: ${i.id}, Name: ${i.name}, Quantity: ${i.quantity}, Price: ${i.price}`
    );

    return value.join('\n');
  }
}

// Jangan hapus kode di bawah ini!
export default Inventory;
