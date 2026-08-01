/* ============================================
   ARESTOPRANAV - 2026 Astronomy Calendar
   JavaScript Application
   ============================================ */

const astronomyEvents = [
  { date: "2026-01-03", name: "Quadrantids Meteor Shower Peak", category: "meteor", description: "One of the best annual meteor showers with up to 120 meteors per hour. Originating from asteroid 2003 EH1.", visibility: "Northern Hemisphere", bestTime: "After midnight", location: "Worldwide (Best: Northern Hemisphere)", tips: "Find a dark location away from city lights. Look towards the constellation Boötes.", icon: "🌠" },
  { date: "2026-01-06", name: "Earth at Perihelion", category: "planet", description: "Earth reaches its closest point to the Sun at 147 million km.", visibility: "Worldwide", bestTime: "All day", location: "Worldwide", tips: "Earth is about 3% closer to the Sun than at aphelion.", icon: "☀️" },
  { date: "2026-01-14", name: "Full Moon - Wolf Moon", category: "moon", description: "The first full moon of 2026. Known as the Wolf Moon by Native American tribes.", visibility: "Worldwide", bestTime: "All night", location: "Worldwide", tips: "Best viewed with binoculars or a small telescope.", icon: "🌕" },
  { date: "2026-01-29", name: "New Moon", category: "moon", description: "The Moon is between Earth and the Sun, making it invisible from Earth.", visibility: "Worldwide", bestTime: "All night", location: "Worldwide", tips: "Best time for deep sky observing - no moonlight interference.", icon: "🌑" },
  { date: "2026-02-12", name: "Full Moon - Snow Moon", category: "moon", description: "The February full moon, named for the heavy snowfall typical of this month.", visibility: "Worldwide", bestTime: "All night", location: "Worldwide", tips: "Great for lunar photography.", icon: "🌕" },
  { date: "2026-02-17", name: "Annular Solar Eclipse", category: "eclipse", description: "A ring of fire solar eclipse visible across Antarctica and the southern Pacific Ocean.", visibility: "Antarctica, Southern Pacific", bestTime: "Varies by location", location: "Antarctica, Southern Pacific", tips: "Use proper solar filters. Never look directly at the Sun.", icon: "🌑" },
  { date: "2026-02-20", name: "Venus at Greatest Western Elongation", category: "planet", description: "Venus reaches its greatest separation from the Sun in the morning sky.", visibility: "Worldwide", bestTime: "Before sunrise", location: "Worldwide", tips: "Look low in the eastern sky before dawn. Venus will be very bright.", icon: "⭐" },
  { date: "2026-02-27", name: "New Moon", category: "moon", description: "Dark skies perfect for observing faint deep sky objects.", visibility: "Worldwide", bestTime: "All night", location: "Worldwide", tips: "Ideal time for galaxy and nebula observation.", icon: "🌑" },
  { date: "2026-03-03", name: "Total Lunar Eclipse", category: "eclipse", description: "The Moon passes through Earth's shadow, turning a dramatic red color. Visible across Asia, Australia, Pacific, Americas.", visibility: "Asia, Australia, Pacific, Americas", bestTime: "Late night/Early morning", location: "Asia, Australia, Pacific, Americas", tips: "No equipment needed. Best viewed from a dark location with a clear eastern horizon.", icon: "🌕" },
  { date: "2026-03-14", name: "Full Moon - Worm Moon", category: "moon", description: "The March full moon, named for the earthworms that appear as the ground thaws.", visibility: "Worldwide", bestTime: "All night", location: "Worldwide", tips: "Spring equinox is near - days and nights are nearly equal.", icon: "🌕" },
  { date: "2026-03-20", name: "March Equinox", category: "planet", description: "The Sun crosses the celestial equator. Day and night are approximately equal in length worldwide.", visibility: "Worldwide", bestTime: "All day", location: "Worldwide", tips: "Marks the beginning of spring in the Northern Hemisphere and autumn in the Southern Hemisphere.", icon: "🌍" },
  { date: "2026-03-22", name: "Mercury at Greatest Eastern Elongation", category: "planet", description: "Mercury reaches its greatest separation from the Sun in the evening sky.", visibility: "Worldwide", bestTime: "After sunset", location: "Worldwide", tips: "Look low in the western sky just after sunset.", icon: "☿️" },
  { date: "2026-03-28", name: "New Moon", category: "moon", description: "Dark skies for deep sky observation.", visibility: "Worldwide", bestTime: "All night", location: "Worldwide", tips: "Perfect for observing the Virgo Galaxy Cluster.", icon: "🌑" },
  { date: "2026-04-07", name: "Jupiter at Opposition", category: "planet", description: "Jupiter is at its closest approach to Earth and fully illuminated by the Sun. Best viewing of the year.", visibility: "Worldwide", bestTime: "All night", location: "Worldwide", tips: "Use binoculars to see Jupiter's four largest moons. A telescope reveals cloud bands and the Great Red Spot.", icon: "🪐" },
  { date: "2026-04-13", name: "Full Moon - Pink Moon", category: "moon", description: "Named after pink wildflowers (phlox) that bloom in spring.", visibility: "Worldwide", bestTime: "All night", location: "Worldwide", tips: "Not actually pink in color - named after spring flowers.", icon: "🌕" },
  { date: "2026-04-22", name: "Lyrids Meteor Shower Peak", category: "meteor", description: "Medium meteor shower with about 20 meteors per hour. Dust from Comet C/1861 G1 Thatcher.", visibility: "Worldwide", bestTime: "After midnight", location: "Worldwide", tips: "Look towards the constellation Lyra. Best viewed from dark locations.", icon: "🌠" },
  { date: "2026-04-26", name: "New Moon", category: "moon", description: "Dark skies for deep sky observation.", visibility: "Worldwide", bestTime: "All night", location: "Worldwide", tips: "Great for observing the Whirlpool Galaxy (M51).", icon: "🌑" },
  { date: "2026-05-06", name: "Eta Aquariids Meteor Shower Peak", category: "meteor", description: "Excellent meteor shower with up to 60 meteors per hour. Debris from Halley's Comet.", visibility: "Southern Hemisphere (Best)", bestTime: "Before dawn", location: "Worldwide (Best: Southern Hemisphere)", tips: "Look towards the constellation Aquarius. Best viewed from dark locations before dawn.", icon: "🌠" },
  { date: "2026-05-12", name: "Full Moon - Flower Moon", category: "moon", description: "Named for the abundance of flowers blooming in May.", visibility: "Worldwide", bestTime: "All night", location: "Worldwide", tips: "Spring flowers are in full bloom - great for moonrise photography.", icon: "🌕" },
  { date: "2026-05-14", name: "Saturn at Opposition", category: "planet", description: "Saturn is at its closest approach to Earth and fully illuminated. Best viewing of the year.", visibility: "Worldwide", bestTime: "All night", location: "Worldwide", tips: "A telescope reveals Saturn's magnificent rings. Even binoculars show its elongated shape.", icon: "🪐" },
  { date: "2026-05-22", name: "Mercury at Greatest Western Elongation", category: "planet", description: "Mercury reaches its greatest separation from the Sun in the morning sky.", visibility: "Worldwide", bestTime: "Before sunrise", location: "Worldwide", tips: "Look low in the eastern sky before dawn.", icon: "☿️" },
  { date: "2026-05-26", name: "New Moon", category: "moon", description: "Dark skies for deep sky observation.", visibility: "Worldwide", bestTime: "All night", location: "Worldwide", tips: "Perfect for observing the Sombrero Galaxy (M104).", icon: "🌑" },
  { date: "2026-06-06", name: "Venus at Inferior Conjunction", category: "planet", description: "Venus passes between Earth and the Sun, transitioning from morning to evening star.", visibility: "Worldwide", bestTime: "Not visible", location: "Worldwide", tips: "Venus will reappear in the evening sky later in the month.", icon: "⭐" },
  { date: "2026-06-11", name: "Full Moon - Strawberry Moon", category: "moon", description: "Named by Algonquin tribes for the strawberry harvesting season.", visibility: "Worldwide", bestTime: "All night", location: "Worldwide", tips: "The lowest full moon of the year for the Northern Hemisphere.", icon: "🌕" },
  { date: "2026-06-21", name: "June Solstice", category: "planet", description: "The longest day of the year in the Northern Hemisphere and shortest in the Southern Hemisphere.", visibility: "Worldwide", bestTime: "All day", location: "Worldwide", tips: "Marks the beginning of summer in the Northern Hemisphere.", icon: "☀️" },
  { date: "2026-06-24", name: "New Moon", category: "moon", description: "Dark skies for deep sky observation.", visibility: "Worldwide", bestTime: "All night", location: "Worldwide", tips: "Great for observing the Hercules Globular Cluster (M13).", icon: "🌑" },
  { date: "2026-06-27", name: "June Bootids Meteor Shower", category: "meteor", description: "Variable meteor shower with occasional outbursts. Debris from Comet 7P/Pons-Winnecke.", visibility: "Northern Hemisphere", bestTime: "Evening", location: "Northern Hemisphere", tips: "Look towards the constellation Boötes in the evening.", icon: "🌠" },
  { date: "2026-07-05", name: "Earth at Aphelion", category: "planet", description: "Earth reaches its farthest point from the Sun at 152 million km.", visibility: "Worldwide", bestTime: "All day", location: "Worldwide", tips: "Earth is about 3% farther from the Sun than at perihelion.", icon: "🌍" },
  { date: "2026-07-10", name: "Full Moon - Buck Moon", category: "moon", description: "Named for the time when male deer (bucks) begin to grow new antlers.", visibility: "Worldwide", bestTime: "All night", location: "Worldwide", tips: "Summer skies - warm nights perfect for observing.", icon: "🌕" },
  { date: "2026-07-12", name: "Mars at Opposition", category: "planet", description: "Mars is at its closest approach to Earth and fully illuminated. Best viewing of the year.", visibility: "Worldwide", bestTime: "All night", location: "Worldwide", tips: "A telescope reveals surface features like Syrtis Major and polar ice caps.", icon: "🔴" },
  { date: "2026-07-24", name: "New Moon", category: "moon", description: "Dark skies for deep sky observation.", visibility: "Worldwide", bestTime: "All night", location: "Worldwide", tips: "Perfect for observing the Summer Milky Way.", icon: "🌑" },
  { date: "2026-07-28", name: "Delta Aquariids Meteor Shower Peak", category: "meteor", description: "Long meteor shower with about 20 meteors per hour. Debris from Comet 96P/Machholz.", visibility: "Southern Hemisphere (Best)", bestTime: "After midnight", location: "Worldwide (Best: Southern Hemisphere)", tips: "Look towards the constellation Aquarius. Best viewed from dark locations.", icon: "🌠" },
  { date: "2026-07-30", name: "Alpha Capricornids Meteor Shower", category: "meteor", description: "Weak but spectacular meteor shower with bright fireballs. Debris from Comet 169P/NEAT.", visibility: "Worldwide", bestTime: "After midnight", location: "Worldwide", tips: "Look towards the constellation Capricornus. Known for bright, long-lasting fireballs.", icon: "🌠" },
  { date: "2026-08-01", name: "Saturn at Opposition", category: "planet", description: "Saturn at its brightest and closest for 2026.", visibility: "Worldwide", bestTime: "All night", location: "Worldwide", tips: "The rings are tilted at about 12 degrees - excellent for viewing.", icon: "🪐" },
  { date: "2026-08-09", name: "Full Moon - Sturgeon Moon", category: "moon", description: "Named by Native American tribes for the large sturgeon fish caught in August.", visibility: "Worldwide", bestTime: "All night", location: "Worldwide", tips: "Summer's last major full moon.", icon: "🌕" },
  { date: "2026-08-12", name: "Perseids Meteor Shower Peak", category: "meteor", description: "The best meteor shower of the year with up to 100 meteors per hour. Debris from Comet Swift-Tuttle.", visibility: "Northern Hemisphere (Best)", bestTime: "After midnight", location: "Worldwide (Best: Northern Hemisphere)", tips: "Find a dark location away from city lights. Look towards the constellation Perseus. Bring a reclining chair.", icon: "🌠" },
  { date: "2026-08-22", name: "New Moon", category: "moon", description: "Dark skies for deep sky observation.", visibility: "Worldwide", bestTime: "All night", location: "Worldwide", tips: "Great for observing the Andromeda Galaxy (M31).", icon: "🌑" },
  { date: "2026-08-27", name: "Neptune at Opposition", category: "planet", description: "Neptune is at its closest approach to Earth and fully illuminated.", visibility: "Worldwide", bestTime: "All night", location: "Worldwide", tips: "Requires a telescope to see. Look in the constellation Aquarius.", icon: "🔵" },
  { date: "2026-09-07", name: "Full Moon - Harvest Moon", category: "moon", description: "The full moon closest to the autumn equinox. Provides extra light for farmers harvesting crops.", visibility: "Worldwide", bestTime: "All night", location: "Worldwide", tips: "Rises shortly after sunset for several nights in a row.", icon: "🌕" },
  { date: "2026-09-21", name: "September Equinox", category: "planet", description: "The Sun crosses the celestial equator. Day and night are approximately equal worldwide.", visibility: "Worldwide", bestTime: "All day", location: "Worldwide", tips: "Marks the beginning of autumn in the Northern Hemisphere and spring in the Southern Hemisphere.", icon: "🌍" },
  { date: "2026-09-21", name: "New Moon", category: "moon", description: "Dark skies for deep sky observation.", visibility: "Worldwide", bestTime: "All night", location: "Worldwide", tips: "Perfect for observing the Pleiades star cluster (M45).", icon: "🌑" },
  { date: "2026-09-23", name: "Mercury at Greatest Eastern Elongation", category: "planet", description: "Mercury reaches its greatest separation from the Sun in the evening sky.", visibility: "Worldwide", bestTime: "After sunset", location: "Worldwide", tips: "Look low in the western sky just after sunset.", icon: "☿️" },
  { date: "2026-10-07", name: "Full Moon - Hunter's Moon", category: "moon", description: "Named for the time to hunt in preparation for winter.", visibility: "Worldwide", bestTime: "All night", location: "Worldwide", tips: "Like the Harvest Moon, rises shortly after sunset.", icon: "🌕" },
  { date: "2026-10-08", name: "Draconids Meteor Shower Peak", category: "meteor", description: "Variable meteor shower with occasional outbursts. Debris from Comet 21P/Giacobini-Zinner.", visibility: "Northern Hemisphere", bestTime: "Evening", location: "Northern Hemisphere", tips: "Look towards the constellation Draco in the early evening.", icon: "🌠" },
  { date: "2026-10-21", name: "Orionids Meteor Shower Peak", category: "meteor", description: "Medium meteor shower with about 20 meteors per hour. Debris from Halley's Comet.", visibility: "Worldwide", bestTime: "After midnight", location: "Worldwide", tips: "Look towards the constellation Orion. Best viewed from dark locations.", icon: "🌠" },
  { date: "2026-10-21", name: "New Moon", category: "moon", description: "Dark skies for deep sky observation.", visibility: "Worldwide", bestTime: "All night", location: "Worldwide", tips: "Great for observing the Orion Nebula (M42).", icon: "🌑" },
  { date: "2026-10-29", name: "Uranus at Opposition", category: "planet", description: "Uranus is at its closest approach to Earth and fully illuminated.", visibility: "Worldwide", bestTime: "All night", location: "Worldwide", tips: "Visible in binoculars as a small greenish dot. A telescope reveals its disk.", icon: "🪐" },
  { date: "2026-11-05", name: "Full Moon - Beaver Moon", category: "moon", description: "Named for the time beavers begin to build their winter dams.", visibility: "Worldwide", bestTime: "All night", location: "Worldwide", tips: "Last full moon before winter in the Northern Hemisphere.", icon: "🌕" },
  { date: "2026-11-12", name: "Venus at Greatest Eastern Elongation", category: "planet", description: "Venus reaches its greatest separation from the Sun in the evening sky.", visibility: "Worldwide", bestTime: "After sunset", location: "Worldwide", tips: "Look in the western sky after sunset. Venus will be very bright.", icon: "⭐" },
  { date: "2026-11-17", name: "Leonids Meteor Shower Peak", category: "meteor", description: "Famous meteor shower with fast, bright meteors. Debris from Comet 55P/Tempel-Tuttle.", visibility: "Worldwide", bestTime: "After midnight", location: "Worldwide", tips: "Look towards the constellation Leo. Known for occasional meteor storms.", icon: "🌠" },
  { date: "2026-11-20", name: "New Moon", category: "moon", description: "Dark skies for deep sky observation.", visibility: "Worldwide", bestTime: "All night", location: "Worldwide", tips: "Perfect for observing the Andromeda Galaxy and Triangulum Galaxy.", icon: "🌑" },
  { date: "2026-12-05", name: "Full Moon - Cold Moon", category: "moon", description: "The December full moon, named for the cold winter nights.", visibility: "Worldwide", bestTime: "All night", location: "Worldwide", tips: "The highest full moon of the year for the Northern Hemisphere.", icon: "🌕" },
  { date: "2026-12-13", name: "Geminids Meteor Shower Peak", category: "meteor", description: "The best meteor shower of the year with up to 120 multicolored meteors per hour. Debris from asteroid 3200 Phaethon.", visibility: "Worldwide", bestTime: "After midnight", location: "Worldwide", tips: "Find a dark location away from city lights. Look towards the constellation Gemini. Dress warmly!", icon: "🌠" },
  { date: "2026-12-21", name: "December Solstice", category: "planet", description: "The shortest day of the year in the Northern Hemisphere and longest in the Southern Hemisphere.", visibility: "Worldwide", bestTime: "All day", location: "Worldwide", tips: "Marks the beginning of winter in the Northern Hemisphere and summer in the Southern Hemisphere.", icon: "❄️" },
  { date: "2026-12-21", name: "Ursids Meteor Shower Peak", category: "meteor", description: "Minor meteor shower with about 10 meteors per hour. Debris from Comet 8P/Tuttle.", visibility: "Northern Hemisphere", bestTime: "After midnight", location: "Northern Hemisphere", tips: "Look towards the constellation Ursa Minor. A good reason to stay up late on the solstice!", icon: "🌠" },
  { date: "2026-12-25", name: "Christmas Day - Jupiter & Moon Conjunction", category: "conjunction", description: "A beautiful conjunction of Jupiter and the Moon in the evening sky.", visibility: "Worldwide", bestTime: "Evening", location: "Worldwide", tips: "Look in the southwestern sky after sunset. A great sight in binoculars.", icon: "🌙" },
  { date: "2026-12-28", name: "Full Moon", category: "moon", description: "The last full moon of 2026.", visibility: "Worldwide", bestTime: "All night", location: "Worldwide", tips: "A great way to end the astronomical year.", icon: "🌕" }
];

