export interface Urun {
  id: number;
  ad: string;
  fiyat: number;
  stok?: number; //opsiyonel bir alan ekledik. Bu sayede stok bilgisini vermek istemediğimiz ürünlerde bu alanı boş bırakabiliriz.
}