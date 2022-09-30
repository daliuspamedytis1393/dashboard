<template>
  <div class="loader" />
</template>

<style lang="scss" scoped>
.loader {
  font-size: 10px;
  margin: 50px auto;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: $color-black;
  background: linear-gradient(
    to right,
    $color-black 10%,
    rgba($color-black, 0) 42%
  );
  position: relative;
  animation: load 0.7s infinite linear;
  transform: translateZ(0);

  &:before {
    width: 50%;
    height: 50%;
    background: $color-black;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
  }

  &:after {
    background: $color-white;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: "";
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
}

@keyframes load {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
