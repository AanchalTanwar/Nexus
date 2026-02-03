// Dummy Data
const companiesData = [
    {
        id: 1,
        name: 'Google',
        logo: 'G',
        color: '#4285F4',
        role: 'Software Development Engineer',
        ctc: '₹42 LPA',
        eligibility: 'CGPA > 8.0',
        difficulty: 'hard',
        type: 'tech',
        probability: 75,
        rounds: ['Resume Screening', 'Online Test', 'Technical Round 1', 'Technical Round 2', 'HR Round'],
        skills: ['DSA', 'System Design', 'Problem Solving'],
        deadline: 'Feb 15, 2026'
    },
    {
        id: 2,
        name: 'Microsoft',
        logo: 'M',
        color: '#00A4EF',
        role: 'SDE Intern',
        ctc: '₹1.2L/month',
        eligibility: 'All branches',
        difficulty: 'medium',
        type: 'tech',
        probability: 68,
        rounds: ['Resume Screening', 'Online Test', 'Technical Round', 'HR Round'],
        skills: ['C++', 'Data Structures', 'Algorithms'],
        deadline: 'Feb 12, 2026'
    },
    {
        id: 3,
        name: 'Amazon',
        logo: 'A',
        color: '#FF9900',
        role: 'SDE-1',
        ctc: '₹28 LPA',
        eligibility: 'CGPA > 7.5',
        difficulty: 'medium',
        type: 'tech',
        probability: 72,
        rounds: ['Resume Screening', 'Online Test', 'Technical Round 1', 'Technical Round 2', 'Bar Raiser'],
        skills: ['DSA', 'System Design', 'Leadership Principles'],
        deadline: 'Feb 18, 2026'
    },
    {
        id: 4,
        name: 'Goldman Sachs',
        logo: 'GS',
        color: '#0033A0',
        role: 'Analyst',
        ctc: '₹35 LPA',
        eligibility: 'CGPA > 8.5',
        difficulty: 'hard',
        type: 'consulting',
        probability: 58,
        rounds: ['Resume Screening', 'HireVue', 'Super Day'],
        skills: ['Finance', 'Problem Solving', 'Python'],
        deadline: 'Feb 10, 2026'
    },
    {
        id: 5,
        name: 'Flipkart',
        logo: 'F',
        color: '#2874F0',
        role: 'Software Engineer',
        ctc: '₹24 LPA',
        eligibility: 'CGPA > 7.0',
        difficulty: 'medium',
        type: 'startup',
        probability: 80,
        rounds: ['Resume Screening', 'Online Test', 'Technical Round', 'Hiring Manager Round'],
        skills: ['Java', 'Spring Boot', 'Microservices'],
        deadline: 'Feb 20, 2026'
    },
    {
        id: 6,
        name: 'Tata Motors',
        logo: 'TM',
        color: '#00457C',
        role: 'Graduate Engineer Trainee',
        ctc: '₹8.5 LPA',
        eligibility: 'Mechanical/Automobile',
        difficulty: 'easy',
        type: 'core',
        probability: 85,
        rounds: ['Resume Screening', 'Written Test', 'Technical Interview', 'HR Round'],
        skills: ['CAD', 'Manufacturing', 'Automotive'],
        deadline: 'Feb 25, 2026'
    },
    {
        id: 7,
        name: 'Infosys',
        logo: 'I',
        color: '#007CC3',
        role: 'Systems Engineer',
        ctc: '₹7.5 LPA',
        eligibility: 'All branches',
        difficulty: 'easy',
        type: 'tech',
        probability: 90,
        rounds: ['Online Test', 'Technical Interview', 'HR Interview'],
        skills: ['Programming', 'Communication', 'Problem Solving'],
        deadline: 'Feb 8, 2026'
    },
    {
        id: 8,
        name: 'Zomato',
        logo: 'Z',
        color: '#E23744',
        role: 'Product Engineer',
        ctc: '₹18 LPA',
        eligibility: 'CGPA > 7.5',
        difficulty: 'medium',
        type: 'startup',
        probability: 70,
        rounds: ['Resume Screening', 'Coding Test', 'Technical Round', 'Product Round'],
        skills: ['React', 'Node.js', 'System Design'],
        deadline: 'Feb 14, 2026'
    }
];

