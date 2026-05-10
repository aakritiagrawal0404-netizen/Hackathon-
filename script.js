const features = [
    { icon: "🌍", title: "Poetic Journeys", desc: "Multi-city dreams woven with wonder" },
    { icon: "✨", title: "Untouched Realms", desc: "Secret paradises await" },
    { icon: "🌅", title: "Soulful Budgets", desc: "From just ₹1,35,000" },
    { icon: "📖", title: "Living Timelines", desc: "Your story, beautifully told" }
];

function renderFeatures() {
    document.getElementById('features-grid').innerHTML = features.map(f => `
        <div class="bg-white rounded-3xl p-10 feature-card">
            <div class="text-6xl mb-6">${f.icon}</div>
            <h4 class="text-2xl font-semibold mb-3">${f.title}</h4>
            <p class="text-zinc-600">${f.desc}</p>
        </div>
    `).join('');
}

// India Slideshow
let slideIndex = 0;
const indiaImages = [
    "https://i.pinimg.com/736x/fd/aa/75/fdaa75f0854b00753f0bd8a722676836.jpg",
    "https://i.pinimg.com/1200x/fb/0d/c8/fb0dc8bdd54b58a0721a0ba796e7eb26.jpg",
    "https://i.pinimg.com/736x/7e/3e/c5/7e3ec59f77d38c2b5989a16bcbc98155.jpg",
    "https://i.pinimg.com/1200x/cd/f1/85/cdf185f694b0c5bb79a0a36781d37b5d.jpg",
    "https://i.pinimg.com/736x/0f/79/85/0f79859e8a8385448d8d2019ea7695d2.jpg",
    "https://i.pinimg.com/736x/4e/e8/ac/4ee8ac3d8238d9904414153259435f2f.jpg",
    "https://i.pinimg.com/736x/1a/58/d0/1a58d008f908470d7ba7bc2ce2653416.jpg"
];

function changeSlide() {
    slideIndex = (slideIndex + 1) % indiaImages.length;
    document.getElementById('indiaSlideshow').style.backgroundImage = `url('${indiaImages[slideIndex]}')`;
}
setInterval(changeSlide, 6000);

function toggleLoginModal() {
    document.getElementById('loginModal').classList.toggle('hidden');
}

function fakeLogin() {
    alert("🌟 Welcome back to JourneyNest!\n\nYour soul journey continues...");
    toggleLoginModal();
}

function toggleTripModal() {
    alert("✨ New destination of wonder added to your odyssey!");
}

window.onload = renderFeatures;
async function signup() {

  const name = document.getElementById("name").value;

  const email = document.getElementById("email").value;

  const password = document.getElementById("password").value;

  const response = await fetch("http://localhost:5000/api/signup", {

    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify({
      name,
      email,
      password
    })

  });

  const data = await response.json();

  alert(data.message);

}
async function login() {

  const email = document.getElementById("email").value;

  const password = document.getElementById("password").value;

  const response = await fetch("http://localhost:5000/api/login", {

    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify({
      email,
      password
    })

  });

  const data = await response.json();

  localStorage.setItem("token", data.token);

  alert(data.message);

}