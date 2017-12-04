<template>
  <div class="container-readable">
     <router-view class="view" :key="$route.fullPath"></router-view>
  </div>
</template>