const newsData = [
  { date: "2026-01-15", title: "James Webb Telescope Discovers Ancient Galaxy Cluster", excerpt: "The JWST has identified a galaxy cluster dating back to just 600 million years after the Big Bang, challenging current cosmological models.", icon: "🔭" },
  { date: "2026-02-10", title: "SpaceX Starship Successfully Completes Mars Mission Test", excerpt: "SpaceX's Starship has completed a critical in-orbit refueling test, bringing human Mars missions one step closer to reality.", icon: "🚀" },
  { date: "2026-03-05", title: "New Exoplanet Found in Habitable Zone of Proxima Centauri", excerpt: "Astronomers have confirmed a second planet in the habitable zone of our nearest stellar neighbor, raising hopes for finding life.", icon: "🌍" },
  { date: "2026-04-20", title: "Artemis IV Mission Launches to Lunar Gateway", excerpt: "NASA's Artemis IV mission has successfully launched, carrying the first crew to the new Lunar Gateway space station.", icon: "🌙" },
  { date: "2026-05-15", title: "Gravitational Waves Detected from Neutron Star Merger", excerpt: "LIGO and Virgo have detected gravitational waves from the merger of two neutron stars, accompanied by a gamma-ray burst.", icon: "〰️" },
  { date: "2026-06-30", title: "ESA's JUICE Mission Arrives at Jupiter", excerpt: "The JUpiter ICy moons Explorer has entered orbit around Jupiter, beginning its detailed study of Europa, Ganymede, and Callisto.", icon: "🪐" }
];

