<script>
  export let status;
  let isPending = status == "Pending" ? true : false;
</script>

<div
  class:bg-darkRed={isPending}
  class="my-4 py-2 px-10 bg-darkGreen rounded-lg flex items-center justify-start shadow-sm"
>
  <div
    class:bg-red-500={isPending}
    class="h-2 w-2 bg-green-400 rounded-full mr-4"
  />
  <h3
    class={status == "Pending"
      ? "text-xl text-red-500"
      : "text-xl text-green-500"}
  >
    {status}
  </h3>
</div>
