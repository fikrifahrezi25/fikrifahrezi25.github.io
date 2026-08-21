// Featured Certificates IDs
const featuredCertificateIds = [
    "mtcna",
    "mtcna-training",
    "excel",
    "juara2-network",
    "lks-sulsel"
];

// Certificates Data (sorted by date, newest first)
const certificates = [
    {
        title: "Using the Google Cloud Speech API",
        publisher: "Google",
        issued: "Aug 2026",
        img: "src/img/sertifikat/sugwT79SbI2u2hS9K4Pxd_Xn7aFbHvZhTPhy4LaCMQg=.png",
        url: "https://www.skills.google/public_profiles/fd4c131f-a544-4151-b6d9-e9507426290f/badges/27069004"
    },
    {
        title: "Explore Generative AI with the Vertex AI Gemini API",
        publisher: "Google",
        issued: "Aug 2026",
        img: "src/img/sertifikat/93oxTTP4eA9mlPV5pq4suSPVJLXtncOFGkeB6SNe2Yk=.png",
        url: "https://www.skills.google/public_profiles/fd4c131f-a544-4151-b6d9-e9507426290f/badges/27017509"
    },
    {
        title: "Analyze Images with the Cloud Vision API",
        publisher: "Google",
        issued: "Aug 2026",
        img: "src/img/sertifikat/Vs_tJZhYzE6dd3YNzb6wUuDBOe2n1LLSlR_KyP9U4RA=.png",
        url: "https://www.skills.google/public_profiles/fd4c131f-a544-4151-b6d9-e9507426290f/badges/26967295"
    },
    {
        title: "Deploy and Manage Applications on Google App Engine",
        publisher: "Google",
        issued: "Aug 2026",
        img: "src/img/sertifikat/5AR_b6_l0WzsY2Prm+Ku74NK9ZmWBTsq3N7b1MXmaeQ=.png",
        url: "https://www.skills.google/public_profiles/fd4c131f-a544-4151-b6d9-e9507426290f/badges/26951576"
    },
    {
        title: "Implement Event-Driven Messaging and Automation Workflows",
        publisher: "Google",
        issued: "Aug 2026",
        img: "src/img/sertifikat/N+xUAUCI22RMSyUybS+NuGwQo7kggIF2ncKAD+sqBeU=.png",
        url: "https://www.skills.google/public_profiles/fd4c131f-a544-4151-b6d9-e9507426290f/badges/26868532"
    },
    {
        title: "The Basics of Google Cloud Compute",
        publisher: "Google",
        issued: "Aug 2026",
        img: "src/img/sertifikat/9lB99Ij+Mz_yOV0484V995beQHBMMCw0kimBFfZVtcM=.png",
        url: "https://www.skills.google/public_profiles/fd4c131f-a544-4151-b6d9-e9507426290f/badges/26850660"
    },
    {
        title: "Enterprise Agents and Use Cases",
        publisher: "Google",
        issued: "Aug 2026",
        img: "src/img/sertifikat/aTjhs5m5cTkVfzh0IZFyDOQVEKJeA5v7JVJAGY8rQHs=.png",
        url: "https://www.skills.google/public_profiles/fd4c131f-a544-4151-b6d9-e9507426290f/badges/26809748"
    },
    {
        title: "Agent Fundamentals",
        publisher: "Google",
        issued: "Aug 2026",
        img: "src/img/sertifikat/zkcJY9WALwxdxDTSfAes7Fg_SPeOc5vNo3tsdoqYXRI=.png",
        url: "https://www.skills.google/public_profiles/fd4c131f-a544-4151-b6d9-e9507426290f/badges/26809666"
    },
    {
        title: "Develop AI-powered Prototypes in Google AI Studio",
        publisher: "Google",
        issued: "Aug 2026",
        img: "src/img/sertifikat/XemqcUvTQE65dglOn1zBWtA5uhoWQulCF+Y82SW_njA=.png",
        url: "https://www.skills.google/public_profiles/fd4c131f-a544-4151-b6d9-e9507426290f/badges/26809243"
    },
    {
        title: "Create Your First Gemini Enterprise Application",
        publisher: "Google",
        issued: "Aug 2026",
        img: "src/img/sertifikat/bSKLD54c2dCljHEdHxXCS28Mp_c6FDrHsiAeEtGQAWY=.png",
        url: "https://www.skills.google/public_profiles/fd4c131f-a544-4151-b6d9-e9507426290f/badges/26807201"
    },
    {
        title: "AI Productivity and AI API Integration for Developers",
        publisher: "Hacktiv8 Indonesia",
        issued: "Apr 2026",
        img: "src/img/sertifikat/1782996408750.jpeg",
        url: "https://students.hacktiv8.com/certificates/aa9df8fc-3e38-4c58-af7d-b4524e37a170"
    },
    {
        title: "Intro to Software Engineering",
        publisher: "RevoU",
        issued: "Apr 2026",
        img: "src/img/sertifikat/1782996276665.jpeg",
        url: null
    },
    {
        title: "Introduction to Data Science with Python",
        publisher: "DQLab",
        issued: "Jul 2025",
        img: "src/img/sertifikat/1753494356908.jpeg",
        url: "https://academy.dqlab.id/Certificate_check/result/DQLABINTP1ISMNKD"
    },
    {
        title: "Webinar Kuliah Subuh: Cyber Security & Ethical Hacking",
        publisher: "ITTS",
        issued: "Mar 2025",
        img: "src/img/sertifikat/1741955925135.jpeg",
        url: null
    },
    {
        title: "Osint & Masint Untuk Investigasi Jurnalistik",
        publisher: "Merdeka Siber Academy",
        issued: "Jan 2025",
        img: "src/img/sertifikat/1737364721926.jpeg",
        url: null
    },
    {
        title: "Membangun Karir Cybersecurity Melalui CTF",
        publisher: "Merdeka Siber Academy",
        issued: "Jan 2025",
        img: "src/img/sertifikat/1736999312534.jpeg",
        url: null
    },
    {
        id: "juara2-network",
        title: "Juara 2 Lomba Network Administration",
        publisher: "Electro Invention Race",
        issued: "Dec 2024",
        img: "src/img/sertifikat/1735650293245.jpeg",
        url: null
    },
    {
        id: "mtcna",
        title: "MikroTik Certified Network Associate",
        publisher: "MikroTik",
        issued: "Nov 2024",
        img: "src/img/sertifikat/MTCNA.png",
        url: "https://mikrotik.com/training/certificates/c382817c439a139272c5"
    },
    {
        id: "mtcna-training",
        title: "MikroTik MTCNA + Exam Training",
        publisher: "ID-Networkers",
        issued: "Nov 2024",
        img: "src/img/sertifikat/1732950480415.jpeg",
        url: null
    },
    {
        title: "Network Fundamental",
        publisher: "ID-Networkers",
        issued: "Nov 2024",
        img: "src/img/sertifikat/1732950428493.jpeg",
        url: "https://lms.idn.id/certificates/sertifikat-jaringan-komputer-dasar/?course_id=180&cert-nonce=1b355b9bad"
    },
    {
        title: "MikroTik Fundamental",
        publisher: "ID-Networkers",
        issued: "Nov 2024",
        img: "src/img/sertifikat/1732950238634.jpeg",
        url: "https://lms.idn.id/certificates/sertifikat-mikrotik-dasar/?course_id=182&cert-nonce=6fd99b2230"
    },
    {
        id: "excel",
        title: "Microsoft Excel Associate",
        publisher: "Microsoft",
        issued: "Aug 2024",
        img: "src/img/sertifikat/image.png",
        url: "https://www.certiport.com/portal/pages/credentialverification.aspx"
    },
    {
        title: "Linux Fundamental",
        publisher: "Aguna Course",
        issued: "Jun 2024",
        img: "src/img/sertifikat/1736998809778.png",
        url: "https://agunacourse.com/cek-sertifikat?search="
    },
    {
        id: "lks-sulsel",
        title: "LKS Provinsi Sulawesi Selatan",
        publisher: "LKS SMK",
        issued: "May 2024",
        img: "src/img/sertifikat/1732950530926.jpeg",
        url: null
    },
    {
        title: "Windows Server 2019 Administration",
        publisher: "Udemy",
        issued: "May 2024",
        img: "src/img/sertifikat/UC-42fde9c7-4550-438c-8a60-88f7d5be1049.jpg",
        url: "https://www.udemy.com/certificate/UC-42fde9c7-4550-438c-8a60-88f7d5be1049/"
    },
    {
        title: "CCNA Networking Essentials",
        publisher: "Udemy",
        issued: "May 2024",
        img: "src/img/sertifikat/UC-e8ff8281-b3f9-487f-af6c-eeee3611b5c7.jpg",
        url: "https://www.udemy.com/certificate/UC-e8ff8281-b3f9-487f-af6c-eeee3611b5c7/"
    }
];

