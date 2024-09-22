# Welcome to Assignment 5

## <img width=30px src="assets/logo.png"/> DONATE BANGLADESH

## Key Rule

- Do not ask about mark distribution in the group, as it will not be provided.
- Do not post assignment feedback after receiving it. If you encounter issues or have complaints, please join a support session for discussion.
- Avoid using "lorem ipsum" text. Use relevant and meaningful content instead.
- Feel free to modify the color or design, but ensure the design is visually appealing and professional.
- You are **not allowed** to use any JavaScript library or framework for this assignment.

## Design

- **Navbar**: Create a visually appealing navbar with the following structure:
  - Logo positioned in the middle.
  - "Blog" button on the left.
  - Account balance with a coin icon on the right.
  - "Donation" and "History" buttons in the center (as per Figma).
- **Donation Cards**: Create 3 donation cards with the following details:
  - Image on the left.
  - Donation title.
  - Donation info.
  - Current donation amount.
  - Input field for donation amount.
  - Button for submitting the donation.
- **History Section**: Initially hidden and empty.

## Functionalities

- **Donation and History Button Functionality**:
  - Clicking the "History" button will hide the donation data and display the history.
  - Clicking the "Donation" button will hide the history and display the donation data.
- **Donation Functionality for Each Card**:
  - When the "Donate Now" button is clicked:
    - The donation input will be deducted from the total account balance, and the updated balance will be shown.
    - The card’s current donation amount will increase.
    - A meaningful notification will be added to the History section.
- **Input Validation**:
  - Show an alert if invalid data is found and stop the transaction.
  - Validate the donation amount:
    - If the donation amount is greater than the account balance.
    - If the input field contains an invalid number.
    - If the input field is empty.
- **History Section**:
  - The history section will display transaction notifications, including:
    - Date and time of the transaction.
    - Donation amount.
    - Donation name.

## Challenges

- **Sticky Navbar**: Make the navbar sticky to the top of the page.
- **Blog Page**: Create a `blog.html` file and link it to the main page:
  - The blog page should contain 4 questions and their answers:
    1. What is the Document Object Model (DOM)?
    2. How do you select an element from the DOM?
    3. What is event delegation in the context of the DOM, and why is it useful?
    4. How do you manipulate an element's attributes and styles using the DOM?
- **Toggle Active Status**: Toggle the active status of the "Donation" and "History" buttons:
  - Change the button color to indicate when it's active.