const blogData = [
  { date: "2026-01-05", author: "ARESTOPRANAV Team", title: "Beginner's Guide to Meteor Shower Photography", excerpt: "Learn how to capture stunning meteor shower photos with any camera, from smartphones to DSLRs.", icon: "📸" },
  { date: "2026-02-14", author: "Dr. Sarah Chen", title: "Understanding Solar Eclipses: A Complete Guide", excerpt: "Everything you need to know about solar eclipses, from the science behind them to safe viewing practices.", icon: "🌑" },
  { date: "2026-03-22", author: "ARESTOPRANAV Team", title: "Top 10 Deep Sky Objects for Beginners", excerpt: "Discover the most beautiful and accessible galaxies, nebulae, and star clusters visible with small telescopes.", icon: "✨" },
  { date: "2026-04-18", author: "Prof. James Miller", title: "The Search for Extraterrestrial Intelligence in 2026", excerpt: "An update on SETI projects and the latest developments in the search for alien civilizations.", icon: "👽" },
  { date: "2026-05-30", author: "ARESTOPRANAV Team", title: "How to Choose Your First Telescope", excerpt: "A comprehensive buying guide for amateur astronomers looking to purchase their first telescope.", icon: "🔭" },
  { date: "2026-06-25", author: "Dr. Maria Rodriguez", title: "The Future of Space Tourism", excerpt: "Exploring the rapidly evolving landscape of commercial space travel and what it means for astronomy enthusiasts.", icon: "🚀" }
];

