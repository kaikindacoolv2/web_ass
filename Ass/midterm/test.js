document.addEventListener('DOMContentLoaded', function() {
    class FlowerAnimation {
      constructor() {
        this.flowers = document.querySelectorAll('.flower');
        this.growAns = document.querySelectorAll('.grow-ans');
        this.longG = document.querySelectorAll('.long-g');
        this.notLoaded = document.querySelector('.not-loaded');
        this.night = document.querySelector('.night');
  
        this.init();
      }
  
      init() {
        this.hidePreloader();
        this.animateFlowers();
        this.animateLongG();
        this.animateGrowAns();
        this.animateNight();
      }
  
      hidePreloader() {
        setTimeout(() => {
          this.notLoaded.classList.add('hide');
        }, 1000);
      }
  
      animateFlowers() {
        this.flowers.forEach((flower, index) => {
          setTimeout(() => {
            flower.classList.add('animate');
          }, index * 500);
        });
      }
  
      animateLongG() {
        this.longG.forEach((longG, index) => {
          setTimeout(() => {
            longG.classList.add('animate');
          }, index * 1000);
        });
      }
  
      animateGrowAns() {
        this.growAns.forEach((growAns, index) => {
          setTimeout(() => {
            growAns.classList.add('animate');
          }, index * 1000);
        });
      }
  
      animateNight() {
        setTimeout(() => {
          this.night.classList.add('animate');
        }, 5000);
      }
    }
  
    new FlowerAnimation();
  });