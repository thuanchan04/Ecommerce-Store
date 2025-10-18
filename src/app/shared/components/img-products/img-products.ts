import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img-products',
  standalone: true,
  imports: [],
  templateUrl: './img-products.html'
})
export class ImgProducts {
  @Input() ImgProductsType = ImgProductsTypes.IP14PRO1;
}
export enum ImgProductsTypes {
  IP14PRO1 = 'assets/products/ip14pro1.svg',
  BANNER = 'assets/products/banner.svg',
  SMALLER_BANNERS = 'assets/products/smallerBanners.svg',
  AIR_PODS = 'assets/products/airPods.svg',
  APPLE_WATCH9GPS = 'assets/products/appleWatch9GPS.svg',
  BUDS_FE = 'assets/products/budsFE.svg',
  CAMERA6K = 'assets/products/camera6K.svg',
  IPAD9 = 'assets/products/iPad9.svg',
  WATCH6 = 'assets/products/watch6.svg',
  ZFOLD5 = 'assets/products/zFold5.svg',
  IP = 'assets/products/ip.svg',
  AIR_PODS_MAX = 'assets/products/airPodsMax.svg',
  APPLE_VISION = 'assets/products/appleVision.svg',
  MAC_BOOK_AIR = 'assets/products/macBookAir.svg',
  PLAY_STATION = 'assets/products/playStation.svg',

  AIR_PODS_MAX_DK = 'assets/products/airPodsMaxDk.svg',
  APPLE_VISION_DK = 'assets/products/appleVisionDk.svg',
  MAC_BOOK_AIR_DK = 'assets/products/macBookAirDk.svg',
  PLAY_STATION_DK = 'assets/products/playStationDk.svg',
}