const faqData = [
  { question: "What is ARESTOPRANAV?", answer: "ARESTOPRANAV is a premium astronomy calendar website dedicated to helping stargazers, astronomers, and space enthusiasts discover and track every major astronomical event of 2026. We provide accurate dates, viewing tips, and detailed information about meteor showers, eclipses, moon phases, planetary events, and more." },
  { question: "How accurate is the astronomical data?", answer: "Our astronomical data is sourced from NASA, ESA, and other reputable space agencies and astronomical organizations. All event dates and times are calculated using precise orbital mechanics and are regularly updated to ensure accuracy." },
  { question: "Do I need special equipment to view these events?", answer: "Most astronomical events can be enjoyed with the naked eye. However, binoculars or a small telescope can enhance your viewing experience for planets, the Moon, and deep sky objects. Solar events ALWAYS require proper solar filters." },
  { question: "What is the best time to view meteor showers?", answer: "Meteor showers are best viewed after midnight when your location is facing the direction of Earth's orbital motion. Find a dark location away from city lights, allow your eyes 20-30 minutes to adapt to the dark, and lie back to see as much sky as possible." },
  { question: "How do I safely view a solar eclipse?", answer: "NEVER look directly at the Sun without proper solar filters. Use certified eclipse glasses or solar viewing filters. Regular sunglasses are NOT safe. You can also use pinhole projection methods to view the eclipse indirectly." },
  { question: "What is a supermoon?", answer: "A supermoon occurs when a full moon or new moon coincides with the Moon's closest approach to Earth (perigee). This makes the Moon appear up to 14% larger and 30% brighter than a typical full moon." },
  { question: "Can I contribute to ARESTOPRANAV?", answer: "Yes! We welcome contributions from astronomy enthusiasts, photographers, and writers. Contact us through the contact page to learn more about collaboration opportunities." },
  { question: "Is the website free to use?", answer: "Yes, ARESTOPRANAV is completely free to use. We believe astronomical knowledge should be accessible to everyone. We may offer premium features in the future, but the core calendar will always remain free." }
];

