<script>
  import AddItem from '../lib/AddItem.svelte';

  let today = new Date().toLocaleTimeString();
  console.log(today);
</script>

<div class="bg-secondary text-white p-10">
  <div class="flex md:w-1/2 flex-col mx-auto">
    <h2 class="text-3xl font-bold tracking-wide">Create Invoice</h2>
    <div>
      <h3 class="text-purple-700 text-xl font-bold my-3">Bill From</h3>
      <form>
        <div>
          <label for="address" class="text-xl w-full text-left text-gray-100"
            >Street Address</label
          >
          <input
            type="text"
            id="address"
            placeholder="73,Rhamu"
            class="px-4 py-2 my-3 text-sm md:text-xl font-bold bg-primary rounded-sm w-full border-none active:border-none"
          />
        </div>
        <div class="flex flex-col md:flex-row w-full">
          <div class="md:mr-2">
            <label for="city" class="text-xl w-full text-left text-gray-100"
              >City</label
            >
            <input
              class="px-4 py-2 my-3 text-sm md:text-xl font-bold bg-primary rounded-sm w-full border-none active:border-none"
              type="text"
              id="city"
              placeholder="Nairobi"
            />
          </div>
          <div class="md:mr-2">
            <label
              for="postalCode"
              class="text-xl w-full text-left text-gray-100">Postal Code</label
            >
            <input
              class="px-4 py-2 my-3 text-sm md:text-xl font-bold bg-primary rounded-sm w-full border-none active:border-none"
              type="text"
              id="postalCode"
              placeholder="70300"
            />
          </div>
          <div>
            <label for="country" class="text-xl w-full text-left text-gray-100"
              >Country</label
            >
            <input
              class="px-4 py-2 my-3 text-sm md:text-xl font-bold bg-primary rounded-sm w-full border-none active:border-none"
              type="text"
              id="country"
              placeholder="Kenya"
            />
          </div>
        </div>
      </form>
    </div>
    <div>
      <h3 class="text-purple-700 text-xl font-bold my-3">Bill To</h3>
      <form>
        <div>
          <label for="clientName" class="text-xl w-full text-left text-gray-100"
            >Client's Name</label
          >
          <input
            class="px-4 py-2 my-3 text-sm md:text-xl font-bold bg-primary rounded-sm w-full border-none active:border-none"
            type="text"
            id="clientName"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label
            for="ClientEmail"
            class="text-xl w-full text-left text-gray-100">Client's Email</label
          >
          <input
            class="px-4 py-2 my-3 text-sm md:text-xl font-bold bg-primary rounded-sm w-full border-none active:border-none"
            type="email"
            id="clientEmail"
            placeholder="johndoe@gmail.com"
          />
        </div>
        <div>
          <label for="address" class="text-xl w-full text-left text-gray-100"
            >Street Address</label
          >
          <input
            class="px-4 py-2 my-3 text-sm md:text-xl font-bold bg-primary rounded-sm w-full border-none active:border-none"
            type="text"
            id="address"
            placeholder="73,Rhamu"
          />
        </div>
        <div class="flex flex-col md:flex-row w-full">
          <div class="md:mr-2">
            <label for="city" class="text-xl w-full text-left text-gray-100"
              >City</label
            >
            <input
              class="px-4 py-2 my-3 text-sm md:text-xl font-bold bg-primary rounded-sm w-full border-none active:border-none"
              type="text"
              id="city"
              placeholder="Nairobi"
            />
          </div>
          <div class="md:mr-2">
            <label
              for="postalCode"
              class="text-xl w-full text-left text-gray-100">Postal Code</label
            >
            <input
              class="px-4 py-2 my-3 text-sm md:text-xl font-bold bg-primary rounded-sm w-full border-none active:border-none"
              type="text"
              id="postalCode"
              placeholder="70300"
            />
          </div>
          <div>
            <label for="country" class="text-xl w-full text-left text-gray-100"
              >Country</label
            >
            <input
              class="px-4 py-2 my-3 text-sm md:text-xl font-bold bg-primary rounded-sm w-full border-none active:border-none"
              type="text"
              id="country"
              placeholder="Kenya"
            />
          </div>
        </div>
        <div class="flex md:flex-row flex-col">
          <div class="mr-2 w-full">
            <label for="date" class="text-xl w-full text-left text-gray-100"
              >Invoice Date</label
            >
            <input
              class="px-4 py-2 my-3 text-sm md:text-xl font-bold bg-primary rounded-sm w-full border-none active:border-none"
              type="date"
              id="date"
            />
          </div>
          <div class="w-full">
            <label for="terms" class="text-xl w-full text-left text-gray-100"
              >Payment Terms</label
            >
            <select
              name="terms"
              id="terms"
              class="md:text-lg text-sm text-white bg-primary px-4 py-2 my-3 font-bold w-full rounded-sm"
            >
              <option value="Immediate payment">Immediate payment</option>
              <option value="Next 10 days">Next 10 days</option>
              <option value="Next 10 days">Next 10 days</option>
              <option value="Next 10 days">Next 10 days</option>
            </select>
          </div>
        </div>
        <div>
          <label
            for="description"
            class="text-xl w-full text-left text-gray-100"
            >Project Description</label
          >
          <input
            class="px-4 py-2 my-3 text-sm md:text-xl font-bold bg-primary rounded-sm w-full border-none active:border-none"
            type="text"
            id="description"
            placeholder="Graphic design"
          />
        </div>
        <div>
          <h4>Items list</h4>
          <table>
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Total</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <AddItem />
              <AddItem />
              <AddItem />
              <AddItem />
            </tbody>
          </table>
          <button>
            <iconify-icon icon="material-symbols:add" />
            <span>Add New Item</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
