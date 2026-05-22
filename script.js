// Papers data - Update this with your papers
const papersData = [
    {
        title: "Classical Dipole Emission",
        description: "Fundamental exploration of dipole radiation in classical electrodynamics and its quantum mechanical implications.",
        link: "papers/theclassicaldipoleradiation.pdf"
    },
    {
        title: "Propagation of Pulses in Waveplates",
        description: "Detailed analysis of optical pulse propagation through birefringent waveplates with practical applications.",
        link: "papers/pulsepropagationinwaveplates.pdf"
    },
    {
        title: "BCS Theory: An ab initio Discussion",
        description: "From first principles: Understanding superconductivity through Bardeen-Cooper-Schrieffer theory.",
        link: "papers/bcsfinale-1.pdf"
    },
    {
        title: "Y-Gate and Spintronics",
        description: "Exploring quantum gates in spintronics and their applications in quantum computing.",
        link: "papers/ygate.pdf"
    },
    {
        title: "Preview High-Intensity Laser Book",
        description: "Comprehensive introduction to high-intensity laser physics and nonlinear optics.",
        link: "papers/hil.pdf"
    },
    {
        title: "Gas Jet Characterization with Fringe Analysis",
        description: "Experimental techniques for characterizing gas jets using interference fringe patterns.",
        link: "papers/gasjetcharacterization.pdf"
    },
    {
        title: "On Semiclassical Light-Matter Interaction",
        description: "Bridging classical and quantum descriptions of light interacting with matter systems.",
        link: "papers/on-light-matter-quantum-interaction.pdf"
    },
    {
        title: "The Conundrum of sqrt(−1) = i",
        description: "A deep dive into complex numbers, imaginary units, and their mathematical foundations.",
        link: "papers/i__imaginary_units.pdf"
    }
];

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderPapers();
    setupNavigation();
});

/**
 * Render papers grid dynamically
 */
function renderPapers() {
    const papersGrid = document.getElementById('papersGrid');
    
    papersGrid.innerHTML = papersData.map((paper, index) => `
        <div class="paper-card fade-in">
            <div class="paper-header">
                <span class="paper-number">Paper ${index + 1}</span>
                <h3 class="paper-title">${paper.title}</h3>
            </div>
            <div class="paper-content">
                <p class="paper-description">${paper.description}</p>
                <a href="${paper.link}" target="_blank" class="paper-link">Read Paper</a>
            </div>
        </div>
    `).join('');
}

/**
 * Setup navigation smooth scrolling and active link highlighting
 */
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    // Handle nav link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            link.classList.add('active');
            
            // Smooth scroll to section
            const sectionId = link.getAttribute('data-section');
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === current) {
                link.classList.add('active');
            }
        });
    });
}

/**
 * Scroll to top utility function
 */
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Expose globally for potential use in HTML
window.scrollToSection = scrollToSection;