const downloadsData = [
  { name: "2026 Astronomy Calendar PDF", description: "Complete printable calendar with all major astronomical events for 2026.", icon: "📅" },
  { name: "Observation Checklist", description: "Track your astronomical observations with this comprehensive checklist.", icon: "✅" },
  { name: "Meteor Shower Tracker", description: "Detailed tracker for all major meteor showers in 2026 with peak times and rates.", icon: "🌠" },
  { name: "Moon Phase Calendar", description: "Monthly moon phase calendar with rise and set times.", icon: "🌙" },
  { name: "Astronomy Wallpapers Pack", description: "High-resolution space wallpapers for your desktop and mobile devices.", icon: "🖼️" },
  { name: "Star Chart Guide", description: "Printable star charts for each season of 2026.", icon: "⭐" }
];

const missionsData = [
  { name: "Artemis IV", agency: "NASA", date: "2026-04", status: "Planned", description: "First crewed mission to the Lunar Gateway space station." },
  { name: "JUICE Jupiter Orbit Insertion", agency: "ESA", date: "2026-06", status: "Planned", description: "ESA's JUpiter ICy moons Explorer enters orbit around Jupiter." },
  { name: "Chandrayaan-4", agency: "ISRO", date: "2026-07", status: "Planned", description: "India's next lunar mission with sample return capabilities." },
  { name: "Viper Lunar Rover", agency: "NASA", date: "2026-09", status: "Planned", description: "Robotic mission to search for water ice at the Moon's south pole." },
  { name: "Europa Clipper", agency: "NASA", date: "2026-10", status: "Ongoing", description: "Jupiter orbiter studying Europa's subsurface ocean." },
  { name: "Hera Mission", agency: "ESA", date: "2026-12", status: "Ongoing", description: "Asteroid deflection test follow-up to DART mission." }
];

let currentPage = 'home', currentView = 'grid', currentMonth = new Date().getMonth() + 1;
let searchQuery = '', filterCategory = 'all', filterVisibility = 'all';