- **Static Modal**: Display a static modal instead of an alert on a successful donation.
- **Reusable Functions**: Use at least 2 common functions.
- **Responsive Design**: Ensure the application is responsive for different screen sizes.


 <main class="container mx-auto pt-60 lg:pt-80 px-2 md:px-0">
    <!-- donation section -->
    <section class="space-y-8 hidden">
      <!-- card -->
      <div class="hero">
        <div class="hero-content flex-col lg:flex-row lg:p-8 p-4 border border-primary-text/10 rounded-2xl">
          <img
            src="./assets/noakhali.png"
            class=" rounded-lg" />
          <div>
            <button class="py-[10px] px-4 bg-primary-text/5 rounded-lg flex gap-2 items-center mb-4"><img src="./assets/coin.png" alt="coin" class="h-6 w-6">
              <p class="text-base text-primary-text/70"><span id="noakhali-neat-cash">600</span> BDT</p></button>
            <h1 class="text-xl text-primary-text font-bold">Donate for Flood at Noakhali, Bangladesh</h1>
            <p class="py-6 text-primary-text/70 font-light text-base">
              The recent floods in Noakhali have caused significant damage to homes  infrastructure. Your donation will help provide essential supplies and  to those affected by this disaster. Every contribution, big or small, makes  difference. Please join us in supporting the relief efforts and making a positive impact on the lives of those in need.
            </p>
            <input id="donate-amount-input" type="text" placeholder="Write Donation Amount" class="input input-bordered w-full" />
            <button id="donate-btn" class="py-3 px-8 w-full text-primary-text bg-primary-bg rounded-lg font-semibold text-xl mt-6">Donate Now</button>
          </div>
        </div>
      </div>
      <!-- card -->
      <div class="hero">
        <div class="hero-content flex-col lg:flex-row lg:p-8 p-4 border border-primary-text/10 rounded-2xl">
          <img
            src="./assets/feni.png"
            class=" rounded-lg" />
          <div>
            <button class="py-[10px] px-4 bg-primary-text/5 rounded-lg flex gap-2 items-center mb-4"><img src="./assets/coin.png" alt="coin" class="h-6 w-6">
              <p class="text-base text-primary-text/70"><span id="noakhali-neat-cash">400</span> BDT</p></button>
            <h1 class="text-xl text-primary-text font-bold">Donate for Flood Relief in Feni,Bangladesh</h1>
            <p class="py-6 text-primary-text/70 font-light text-base">
              The recent floods in Feni have devastated local communities, leading to severe disruption and loss. Your generous donation will help provide immediate aid, including food, clean water, and medical supplies, to those affected by this calamity. Together, we can offer crucial support and help rebuild lives in the aftermath of this disaster. Every contribution counts towards making a real difference. Please consider donating today to assist those in urgent need.
            </p>
            <input id="donate-amount-input" type="text" placeholder="Write Donation Amount" class="input input-bordered w-full" />
            <button id="donate-btn" class="py-3 px-8 w-full text-primary-text bg-primary-bg rounded-lg font-semibold text-xl mt-6">Donate Now</button>
          </div>
        </div>
      </div>
      <!-- card -->
      <div class="hero">
        <div class="hero-content flex-col lg:flex-row lg:p-8 p-4 border border-primary-text/10 rounded-2xl">
          <img
            src="./assets/quota-protest.png"
            class=" rounded-lg" />
          <div>
            <button class="py-[10px] px-4 bg-primary-text/5 rounded-lg flex gap-2 items-center mb-4"><img src="./assets/coin.png" alt="coin" class="h-6 w-6">
              <p class="text-base text-primary-text/70"><span id="quota-neat-cash">2600</span> BDT</p></button>
            <h1 id="quota-title" class="text-xl text-primary-text font-bold">Aid for Injured in the Quota Movement</h1>
            <p class="py-6 text-primary-text/70 font-light text-base">
              The recent Quota movement has resulted in numerous injuries and significant hardship for many individuals. Your support is crucial in providing medical assistance, rehabilitation, and necessary supplies to those affected. By contributing, you help ensure that injured individuals receive the care and support they need during this challenging time. Every donation plays a vital role in alleviating their suffering and aiding in their recovery. Please consider making a donation to support these brave individuals in their time of need.
            </p>
            <input id="donate-amount-input" type="text" placeholder="Write Donation Amount" class="input input-bordered w-full" />
            <button id="donate-btn" class="py-3 px-8 w-full text-primary-text bg-primary-bg rounded-lg font-semibold text-xl mt-6">Donate Now</button>
          </div>
        </div>
      </div>
    </section>
    <!-- history section -->
    <section>
      <div class="space-y-3 p-4 rounded-2xl lg:p-8 border border-text-primary-text/10">
        <h2 class="font-bold
        text-xl text-primary-text"><span id="donated-amount">96500</span> Taka is Donated for <span class="donation-title">famine at Feni, Bangladesh</span></h2>
        <p class="font-light text-base text-primary-text/70">Date: <span id="donation-time">Tue Sep 17 2024 08:39:11 GMT +0600</span>(Bangladesh Standard Time)</p>
      </div>
    </section>
  </main>

<!-- toggle buttons -->
    <div class="flex justify-center gap-4 md:pb-8 pb-6 pt-10 md:pt-20">
      <button id="donation-toggle-btn" class="py-4 px-8 text-primary-text bg-primary-bg rounded-lg font-semibold text-xl">Donation</button>
      <button id="history-toggle-btn" class="py-4 px-8 text-primary-text/70 border border-primary-text/30 rounded-lg font-semibold text-xl">History</button>
    </div>