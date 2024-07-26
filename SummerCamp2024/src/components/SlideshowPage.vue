<template>
  <div>
    <section>
      <div class="slideshow-container">
        <div v-if="slide == 0" class="mySlides fade">
          <div class="numbertext">1 / 6</div>
          <img src="../assets/Img/cover1.jpg" style="width: 100%" />
          <div class="text">
            Întotdeauna mi-am imaginat Paradisul ca fiind un fel de bibliotecă.
          </div>
        </div>
        <div v-else-if="slide == 1" class="mySlides fade">
          <div class="numbertext">2 / 6</div>
          <img src="../assets/Img/cover2.jpg" style="width: 100%" />
          <div class="text">
            Cine spune că are o singură viață de trăit acela nu știe cum se
            citește o carte.
          </div>
        </div>
        <div v-else-if="slide == 2" class="mySlides fade">
          <div class="numbertext">3 / 6</div>
          <img src="../assets/Img/cover3.jpg" style="width: 100%" />
          <div class="text">
            Lectura ne oferă destinații unde putem merge chiar dacă trebuie să
            rămânem acolo unde suntem.
          </div>
        </div>
        <div v-else-if="slide == 3" class="mySlides fade">
          <div class="numbertext">4 / 6</div>
          <img src="../assets/Img/cover4.jpg" style="width: 100%" />
          <div class="text">
            O cameră fără cărţi este ca un corp fără suflet.
          </div>
        </div>
        <div v-else-if="slide == 4" class="mySlides fade">
          <div class="numbertext">5 / 6</div>
          <img src="../assets/Img/cover5.jpg" style="width: 100%" />
          <div class="text">
            Cărţile sunt oglinzi: vezi în ele ceea ce ai deja înăuntrul tău.
          </div>
        </div>
        <div v-else class="mySlides fade">
          <div class="numbertext">6 / 6</div>
          <img src="../assets/Img/cover6.jpg" style="width: 100%" />
          <div class="text">Niciodată nu judeca o carte după coperta ei.</div>
        </div>
        <a class="prev" @click="decrement">&#10094;</a>
        <a class="next" @click="increment">&#10095;</a>
      </div>

      <div style="text-align: center">
        <span class="dot" @click="currentSlide(0)"></span>
        <span class="dot" @click="currentSlide(1)"></span>
        <span class="dot" @click="currentSlide(2)"></span>
        <span class="dot" @click="currentSlide(3)"></span>
        <span class="dot" @click="currentSlide(4)"></span>
        <span class="dot" @click="currentSlide(5)"></span>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 1,
    };
  },
  methods: {
    currentSlide(s) {
      this.slide = s;
      console.log(this.slide);
    },
    increment() {
      this.slide = (this.slide + 1) % 6;
      console.log(this.slide);
    },
    decrement() {
      this.slide = (this.slide - 1) % 6;
      console.log(this.slide);
    },
  },
};
</script>

<style scoped>
.slideshow-container {
  max-width: 1500px;
  position: relative;
  filter: brightness(60%);
}

.containerf1 .text {
  font-size: 25px;
  color: rgb(255, 255, 255);
  font-weight: 500;
}
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}
img {
  vertical-align: middle;
  width: 100%;
  height: auto;
}
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 60%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  user-select: none;
  transform: translateY(-50%);
}
.prev {
  left: 20px;
}
.next {
  right: 20px;
}
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}
@-webkit-keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
.dot {
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}
.active {
  background-color: #717171;
}
.dot:hover {
  background-color: #717171;
}
</style>