document.addEventListener('DOMContentLoaded', () => {
  initLoading();
  initTheme();
  initNavigation();
  initScrollEffects();
  initEventListeners();
  renderAllContent();
  generateStars();
});

function initLoading() {
  setTimeout(() => {
    document.querySelector('.loading-screen').classList.add('hidden');
  }, 1800);
}

function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

function initNavigation() {
  document.querySelectorAll('.nav-links a, .mobile-nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo(link.getAttribute('data-page'));
      closeMobileMenu();
    });
  });
  document.querySelector('.mobile-menu-btn').addEventListener('click', toggleMobileMenu);
  document.querySelector('.mobile-nav-overlay').addEventListener('click', closeMobileMenu);
  document.querySelector('.theme-toggle').addEventListener('click', toggleTheme);
  document.querySelector('.back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initScrollEffects() {
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    document.querySelector('.scroll-progress').style.width = (scrollTop / docHeight) * 100 + '%';
    document.querySelector('.navbar').classList.toggle('scrolled', scrollTop > 50);
    document.querySelector('.back-to-top').classList.toggle('visible', scrollTop > 500);
    animateOnScroll();
  });
}

function initEventListeners() {
  const searchInput = document.getElementById('event-search');
  if (searchInput) searchInput.addEventListener('input', (e) => { searchQuery = e.target.value.toLowerCase(); renderEvents(); });

  const catFilter = document.getElementById('category-filter');
  if (catFilter) catFilter.addEventListener('change', (e) => { filterCategory = e.target.value; renderEvents(); });

  const visFilter = document.getElementById('visibility-filter');
  if (visFilter) visFilter.addEventListener('change', (e) => { filterVisibility = e.target.value; renderEvents(); });

  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentView = btn.getAttribute('data-view');
      renderEvents();
    });
  });

  const monthSelect = document.getElementById('month-select');
  if (monthSelect) monthSelect.addEventListener('change', (e) => {
    currentMonth = parseInt(e.target.value);
    renderEvents();
    renderCalendarGrid();
  });

  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.parentElement;
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    });
  }
}

function navigateTo(page) {
  currentPage = page;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + page);
  if (target) target.classList.add('active');
  document.querySelectorAll('.nav-links a, .mobile-nav-links a').forEach(link => {
    link.classList.toggle('active', link.getAttribute('data-page') === page);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
  updatePageTitle(page);
}

function updatePageTitle(page) {
  const titles = {
    home: 'ARESTOPRANAV - 2026 Astronomy Calendar',
    calendar: 'Astronomy Calendar 2026 | ARESTOPRANAV',
    monthly: 'Monthly Events | ARESTOPRANAV',
    meteor: 'Meteor Showers 2026 | ARESTOPRANAV',
    'solar-eclipses': 'Solar Eclipses 2026 | ARESTOPRANAV',
    'lunar-eclipses': 'Lunar Eclipses 2026 | ARESTOPRANAV',
    'moon-phases': 'Moon Phases 2026 | ARESTOPRANAV',
    conjunctions: 'Planetary Conjunctions | ARESTOPRANAV',
    visibility: 'Planet Visibility | ARESTOPRANAV',
    supermoons: 'Supermoons 2026 | ARESTOPRANAV',
    comets: 'Comets | ARESTOPRANAV',
    asteroids: 'Asteroids | ARESTOPRANAV',
    'deep-sky': 'Deep Sky Events | ARESTOPRANAV',
    iss: 'ISS Pass Tracker | ARESTOPRANAV',
    news: 'Astronomy News | ARESTOPRANAV',
    missions: 'Space Missions | ARESTOPRANAV',
    'nasa-gallery': 'NASA Gallery | ARESTOPRANAV',
    'esa-gallery': 'ESA Gallery | ARESTOPRANAV',
    'isro-updates': 'ISRO Updates | ARESTOPRANAV',
    'live-sky': 'Live Sky Map | ARESTOPRANAV',
    constellations: 'Constellation Guide | ARESTOPRANAV',
    beginner: "Beginner's Astronomy | ARESTOPRANAV",
    blog: 'Astronomy Blog | ARESTOPRANAV',
    resources: 'Resources | ARESTOPRANAV',
    downloads: 'Downloads | ARESTOPRANAV',
    faq: 'FAQ | ARESTOPRANAV',
    about: 'About | ARESTOPRANAV',
    contact: 'Contact | ARESTOPRANAV',
    privacy: 'Privacy Policy | ARESTOPRANAV',
    terms: 'Terms & Conditions | ARESTOPRANAV',
    disclaimer: 'Disclaimer | ARESTOPRANAV'
  };
  document.title = titles[page] || 'ARESTOPRANAV';
}

function toggleMobileMenu() {
  document.querySelector('.mobile-menu-btn').classList.toggle('active');
  document.querySelector('.mobile-nav').classList.toggle('open');
  document.querySelector('.mobile-nav-overlay').classList.toggle('open');
  document.body.style.overflow = document.querySelector('.mobile-nav').classList.contains('open') ? 'hidden' : '';
}

function closeMobileMenu() {
  document.querySelector('.mobile-menu-btn').classList.remove('active');
  document.querySelector('.mobile-nav').classList.remove('open');
  document.querySelector('.mobile-nav-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const newTheme = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  document.querySelector('.theme-toggle').textContent = theme === 'dark' ? '☀️' : '🌙';
}

function animateOnScroll() {
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) el.classList.add('visible');
  });
}

