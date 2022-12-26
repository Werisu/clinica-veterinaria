import {
  transition,
  style,
  animate,
  trigger,
  animation,
} from '@angular/animations';

export const Fade = trigger('fade', [
  transition(
    ':enter',
    animation([
      style({ opacity: 0 }),
      animate(
        '0.3s cubic-bezier(0.59, 0.32, 0.38, 1.13)',
        style({ opacity: 1 })
      ),
    ])
  ),
  transition(
    ':leave',
    animation([
      style({ opacity: 1 }),
      animate(
        '0.3s cubic-bezier(0.59, 0.32, 0.38, 1.13)',
        style({ opacity: 0 })
      ),
    ])
  ),
]);

export const FadeOpacity = trigger('fade', [
  transition(
    ':enter',
    animation([
      style({ opacity: 0 }),
      animate(
        '0.3s cubic-bezier(0.59, 0.32, 0.38, 1.13)',
        style({ opacity: 0.5 })
      ),
    ])
  ),
  transition(
    ':leave',
    animation([
      style({ opacity: 0.5 }),
      animate(
        '0.3s cubic-bezier(0.59, 0.32, 0.38, 1.13)',
        style({ opacity: 0 })
      ),
    ])
  ),
]);

/* ADICIONADO 30/08/2022 08:55 */
const enterTransition = transition(':enter', [
  style({
    opacity: 0,
  }),
  animate(
    '1s ease-in',
    style({
      opacity: 1,
    })
  ),
]);

const leaveTrans = transition(':leave', [
  style({
    opacity: 1,
  }),
  animate(
    '1s ease-out',
    style({
      opacity: 0,
    })
  ),
]);

export const fadeIn = trigger('fadeIn', [enterTransition]);

export const fadeOut = trigger('fadeOut', [leaveTrans]);
