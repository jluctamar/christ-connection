import {
  trigger,
  state,
  style,
  transition,
  animate,
  group,
  query,
  stagger,
  keyframes,
} from '@angular/animations';

// https://stackoverflow.com/questions/47248898/angular-4-5-6-7-simple-example-of-slide-in-out-animation-on-ngif

export const SlideInOutAnimation = [
  trigger('slideInOut', [
    transition(':enter', [
      style({ transform: 'translateX(-100%)', opacity: '0' }),
      animate(
        '900ms ease',
        style({ transform: 'translateX(0%)', opacity: '1' })
      ),
    ]),
    transition(':leave', [
      animate(
        '800ms ease-out',
        style({ transform: 'translateX(-100%)', opacity: '0' })
      ),
    ]),
  ]),
];

export const SlideUpAnimation = [
  trigger('slideUp', [
    transition(':enter', [
      style({ transform: 'translateY(-100%)', opacity: '0' }),
      animate(
        '700ms ease-out',
        style({ transform: 'translateX(0%)', opacity: '1' })
      ),
    ]),
  ]),
];

export const SlideUpDownAnimation = [
  trigger('slideUpDown', [
    transition(':enter', [
      style({ transform: 'translateY(100%)', opacity: '0' }),
      animate(
        '1000ms ease-out',
        style({ transform: 'translateY(0%)', opacity: '1' })
      ),
    ]),
    transition(':leave', [
      animate(
        '800ms ease-out',
        style({ transform: 'translateY(100%)', opacity: '0' })
      ),
    ]),
  ]),
];

export const ShutterOutAnimation = [
  trigger('shutterOut', [
    transition(':enter', [
      style({ transform: 'scalex(0)', opacity: '0' }),
      animate(
        '700ms ease-out',
        style({ transform: 'scaleX(1)', opacity: '.8' })
      ),
    ]),
  ]),
];

export const RotateAnimation = [
  trigger('rotate', [
    transition(':enter', [
      animate(
        '950ms ease-out',
        style({ transform: 'rotate(180deg)'})
      ),
    ]),
  ]),
];