function generateStars() {
  const container = document.querySelector('.hero-stars');
  if (!container) return;
  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 3 + 's';
    star.style.animationDuration = (2 + Math.random() * 3) + 's';
    container.appendChild(star);
  }
}

function renderAllContent() {
  renderStats();
  renderFeatures();
  renderEvents();
  renderNews();
  renderBlog();
  renderDownloads();
  renderFAQ();
  renderMissions();
  renderCalendarGrid();
  renderCategoryPages();
  animateOnScroll();
}

function renderStats() {
  const container = document.getElementById('stats-grid');
  if (!container) return;
  const stats = [
    { icon: '📅', number: '150+', label: '2026 Events' },
    { icon: '🌠', number: '12', label: 'Meteor Showers' },
    { icon: '🌑', number: '4', label: 'Eclipses' },
    { icon: '🌕', number: '13', label: 'Supermoons' },
    { icon: '☄️', number: '3', label: 'Comets' },
    { icon: '🪐', number: '20+', label: 'Planetary Events' }
  ];
  container.innerHTML = stats.map((s, i) => `
    <div class="stat-card animate-on-scroll" style="animation-delay:${i*0.1}s">
      <div class="stat-icon">${s.icon}</div>
      <div class="stat-number">${s.number}</div>
      <div class="stat-label">${s.label}</div>
    </div>`).join('');
}

function renderFeatures() {
  const container = document.getElementById('features-grid');
  if (!container) return;
  const features = [
    { icon: '🌠', title: 'Meteor Showers', description: 'Track all major meteor showers in 2026 with peak times, rates, and viewing tips.', page: 'meteor' },
    { icon: '🌙', title: 'Moon Phases', description: 'Complete lunar calendar with full moons, new moons, and special lunar events.', page: 'moon-phases' },
    { icon: '🪐', title: 'Planetary Alignment', description: 'Discover planetary conjunctions, oppositions, and visibility windows.', page: 'conjunctions' },
    { icon: '🌑', title: 'Eclipses', description: 'Solar and lunar eclipse dates, paths, and safe viewing guides.', page: 'solar-eclipses' },
    { icon: '🛰️', title: 'ISS Tracking', description: 'Track the International Space Station passes over your location.', page: 'iss' },
    { icon: '☄️', title: 'Comets', description: 'Follow visible comets and their trajectories through the night sky.', page: 'comets' },
    { icon: '✨', title: 'Deep Sky Objects', description: 'Explore galaxies, nebulae, and star clusters visible in 2026.', page: 'deep-sky' },
    { icon: '⭐', title: 'Constellations', description: 'Learn about constellations visible each season with star charts.', page: 'constellations' }
  ];
  container.innerHTML = features.map((f, i) => `
    <div class="feature-card animate-on-scroll" style="animation-delay:${i*0.1}s" onclick="navigateTo('${f.page}')">
      <div class="feature-icon">${f.icon}</div>
      <h3>${f.title}</h3>
      <p>${f.description}</p>
    </div>`).join('');
}

function renderEvents() {
  let filtered = astronomyEvents.filter(e => {
    const matchesSearch = !searchQuery || e.name.toLowerCase().includes(searchQuery) || e.description.toLowerCase().includes(searchQuery);
    const matchesCategory = filterCategory === 'all' || e.category === filterCategory;
    const matchesVisibility = filterVisibility === 'all' || e.visibility.toLowerCase().includes(filterVisibility.toLowerCase());
    const matchesMonth = !currentMonth || new Date(e.date).getMonth() + 1 === currentMonth;
    return matchesSearch && matchesCategory && matchesVisibility && matchesMonth;
  });
  filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
  const container = document.getElementById('events-container');
  if (!container) return;
  if (filtered.length === 0) {
    container.innerHTML = '<div style="text-align:center;padding:60px 20px;color:var(--text-muted)"><h3>No events found</h3><p>Try adjusting your filters or search query.</p></div>';
    return;
  }
  if (currentView === 'grid') {
    container.innerHTML = `<div class="events-grid">${filtered.map(e => createEventCard(e)).join('')}</div>`;
  } else if (currentView === 'timeline') {
    container.innerHTML = `<div class="timeline">${filtered.map(e => createTimelineItem(e)).join('')}</div>`;
  } else if (currentView === 'calendar') {
    renderCalendarGrid();
  }
}

function createEventCard(event) {
  const date = new Date(event.date);
  const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  return `
    <div class="event-card animate-on-scroll">
      <div class="event-image">${event.icon}</div>
      <div class="event-content">
        <span class="event-date">📅 ${dateStr}</span>
        <span class="event-category">${event.category}</span>
        <h3>${event.name}</h3>
        <p>${event.description}</p>
        <div class="event-meta">
          <span>👁️ ${event.visibility}</span>
          <span>⏰ ${event.bestTime}</span>
          <span>📍 ${event.location}</span>
        </div>
      </div>
    </div>`;
}

