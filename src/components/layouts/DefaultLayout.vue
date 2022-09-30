<template>
  <div class="layout">
    <header class="layout__header">
      <slot name="header" />
    </header>
    <main class="layout__main">
      <slot name="main" />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  display: flex;

  &__main {
    height: 100vh;
    overflow-y: scroll;
    padding: 23px 50px 34px 50px;
    flex-grow: 1;

    @include phone {
      padding: 8px 20px 33px 20px;
      padding-top: 55px;
    }
  }
}
</style>
