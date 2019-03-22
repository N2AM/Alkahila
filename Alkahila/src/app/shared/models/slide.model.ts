export const SLIDER_TYPE_1 = 'type1';
export const SLIDER_TYPE_2 = 'type2';
export const SLIDER_TYPE_3 = 'type3';

export class SlideModel {
  constructor(public type: string = SLIDER_TYPE_1,
              public mainImg: string= '',
              public mainImgUrl: string = '',
              public upperText: string = '',
              public upperTextUrl: string = '',
              public mainText: string = '',
              public mainTextUrl: string = '',
              public lowerText: string = '',
              public lowerTextUrl: string = '',
              public smallImg1: string = null,
              public smallImg1Url = null,
              public smallImg2: string = null,
              public smallImg2Url: string = null) {}
}