const calendarEvents = [
    { date: 5, month: 1, year: 2026, company: 'Infosys', type: 'Online Test', time: '10:00 AM' },
    { date: 8, month: 1, year: 2026, company: 'Google', type: 'Resume Deadline', time: '11:59 PM' },
    { date: 10, month: 1, year: 2026, company: 'Goldman Sachs', type: 'HireVue Interview', time: '2:00 PM' },
    { date: 12, month: 1, year: 2026, company: 'Microsoft', type: 'Online Test', time: '9:00 AM' },
    { date: 14, month: 1, year: 2026, company: 'Zomato', type: 'Coding Round', time: '3:00 PM' },
    { date: 15, month: 1, year: 2026, company: 'Google', type: 'Technical Round 1', time: '10:30 AM' },
    { date: 18, month: 1, year: 2026, company: 'Amazon', type: 'Online Test', time: '11:00 AM' },
    { date: 20, month: 1, year: 2026, company: 'Flipkart', type: 'Technical Interview', time: '4:00 PM' },
    { date: 25, month: 1, year: 2026, company: 'Tata Motors', type: 'Written Test', time: '9:00 AM' }
];

const communityPosts = {
    faang: [
        {
            author: 'Rahul Kumar',
            avatar: 'R',
            time: '2 hours ago',
            content: 'Just cleared Google\'s coding round! The questions were heavily focused on graph algorithms and dynamic programming. Happy to share my experience and prep strategy!',
            likes: 45,
            comments: 12
        },
        {
            author: 'Priya Sharma',
            avatar: 'P',
            time: '5 hours ago',
            content: 'Looking for study buddies for Amazon\'s upcoming drive. Planning to solve 2-3 DSA problems daily. Anyone interested?',
            likes: 28,
            comments: 8
        },
        {
            author: 'Arjun Patel',
            avatar: 'A',
            time: '1 day ago',
            content: 'System Design resources that helped me crack Meta interview: Grokking System Design, System Design Primer on GitHub, and designing real applications like Twitter and Instagram.',
            likes: 67,
            comments: 15
        }
    ],
    core: [
        {
            author: 'Vikram Singh',
            avatar: 'V',
            time: '3 hours ago',
            content: 'Tata Motors interview was great! They focused a lot on manufacturing processes and CAD/CAM tools. Make sure to revise your final year project thoroughly.',
            likes: 32,
            comments: 6
        },
        {
            author: 'Sneha Reddy',
            avatar: 'S',
            time: '6 hours ago',
            content: 'PSU preparation tips: Focus on GATE subjects, technical fundamentals, and stay updated with current affairs in your domain.',
            likes: 41,
            comments: 9
        }
    ],
    startup: [
        {
            author: 'Karthik Iyer',
            avatar: 'K',
            time: '1 hour ago',
            content: 'Just got an offer from a Series B startup! The interview process was much more flexible and focused on practical problem-solving rather than textbook DSA.',
            likes: 38,
            comments: 11
        },
        {
            author: 'Neha Gupta',
            avatar: 'N',
            time: '4 hours ago',
            content: 'Startup pros: Fast learning, diverse responsibilities, equity potential. Cons: Less job security, longer hours. Choose based on your career stage and risk appetite!',
            likes: 29,
            comments: 7
        }
    ],
    higher: [
        {
            author: 'Aditya Verma',
            avatar: 'A',
            time: '2 hours ago',
            content: 'Got admits from CMU and UIUC for MS in CS! GRE: 325, TOEFL: 110. Happy to help with SOP reviews and university selection.',
            likes: 52,
            comments: 14
        },
        {
            author: 'Riya Joshi',
            avatar: 'R',
            time: '7 hours ago',
            content: 'MBA vs MS? It depends on your goals. MS if you want to deepen technical skills, MBA if you\'re looking at management and business roles.',
            likes: 34,
            comments: 10
        }
    ]
};

const aiResponses = {
    'interview': 'For interview preparation, I recommend:\n\n1. Practice DSA problems daily on LeetCode/GeeksforGeeks\n2. Study system design fundamentals\n3. Prepare behavioral questions using STAR method\n4. Mock interviews with peers\n5. Research company culture and recent news',
    'resume': 'To improve your resume:\n\n1. Keep it concise (1 page for students)\n2. Quantify achievements with numbers\n3. Highlight relevant projects and internships\n4. Use action verbs (developed, implemented, optimized)\n5. Tailor it for each company',
    'google': 'Google interview tips:\n\n1. Focus heavily on DSA and problem-solving\n2. Practice coding on whiteboard/paper\n3. Explain your thought process clearly\n4. Study their interview process and culture\n5. Prepare questions about their products',
    'microsoft': 'Microsoft preparation:\n\n1. Strong DSA fundamentals\n2. Study object-oriented design\n3. Know data structures deeply\n4. Practice system design basics\n5. Understand their technology stack',
    'skills': 'To develop in-demand skills:\n\n1. Master one programming language deeply\n2. Learn system design principles\n3. Build real projects and deploy them\n4. Contribute to open source\n5. Stay updated with latest technologies',
    'default': 'I can help you with interview preparation, resume building, company-specific guidance, and skill development. What specific area would you like to discuss?'
};

