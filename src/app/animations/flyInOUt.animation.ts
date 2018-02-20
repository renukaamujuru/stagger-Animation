import { trigger, style, state, transition, group, animate, keyframes, query, stagger } from '@angular/animations';

export const flyInOut=
  trigger('flyInOut', [
    transition('void => *', [
      style({ transform: 'translateX(-100%)' }),
      animate('1s')

    ]),
    transition('*=>void', [
      animate('1s', style({ transform: 'translateX(100%)' }))
    ])
  ]);