// Command Palette Commands
const commands = [
    { title: "Go to Projects", action: () => scrollToSection('projects'), icon: "📁" },
    { title: "Go to Certificates", action: () => scrollToSection('certificates'), icon: "🎓" },
    { title: "Go to Skills", action: () => scrollToSection('skills'), icon: "⚡" },
    { title: "Go to About", action: () => scrollToSection('about'), icon: "👤" },
    { title: "Contact Me", action: () => scrollToSection('contact'), icon: "📧" },
    { title: "Toggle Theme", action: () => toggleTheme(), icon: "🌙" },
    { title: "Open Terminal", action: () => openTerminal(), icon: "💻" }
];

// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const commandPalette = document.getElementById('commandPalette');
const commandInput = document.getElementById('commandInput');
const commandResults = document.getElementById('commandResults');
const terminal = document.getElementById('terminal');
const terminalBody = document.getElementById('terminalBody');
const terminalInput = document.getElementById('terminalInput');
const terminalClose = document.getElementById('terminalClose');
const openTerminalBtn = document.getElementById('openTerminal');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadFeaturedCertificates();
    loadCertificates();
    setupEventListeners();
    setupIntersectionObserver();
});

// Load Featured Certificates
function loadFeaturedCertificates() {
    const featuredGrid = document.getElementById('featuredCertificatesGrid');
    
    const featuredCerts = certificates.filter(cert => 
        featuredCertificateIds.includes(cert.id)
    );
    
    featuredCerts.forEach(cert => {
        const card = createCertificateCard(cert, true);
        featuredGrid.appendChild(card);
    });
}