// Current state
let currentMonth = 1; // February (0-indexed: 0=January, 1=February)
let currentYear = 2026;

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    renderCompanies();
    renderCalendar();
    renderUpcomingEvents();
    initChartAnimation();
    initFilterListeners();
});

// Navigation
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link, .mobile-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href').substring(1);
            navigateToSection(target);
        });
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }
}

function navigateToSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        }
    });
    
    // Close mobile menu
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.classList.remove('active');
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Render Companies
function renderCompanies(filter = 'all') {
    const companiesGrid = document.getElementById('companiesGrid');
    if (!companiesGrid) return;
    
    const filteredCompanies = filter === 'all' 
        ? companiesData 
        : companiesData.filter(c => c.type === filter);
    
    companiesGrid.innerHTML = filteredCompanies.map(company => `
        <div class="company-card" onclick="showCompanyDetails(${company.id})">
            <div class="company-header">
                <div class="company-logo-large" style="background: ${company.color};">
                    ${company.logo}
                </div>
                <div class="company-title">
                    <h3>${company.name}</h3>
                    <p class="company-role">${company.role}</p>
                </div>
            </div>
            <div class="company-details-section">
                <div class="detail-row">
                    <span class="detail-label">CTC</span>
                    <span class="detail-value">${company.ctc}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Eligibility</span>
                    <span class="detail-value">${company.eligibility}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Difficulty</span>
                    <span class="difficulty-badge difficulty-${company.difficulty}">
                        ${company.difficulty.charAt(0).toUpperCase() + company.difficulty.slice(1)}
                    </span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Deadline</span>
                    <span class="detail-value">${company.deadline}</span>
                </div>
            </div>
            <div class="probability-indicator">
                <div class="probability-bar">
                    <div class="probability-fill" style="width: ${company.probability}%"></div>
                </div>
                <span class="probability-text">${company.probability}% Match</span>
            </div>
        </div>
    `).join('');
}

// Company filter chips
function initFilterListeners() {
    const chips = document.querySelectorAll('.chip');
    chips.forEach(chip => {
        chip.addEventListener('click', function() {
            chips.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            const filter = this.getAttribute('data-filter');
            renderCompanies(filter);
        });
    });
}

