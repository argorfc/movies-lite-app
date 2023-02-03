<script setup lang="ts">
import { ref } from "vue";

const inputEmail = ref(null)
const inputPassword = ref(null)
const emit = defineEmits(['onSubmit'])

const onChangeInput = (e:any, key: string) => {
  const value = e.target.value;

  if (key === 'email') {
    inputEmail.value = value
  }
  if (key === 'email') {
    inputPassword.value = value
  }
}
const action = (e: any) => {
  e.preventDefault();
  const payload = {
    email: inputEmail.value,
    password: inputPassword,
  }

  emit('onSubmit', payload);
}

</script>

<template>
  <div class="w-full flex flex-col p-6 rounded-lg shadow-lg bg-white max-w-md">
    <form>
      <div class="form-group mb-6">
        <label for="exampleInputEmail2" class="form-label inline-block mb-2 text-gray-700">Email address</label>
        <input ref="inputEmail" type="email" class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-pink-600 focus:outline-none" id="exampleInputEmail2"
          aria-describedby="emailHelp" placeholder="Enter email"
          @change="(e) => onChangeInput(e, 'email')"
        >
      </div>
      <div class="form-group mb-6">
        <label for="exampleInputPassword2" class="form-label inline-block mb-2 text-gray-700">Password</label>
        <input ref="inputPassword" type="password" class="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-pink-600 focus:outline-none" id="exampleInputPassword2"
          placeholder="Password">
      </div>
      <div class="flex justify-between items-center mb-6">
        <div class="form-group form-check">
          <input type="checkbox"
            class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-pink-600 checked:border-pink-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            id="exampleCheck2">
          <label class="form-check-label inline-block text-gray-800" for="exampleCheck2">Remember me</label>
        </div>
        <a href="#!"
          class="text-pink-600 hover:text-pink-700 focus:text-pink-700 transition duration-200 ease-in-out">Forgot
          password?</a>
      </div>
      <button type="submit" class="
        w-full
        px-6
        py-2.5
        bg-pink-600
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-pink-700 hover:shadow-lg
        focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-pink-800 active:shadow-lg
        transition
        duration-150
        ease-in-out"
        @click="action"
      >Sign in</button>
      <p class="text-gray-800 mt-6 text-center">Not a member? <a href="#!"
          class="text-pink-600 hover:text-pink-700 focus:text-pink-700 transition duration-200 ease-in-out">Register</a>
      </p>
    </form>
  </div>
</template>

<style scoped>

</style>