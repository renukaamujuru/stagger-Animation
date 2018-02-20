import { trigger, style,  transition, animate,  query, stagger } from '@angular/animations';
export const explainerAnim=

  trigger('explainerAnim', [
    transition('* => *', [
      query('.col', style({ opacity: 0, transform: 'translateX(-40px)' })),

      query('.col', stagger('500ms', [
        animate('800ms 1.2s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
      ])),

      query('.col', [
        animate(1000, style('*'))
      ])

    ])
  ]);