// Show company details modal
function showCompanyDetails(companyId) {
    const company = companiesData.find(c => c.id === companyId);
    if (!company) return;
    
    const modal = document.getElementById('companyModal');
    const modalTitle = document.getElementById('modalCompanyName');
    const modalBody = document.getElementById('modalCompanyBody');
    
    modalTitle.textContent = company.name;
    modalBody.innerHTML = `
        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
            <div class="company-logo-large" style="background: ${company.color};">
                ${company.logo}
            </div>
            <div>
                <h3 style="margin-bottom: 0.25rem;">${company.role}</h3>
                <p style="color: var(--text-secondary);">${company.ctc}</p>
            </div>
        </div>
        
        <div style="margin-bottom: 1.5rem;">
            <h4 style="margin-bottom: 0.75rem;">Eligibility Criteria</h4>
            <p>${company.eligibility}</p>
        </div>
        
        <div style="margin-bottom: 1.5rem;">
            <h4 style="margin-bottom: 0.75rem;">Required Skills</h4>
            <div class="skills-tags">
                ${company.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        </div>
        
        <div style="margin-bottom: 1.5rem;">
            <h4 style="margin-bottom: 0.75rem;">Interview Rounds</h4>
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                ${company.rounds.map((round, index) => `
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                        <div style="width: 32px; height: 32px; background: var(--primary); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 600;">
                            ${index + 1}
                        </div>
                        <span>${round}</span>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div style="margin-bottom: 1.5rem;">
            <h4 style="margin-bottom: 0.75rem;">Preparation Tips</h4>
            <ul style="padding-left: 1.5rem; color: var(--text-secondary);">
                <li>Focus on ${company.skills[0]} fundamentals</li>
                <li>Practice previous year questions</li>
                <li>Research about company culture and products</li>
                <li>Prepare for behavioral questions</li>
            </ul>
        </div>
        
        <button class="btn btn-primary btn-full">Apply Now</button>
    `;
    
    modal.classList.add('active');
}

// Calendar functions
function renderCalendar() {
    const calendarGrid = document.getElementById('calendarGrid');
    if (!calendarGrid) return;
    
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                       'July', 'August', 'September', 'October', 'November', 'December'];
    
    document.getElementById('calendarMonth').textContent = `${monthNames[currentMonth]} ${currentYear}`;
    
    // Get first day of month and number of days
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    
    // Clear calendar
    calendarGrid.innerHTML = '';
    
    // Add day names
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    dayNames.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.innerHTML = `<span class="day-name">${day}</span>`;
        dayElement.style.cursor = 'default';
        calendarGrid.appendChild(dayElement);
    });
    
    // Add empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.className = 'calendar-day';
        emptyCell.style.opacity = '0.3';
        calendarGrid.appendChild(emptyCell);
    }
    
    // Add days of month
    const today = new Date();
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        
        // Check if this day has events
        const hasEvent = calendarEvents.some(event => 
            event.date === day && event.month === currentMonth && event.year === currentYear
        );
        
        if (hasEvent) {
            dayElement.classList.add('has-event');
        }
        
        // Check if today
        if (day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
            dayElement.classList.add('today');
        }
        
        dayElement.innerHTML = `<span class="day-number">${day}</span>`;
        
        if (hasEvent) {
            dayElement.innerHTML += '<div class="event-dot"></div>';
            dayElement.onclick = () => showDayEvents(day);
        }
        
        calendarGrid.appendChild(dayElement);
    }
}

function changeMonth(delta) {
    currentMonth += delta;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    } else if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar();
    renderUpcomingEvents();
}

function renderUpcomingEvents() {
    const eventsList = document.getElementById('eventsList');
    if (!eventsList) return;
    
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                       'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    // Get events for current month
    const monthEvents = calendarEvents
        .filter(event => event.month === currentMonth && event.year === currentYear)
        .sort((a, b) => a.date - b.date)
        .slice(0, 5);
    
    if (monthEvents.length === 0) {
        eventsList.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">No upcoming events this month</p>';
        return;
    }
    
    eventsList.innerHTML = monthEvents.map(event => `
        <div class="event-item" onclick="showEventDetails('${event.company}', '${event.type}', '${event.time}', ${event.date})">
            <div class="event-date">
                <div class="event-day">${event.date}</div>
                <div class="event-month">${monthNames[event.month]}</div>
            </div>
            <div class="event-details">
                <h4>${event.company} - ${event.type}</h4>
                <p class="event-time">${event.time}</p>
                <span class="event-type">${event.type}</span>
            </div>
        </div>
    `).join('');
}

function showDayEvents(day) {
    const dayEvents = calendarEvents.filter(event => 
        event.date === day && event.month === currentMonth && event.year === currentYear
    );
    
    if (dayEvents.length === 0) return;
    
    const event = dayEvents[0];
    showEventDetails(event.company, event.type, event.time, day);
}

function showEventDetails(company, type, time, day) {
    const modal = document.getElementById('eventModal');
    const modalTitle = document.getElementById('modalEventTitle');
    const modalBody = document.getElementById('modalEventBody');
    
    modalTitle.textContent = `${company} - ${type}`;
    modalBody.innerHTML = `
        <div style="margin-bottom: 1.5rem;">
            <h4 style="margin-bottom: 0.5rem;">Date & Time</h4>
            <p style="font-size: 1.125rem; color: var(--primary); font-weight: 600;">
                February ${day}, 2026 at ${time}
            </p>
        </div>
        
        <div style="margin-bottom: 1.5rem;">
            <h4 style="margin-bottom: 0.75rem;">Preparation Checklist</h4>
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                <label style="display: flex; align-items: center; gap: 0.5rem;">
                    <input type="checkbox"> Review company background
                </label>
                <label style="display: flex; align-items: center; gap: 0.5rem;">
                    <input type="checkbox"> Practice relevant problems
                </label>
                <label style="display: flex; align-items: center; gap: 0.5rem;">
                    <input type="checkbox"> Prepare questions for interviewer
                </label>
                <label style="display: flex; align-items: center; gap: 0.5rem;">
                    <input type="checkbox"> Test your setup (if online)
                </label>
            </div>
        </div>
        
        <div style="margin-bottom: 1.5rem;">
            <h4 style="margin-bottom: 0.75rem;">Key Focus Areas</h4>
            <ul style="padding-left: 1.5rem; color: var(--text-secondary);">
                <li>Data Structures & Algorithms</li>
                <li>Problem-solving approach</li>
                <li>Code optimization</li>
                <li>Communication skills</li>
            </ul>
        </div>
        
        <div style="display: flex; gap: 0.75rem;">
            <button class="btn btn-primary" style="flex: 1;">Set Reminder</button>
            <button class="btn btn-outline" style="flex: 1;">Add to Calendar</button>
        </div>
    `;
    
    modal.classList.add('active');
}

// Community functions
function openCommunity(communityType) {
    const modal = document.getElementById('communityModal');
    const modalTitle = document.getElementById('modalCommunityName');
    const postsContainer = document.getElementById('communityPosts');
    
    const communityNames = {
        faang: 'FAANG Aspirants Community',
        core: 'Core Engineering Community',
        startup: 'Startup Enthusiasts Community',
        higher: 'Higher Studies Community'
    };
    
    modalTitle.textContent = communityNames[communityType];
    
    const posts = communityPosts[communityType] || [];
    postsContainer.innerHTML = posts.map(post => `
        <div class="post-item">
            <div class="post-header">
                <div class="post-avatar">${post.avatar}</div>
                <div class="post-author-info">
                    <h4>${post.author}</h4>
                    <p class="post-meta">${post.time}</p>
                </div>
            </div>
            <div class="post-content">
                <p>${post.content}</p>
            </div>
            <div class="post-actions">
                <div class="post-action">
                    <span>👍</span>
                    <span>${post.likes} Likes</span>
                </div>
                <div class="post-action">
                    <span>💬</span>
                    <span>${post.comments} Comments</span>
                </div>
                <div class="post-action">
                    <span>🔗</span>
                    <span>Share</span>
                </div>
            </div>
        </div>
    `).join('');
    
    modal.classList.add('active');
}

// Skill Gap Modal
function showSkillGap() {
    const modal = document.getElementById('skillGapModal');
    modal.classList.add('active');
}

// AI Mentor
function showAIMentor() {
    const modal = document.getElementById('aiMentorModal');
    modal.classList.add('active');
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    const messagesContainer = document.getElementById('chatMessages');
    
    // Add user message
    const userMessage = document.createElement('div');
    userMessage.className = 'chat-message user';
    userMessage.innerHTML = `
        <div class="message-avatar">U</div>
        <div class="message-content">
            <p>${message}</p>
        </div>
    `;
    messagesContainer.appendChild(userMessage);
    
    // Clear input
    input.value = '';
    
    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    // Simulate AI response
    setTimeout(() => {
        const response = getAIResponse(message);
        const botMessage = document.createElement('div');
        botMessage.className = 'chat-message bot';
        botMessage.innerHTML = `
            <div class="message-avatar">🤖</div>
            <div class="message-content">
                <p>${response}</p>
            </div>
        `;
        messagesContainer.appendChild(botMessage);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 1000);
}

function getAIResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    for (const [key, response] of Object.entries(aiResponses)) {
        if (lowerMessage.includes(key)) {
            return response;
        }
    }
    
    return aiResponses.default;
}

// Handle Enter key in chat
document.addEventListener('DOMContentLoaded', function() {
    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
});

// Modal close functions
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
    }
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
    }
});

// Chart animations
function initChartAnimation() {
    const companyTrendChart = document.getElementById('companyTrendChart');
    if (!companyTrendChart) return;
    
    const months = ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'];
    const values = [32, 45, 38, 52, 48, 58];
    const maxValue = Math.max(...values);
    
    companyTrendChart.innerHTML = months.map((month, index) => {
        const height = (values[index] / maxValue) * 100;
        return `
            <div class="bar-item">
                <div class="bar" style="height: ${height}%">
                    <div class="bar-value">${values[index]}</div>
                </div>
                <div class="bar-label">${month}</div>
            </div>
        `;
    }).join('');
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const targetId = href.substring(1);
            navigateToSection(targetId);
        }
    });
});

// Add loading animation for cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Console greeting
console.log('%c🚀 Welcome to NEXUS!', 'font-size: 20px; font-weight: bold; color: #4F46E5;');
console.log('%cPlacement Intelligence Platform', 'font-size: 14px; color: #64748B;');
console.log('%cBuilt with ❤️ for students', 'font-size: 12px; color: #22C55E;');