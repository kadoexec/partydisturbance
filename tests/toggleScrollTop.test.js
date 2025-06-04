/**
 * @jest-environment jsdom
 */

global.GLightbox = function() { return {}; };
global.PureCounter = function() {};

const { toggleScrollTop } = require('../assets/js/main.js');

describe('toggleScrollTop', () => {
  let button;
  beforeEach(() => {
    document.body.innerHTML = '<div class="scroll-top"></div>';
    button = document.querySelector('.scroll-top');
  });

  test('adds active when scrollY > 100', () => {
    Object.defineProperty(window, 'scrollY', { writable: true, configurable: true, value: 150 });
    toggleScrollTop();
    expect(button.classList.contains('active')).toBe(true);
  });

  test('removes active when scrollY <= 100', () => {
    button.classList.add('active');
    Object.defineProperty(window, 'scrollY', { writable: true, configurable: true, value: 50 });
    toggleScrollTop();
    expect(button.classList.contains('active')).toBe(false);
  });
});