function createTimelineItem(event) {
  const date = new Date(event.date);
  const dateStr = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  return `
    <div class="timeline-item animate-on-scroll">
      <div class="timeline-date">${dateStr}</div>
      <h3>${event.icon} ${event.name}</h3>
      <p>${event.description}</p>
      <div class="event-meta" style="margin-top:12px;padding-top:12px;border-top:1px solid var(--border)">
        <span>👁️ ${event.visibility}</span>
        <span>⏰ ${event.bestTime}</span>
      </div>
    </div>`;
}

function renderCalendarGrid() {
  const container = document.getElementById('calendar-grid-container');
  if (!container) return;
  const year = 2026, month = currentMonth - 1;
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthEvents = astronomyEvents.filter(e => { const d = new Date(e.date); return d.getMonth() === month && d.getFullYear() === year; });
  let html = '<div class="calendar-grid">';
  ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].forEach(d => html += `<div class="calendar-header">${d}</div>`);
  for (let i = 0; i < firstDay; i++) html += '<div class="calendar-day" style="opacity:0.3"></div>';
  for (let day = 1; day <= daysInMonth; day++) {
    const dayEvents = monthEvents.filter(e => new Date(e.date).getDate() === day);
    const dots = dayEvents.map(e => `<div class="calendar-event-dot ${e.category}"></div>`).join('');
    html += `<div class="calendar-day"><div class="calendar-day-number">${day}</div><div class="calendar-day-events">${dots}</div></div>`;
  }
  html += '</div>';
  container.innerHTML = html;
}

function renderNews() {
  const container = document.getElementById('news-grid');
  if (!container) return;
  container.innerHTML = newsData.map((n, i) => `
    <div class="news-card animate-on-scroll" style="animation-delay:${i*0.1}s">
      <div class="news-image">${n.icon}</div>
      <div class="news-body">
        <div class="news-date">${new Date(n.date).toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'})}</div>
        <h3>${n.title}</h3>
        <p>${n.excerpt}</p>
        <a href="#" class="read-more">Read More →</a>
      </div>
    </div>`).join('');
}

function renderBlog() {
  const container = document.getElementById('blog-grid');
  if (!container) return;
  container.innerHTML = blogData.map((b, i) => `
    <div class="blog-card animate-on-scroll" style="animation-delay:${i*0.1}s">
      <div class="blog-image">${b.icon}</div>
      <div class="blog-body">
        <div class="blog-meta">
          <span>📅 ${new Date(b.date).toLocaleDateString('en-US',{month:'short',day:'numeric'})}</span>
          <span>✍️ ${b.author}</span>
        </div>
        <h3>${b.title}</h3>
        <p>${b.excerpt}</p>
        <a href="#" class="read-more">Read More →</a>
      </div>
    </div>`).join('');
}

function renderDownloads() {
  const container = document.getElementById('downloads-grid');
  if (!container) return;
  container.innerHTML = downloadsData.map((d, i) => `
    <div class="download-card animate-on-scroll" style="animation-delay:${i*0.1}s">
      <div class="download-icon">${d.icon}</div>
      <h3>${d.name}</h3>
      <p>${d.description}</p>
      <button class="btn btn-primary btn-sm" onclick="alert('Download starting...')">⬇️ Download</button>
    </div>`).join('');
}

function renderFAQ() {
  const container = document.getElementById('faq-list');
  if (!container) return;
  container.innerHTML = faqData.map((f, i) => `
    <div class="faq-item animate-on-scroll" style="animation-delay:${i*0.05}s">
      <div class="faq-question">${f.question}</div>
      <div class="faq-answer"><p>${f.answer}</p></div>
    </div>`).join('');
}

function renderMissions() {
  const container = document.getElementById('missions-grid');
  if (!container) return;
  container.innerHTML = missionsData.map((m, i) => `
    <div class="glass-card animate-on-scroll" style="animation-delay:${i*0.1}s">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px">
        <h3>${m.name}</h3>
        <span style="padding:4px 12px;background:rgba(10,132,255,0.1);color:var(--primary);border-radius:20px;font-size:0.75rem;font-weight:600">${m.status}</span>
      </div>
      <p style="color:var(--text-muted);margin-bottom:16px">${m.description}</p>
      <div class="event-meta" style="border-top:1px solid var(--border);padding-top:12px">
        <span>🏢 ${m.agency}</span>
        <span>📅 ${m.date}</span>
      </div>
    </div>`).join('');
}

function renderCategoryPages() {
  renderCategoryEvents('meteor-events', 'meteor');
  renderCategoryEvents('solar-eclipse-events', 'eclipse', e => e.name.toLowerCase().includes('solar'));
  renderCategoryEvents('lunar-eclipse-events', 'eclipse', e => e.name.toLowerCase().includes('lunar'));
  renderCategoryEvents('moon-phase-events', 'moon');
  renderCategoryEvents('conjunction-events', 'conjunction');
  renderCategoryEvents('planet-events', 'planet');
  renderCategoryEvents('comet-events', 'comet');
}

function renderCategoryEvents(containerId, category, customFilter) {
  const container = document.getElementById(containerId);
  if (!container) return;
  let filtered = astronomyEvents.filter(e => customFilter ? customFilter(e) : e.category === category);
  filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
  if (filtered.length === 0) {
    container.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-muted)"><p>No events found for this category.</p></div>';
    return;
  }
  container.innerHTML = filtered.map(e => createEventCard(e)).join('');
}

window.navigateTo = navigateTo;