// Load All Certificates
function loadCertificates() {
    const certificatesGrid = document.getElementById('certificatesGrid');
    
    certificates.forEach(cert => {
        const card = createCertificateCard(cert, false);
        certificatesGrid.appendChild(card);
    });
}

// Create Certificate Card
function createCertificateCard(cert, isFeatured = false) {
    const card = document.createElement('div');
    card.className = isFeatured ? 'certificate-card featured-certificate-card' : 'certificate-card';
    
    const hasUrl = cert.url !== null && cert.url !== '-';
    
    card.innerHTML = `
        <div class="certificate-image">
            <img src="${cert.img}" alt="${cert.title}" loading="lazy">
            ${isFeatured ? '<div class="featured-badge">Featured</div>' : ''}
        </div>
        <div class="certificate-content">
            <h3 class="certificate-title">${cert.title}</h3>
            <p class="certificate-publisher">${cert.publisher}</p>
            <p class="certificate-date">${cert.issued}</p>
            ${hasUrl 
                ? `<a href="${cert.url}" target="_blank" class="certificate-link">View Certificate →</a>`
                : `<span class="certificate-link disabled">No Link Available</span>`
            }
        </div>
    `;
    
    return card;
}

// Setup Event Listeners
function setupEventListeners() {
    // Theme Toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Command Palette
    document.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            toggleCommandPalette();
        }
        if (e.key === 'Escape') {
            closeCommandPalette();
        }
    });
    
    commandPalette.addEventListener('click', (e) => {
        if (e.target === commandPalette) {
            closeCommandPalette();
        }
    });
    
    commandInput.addEventListener('input', handleCommandSearch);
    
    // Terminal
    openTerminalBtn.addEventListener('click', openTerminal);
    terminalClose.addEventListener('click', closeTerminal);
    terminalInput.addEventListener('keydown', handleTerminalCommand);
    
    // Mobile Menu
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
    
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Theme Toggle
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.body.classList.remove('dark-mode');
}

// Command Palette
function toggleCommandPalette() {
    commandPalette.classList.toggle('active');
    if (commandPalette.classList.contains('active')) {
        commandInput.value = '';
        commandInput.focus();
        displayCommands(commands);
    }
}

function closeCommandPalette() {
    commandPalette.classList.remove('active');
}

function handleCommandSearch(e) {
    const query = e.target.value.toLowerCase();
    const filtered = commands.filter(cmd => 
        cmd.title.toLowerCase().includes(query)
    );
    displayCommands(filtered);
}

function displayCommands(cmds) {
    commandResults.innerHTML = '';
    cmds.forEach(cmd => {
        const item = document.createElement('div');
        item.className = 'command-item';
        item.innerHTML = `
            <span class="command-item-icon">${cmd.icon}</span>
            <span>${cmd.title}</span>
        `;
        item.addEventListener('click', () => {
            cmd.action();
            closeCommandPalette();
        });
        commandResults.appendChild(item);
    });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Terminal
function openTerminal() {
    terminal.classList.add('active');
    terminalInput.focus();
}

function closeTerminal() {
    terminal.classList.remove('active');
}

function handleTerminalCommand(e) {
    if (e.key === 'Enter') {
        const command = terminalInput.value.trim();
        if (command) {
            addTerminalLine(`$ ${command}`);
            executeTerminalCommand(command);
            terminalInput.value = '';
        }
    }
}

function addTerminalLine(text) {
    const line = document.createElement('div');
    line.className = 'terminal-line';
    line.textContent = text;
    terminalBody.appendChild(line);
    terminalBody.scrollTop = terminalBody.scrollHeight;
}

function executeTerminalCommand(command) {
    const cmd = command.toLowerCase();
    
    switch(cmd) {
        case 'help':
            addTerminalLine('Available commands:');
            addTerminalLine('  whoami    - Display information about me');
            addTerminalLine('  projects  - List my projects');
            addTerminalLine('  skills    - List my skills');
            addTerminalLine('  contact   - Show contact information');
            addTerminalLine('  clear     - Clear terminal');
            break;
            
        case 'whoami':
            addTerminalLine('> Muhammad Fikri Fahrezi');
            addTerminalLine('> Informatics Student');
            addTerminalLine('> Developer');
            addTerminalLine('> AI Enthusiast');
            break;
            
        case 'projects':
            addTerminalLine('→ JadiKelas.tech');
            addTerminalLine('→ ExodusAI');
            addTerminalLine('→ TemanDuit AI');
            addTerminalLine('→ Tiboty Ronaldo');
            break;
            
        case 'skills':
            addTerminalLine('→ JavaScript, TypeScript, Python');
            addTerminalLine('→ Node.js, Express.js');
            addTerminalLine('→ AI API Integration');
            addTerminalLine('→ MikroTik, Networking');
            addTerminalLine('→ Linux, Cybersecurity');
            break;
            
        case 'contact':
            addTerminalLine('→ GitHub: github.com/yourusername');
            addTerminalLine('→ LinkedIn: linkedin.com/in/yourusername');
            addTerminalLine('→ Email: your-email@example.com');
            break;
            
        case 'clear':
            terminalBody.innerHTML = '';
            break;
            
        default:
            addTerminalLine(`Command not found: ${command}`);
            addTerminalLine('Type "help" for available commands');
    }
}

// Mobile Menu
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
}

// Intersection Observer for animations
function setupIntersectionObserver() {
    const options = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, options);
    
    // Observe all cards and sections
    document.querySelectorAll('.project-card, .certificate-card, .skill-category, .about-card').forEach(el => {
        observer.observe(el);
    });
}

// Active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);
        
        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.style.color = 'var(--accent)';
            } else {
                navLink.style.color = 'var(--text-secondary)';
            }
        }
    });
});
